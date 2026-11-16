import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMusic, FiX, FiMinus } from "react-icons/fi";
import { EASE_FLUID } from "../utils/motion";

// Little animated equalizer so the collapsed pill still feels "live".
const Equalizer = () => (
  <span className="flex h-3.5 items-end gap-[2px]" aria-hidden="true">
    {[0, 1, 2, 3].map((bar) => (
      <motion.span
        key={bar}
        className="apple-gradient-bg w-[3px] rounded-full"
        animate={{ height: ["30%", "100%", "45%", "85%", "30%"] }}
        transition={{ duration: 1.1 + bar * 0.15, repeat: Infinity, ease: "easeInOut", delay: bar * 0.1 }}
      />
    ))}
  </span>
);

const SpotifyNowPlaying = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 24, scale: 0.95, filter: "blur(8px)" }}
          transition={{
            default: { type: "spring", stiffness: 160, damping: 20, delay: 2.2 },
            layout: { duration: 0.5, ease: EASE_FLUID },
          }}
          style={{ borderRadius: expanded ? 16 : 999 }}
          className={`fixed bottom-4 right-4 z-50 border border-white/10 bg-black/70 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 sm:bottom-6 sm:right-6 ${
            expanded ? "w-[calc(100vw-2rem)] max-w-sm p-3" : "w-auto p-1.5"
          }`}
        >
          {expanded ? (
            <motion.div layout="position" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="mb-2 flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2">
                  <Equalizer />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                    Now Playing
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    aria-label="Minimise now playing widget"
                    className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <FiMinus size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close now playing widget"
                    className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              </div>
              <iframe
                title="Spotify: currently listening"
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/track/2p8IUWQDrpjuFltbdgLOag?utm_source=generator&si=488ccd54a25d4abb"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px" }}
                className="w-full"
              />
            </motion.div>
          ) : (
            <motion.button
              layout="position"
              type="button"
              onClick={() => setExpanded(true)}
              aria-label="Show what I'm listening to"
              className="flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1db954] text-black">
                <FiMusic size={13} />
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 sm:inline">
                Now playing
              </span>
              <Equalizer />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpotifyNowPlaying;
