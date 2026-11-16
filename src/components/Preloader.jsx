import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { EASE_IN_OUT } from "../utils/motion";

/**
 * "Developing" intro.
 *
 * A polaroid drops onto the grid paper and gets pinned. The photo inside starts
 * as a murky grey exposure and develops into the hero picture while the counter
 * climbs (the progress IS the photo). At 100% the polaroid window zooms out to
 * fill the screen and becomes the real hero background, so the intro hands off
 * to the page instead of just covering it.
 *
 * How the hand-off works: the photo is a full-viewport layer that is scaled down
 * by `k` and lifted into the polaroid window. Because the window has the same
 * aspect ratio as the viewport, "scale k, move up d" and "scale 1, move 0" show
 * exactly the same crop, so zooming it back to 1 is a perfect shared-element
 * transition with no swap and no jump.
 *
 * Everything that animates every frame is a MotionValue written straight to the
 * DOM - the component itself never re-renders while it plays.
 */

const HERO_IMAGE = "/assests/about/hero1.webp";
const PIN_IMAGE = "/assests/about/ping.webp";

// Polaroid proportions (px)
const PAD = 14;
const CAPTION = 92;
const WINDOW_RADIUS = 5;

// The hero (About.jsx) starts its Ken Burns at this scale. Matching it here makes
// the last frame of the intro identical to the first frame of the hero.
const HERO_SCALE = 1.25;

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // trailing 0 lets 9 -> 0 roll forward
const HUNDREDS = [0, 1];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = src;
  });

const getGeometry = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const windowW = Math.min(400, vw * 0.55);
  const windowH = windowW * (vh / vw); // same aspect as the viewport
  const k = windowW / vw;
  const cardW = windowW + PAD * 2;
  const cardH = PAD + windowH + CAPTION;
  // how far the window centre sits above the card (= viewport) centre
  const lift = cardH / 2 - PAD - windowH / 2;
  return { windowW, windowH, k, cardW, cardH, lift };
};

// One rolling digit column. `offset` is how many digit-heights it has scrolled.
const DigitColumn = ({ offset, digits, width }) => {
  const y = useTransform(offset, (value) => `${-value}em`);
  return (
    <motion.span
      className="relative inline-block h-[1em] overflow-hidden"
      style={{ width }}
    >
      <motion.span className="absolute left-0 top-0 flex w-full flex-col items-center" style={{ y }}>
        {digits.map((digit, index) => (
          <span key={index} className="block h-[1em] leading-none">
            {digit}
          </span>
        ))}
      </motion.span>
    </motion.span>
  );
};

// Mechanical odometer: ones roll continuously, tens/hundreds roll only while
// the column to their right wraps from 9 to 0.
const Odometer = ({ progress }) => {
  const ones = useTransform(progress, (p) => p % 10);
  const tens = useTransform(progress, (p) => Math.floor(p / 10) + Math.min(1, Math.max(0, (p % 10) - 9)));
  const hundreds = useTransform(progress, (p) => (p >= 100 ? 1 : Math.max(0, p - 99)));
  const tensWidth = useTransform(progress, (p) => (p >= 9 ? "0.68em" : "0em"));
  const hundredsWidth = useTransform(progress, (p) => (p >= 99 ? "0.68em" : "0em"));

  return (
    <span className="inline-flex items-baseline font-sans text-6xl font-medium leading-none tracking-tight text-black/85 tabular-nums sm:text-7xl">
      <DigitColumn offset={hundreds} digits={HUNDREDS} width={hundredsWidth} />
      <DigitColumn offset={tens} digits={DIGITS} width={tensWidth} />
      <DigitColumn offset={ones} digits={DIGITS} width="0.68em" />
      <span className="ml-1 text-2xl text-black/45">%</span>
    </span>
  );
};

const Preloader = ({ onFinish }) => {
  const lenis = useLenis();
  const [geometry, setGeometry] = useState(getGeometry);
  const [fontReady, setFontReady] = useState(false);
  const [phase, setPhase] = useState("developing");
  const expanding = useRef(false);
  const finishRef = useRef(onFinish);
  useEffect(() => {
    finishRef.current = onFinish;
  }, [onFinish]);

  // 0 -> 100. Drives the counter, the developing photo and the wobble.
  const progress = useMotionValue(0);
  // Photo window -> full screen (see header comment).
  const scale = useMotionValue(geometry.k);
  const lift = useMotionValue(-geometry.lift);
  const radius = useMotionValue(WINDOW_RADIUS / geometry.k);
  // Fades out the polaroid body, pin, caption and labels as the photo takes over.
  const chrome = useMotionValue(1);

  // The colour photo fades in over the murky one.
  const developed = useTransform(progress, [8, 96], [0, 1], { clamp: true });
  const captionOpacity = useTransform(progress, [35, 70], [0, 1], { clamp: true });
  // Like shaking a polaroid: a wobble that dies out exactly at 100%.
  const wobble = useTransform(progress, (p) => {
    const rest = 1 - p / 100;
    return Math.sin(p * 0.5) * 4 * rest * rest;
  });

  // Lock scrolling while the intro is on screen.
  useEffect(() => {
    lenis?.stop();
    document.documentElement.classList.add("is-loading");
    return () => {
      lenis?.start();
      document.documentElement.classList.remove("is-loading");
    };
  }, [lenis]);

  // Keep the layout right if the window is resized mid-intro.
  useEffect(() => {
    const onResize = () => {
      const next = getGeometry();
      setGeometry(next);
      if (expanding.current) return;
      scale.set(next.k);
      lift.set(-next.lift);
      radius.set(WINDOW_RADIUS / next.k);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [scale, lift, radius]);

  // Don't show the caption in a fallback font.
  useEffect(() => {
    let cancelled = false;
    Promise.race([document.fonts?.load("40px Engagement") ?? Promise.resolve(), sleep(1500)]).then(() => {
      if (!cancelled) setFontReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // The whole timeline.
  useEffect(() => {
    let cancelled = false;
    const running = [];
    const play = (target, to, options) => {
      const controls = animate(target, to, options);
      running.push(controls);
      return controls;
    };

    const run = async () => {
      // Real loading, capped so a slow network can't trap anyone here.
      const assets = Promise.race([Promise.all([loadImage(HERO_IMAGE), loadImage(PIN_IMAGE)]), sleep(3500)]);

      // Develop to 90% on a fixed schedule, then wait for the image if it is late.
      await Promise.all([play(progress, 90, { delay: 0.45, duration: 1.5, ease: [0.3, 0.1, 0.2, 1] }), assets]);
      if (cancelled) return;

      await play(progress, 100, { duration: 0.4, ease: "easeOut" });
      if (cancelled) return;
      setPhase("ready");

      await sleep(260);
      if (cancelled) return;

      // Window -> full screen.
      expanding.current = true;
      const opts = { duration: 0.95, ease: EASE_IN_OUT };
      await Promise.all([
        play(scale, 1, opts),
        play(lift, 0, opts),
        play(radius, 0, opts),
        play(chrome, 0, { duration: 0.3, ease: "easeOut" }),
      ]);
      if (!cancelled) finishRef.current?.();
    };

    run();
    return () => {
      cancelled = true;
      running.forEach((controls) => controls.stop());
    };
  }, [progress, scale, lift, radius, chrome]);

  const { windowW, windowH, cardW, cardH } = geometry;

  return (
    <motion.div
      key="preloader"
      role="status"
      aria-label="Loading portfolio"
      className="paper-grid fixed inset-0 z-[100000] overflow-hidden text-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* editorial corner labels */}
      <motion.div style={{ opacity: chrome }} className="pointer-events-none absolute inset-0">
        <p className="absolute left-6 top-6 text-[11px] font-medium uppercase tracking-[0.3em] text-black/45 sm:left-10 sm:top-8 sm:tracking-[0.4em]">
          Portfolio · 2026
        </p>
        <p className="absolute right-6 top-6 hidden text-right text-[11px] font-medium uppercase tracking-[0.4em] text-black/45 sm:right-10 sm:top-8 sm:block">
          Software Engineer
        </p>
        <div className="absolute bottom-7 left-6 sm:bottom-9 sm:left-10">
          <Odometer progress={progress} />
        </div>
        <p className="absolute bottom-9 right-6 text-[11px] font-medium uppercase tracking-[0.4em] text-black/45 sm:bottom-12 sm:right-10">
          {phase === "ready" ? "Ready" : "Developing"}
          <span className={phase === "ready" ? "hidden" : "animate-pulse"}> …</span>
        </p>
      </motion.div>

      {/* The polaroid drops in from above and bounces onto the paper. */}
      <motion.div
        className="absolute inset-0"
        initial={{ y: "-75vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 70, damping: 13, mass: 1 },
          opacity: { duration: 0.25 },
        }}
      >
        {/* 1. polaroid body + caption */}
        <motion.div
          style={{ rotate: wobble, opacity: chrome }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="relative rounded-[6px] border border-gray-100 bg-[#fbfbf8] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]"
            style={{ width: cardW, height: cardH }}
          >
            {/* the empty window the photo will sit in */}
            <div
              className="absolute rounded-[5px] bg-black/[0.04] ring-1 ring-black/10"
              style={{ left: PAD, top: PAD, width: windowW, height: windowH }}
            />
            <motion.div
              style={{ opacity: captionOpacity, height: CAPTION, visibility: fontReady ? "visible" : "hidden" }}
              className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-1.5"
            >
              <p className="apple-gradient font-display text-5xl leading-none">Dhayalan</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-black/45">
                Software Engineer · 2026
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. the photo: a full-viewport layer scaled into the polaroid window */}
        <motion.div style={{ rotate: wobble }} className="pointer-events-none absolute inset-0">
          <motion.div
            style={{ y: lift, scale, borderRadius: radius }}
            className="absolute inset-0 overflow-hidden bg-neutral-300"
          >
            {/* same box + scale as the hero image in About.jsx */}
            <div className="absolute inset-x-0 -top-[5%] h-[115%]">
              {/* undeveloped: murky, dark, desaturated */}
              <img
                src={HERO_IMAGE}
                alt=""
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  transform: `scale(${HERO_SCALE})`,
                  filter: "grayscale(1) sepia(0.35) brightness(0.42) contrast(1.15)",
                }}
              />
              {/* developed: full colour, fades in with progress */}
              <motion.img
                src={HERO_IMAGE}
                alt=""
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ transform: `scale(${HERO_SCALE})`, opacity: developed }}
              />
            </div>
            {/* camera flash when the polaroid lands */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>

        {/* 3. the pin, above the photo */}
        <motion.div
          style={{ rotate: wobble, opacity: chrome }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="relative" style={{ width: cardW, height: cardH }}>
            <motion.img
              src={PIN_IMAGE}
              alt=""
              className="absolute -top-7 left-1/2 h-12 w-12 -translate-x-1/2 object-contain drop-shadow-[0_6px_5px_rgba(0,0,0,0.25)]"
              initial={{ scale: 0, y: -26, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 420, damping: 16 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
