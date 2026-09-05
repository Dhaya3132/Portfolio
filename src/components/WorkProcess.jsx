import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { phases } from "./workprocess/data";
import {
  DesignVisual,
  StructureVisual,
  DevelopmentVisual,
  TestingVisual,
  ProductionVisual,
} from "./workprocess/ProcessVisuals";

const visualByPhase = {
  design: DesignVisual,
  structure: StructureVisual,
  development: DevelopmentVisual,
  testing: TestingVisual,
  production: ProductionVisual,
};

const brickAnimationStyles = `
.brick-animation {
    --brick-red-300: hsl(358, 78%, 65%);
    --brick-red-400: hsl(358, 78%, 55%);
    --brick-red-500: hsl(358, 78%, 49%);
    --brick-orange-300: hsl(26, 91%, 70%);
    --brick-orange-400: hsl(26, 91%, 60%);
    --brick-orange-500: hsl(26, 91%, 54%);
    --brick-green-300: hsl(80, 57%, 70%);
    --brick-green-400: hsl(80, 57%, 60%);
    --brick-green-500: hsl(80, 57%, 51%);
    --brick-blue-300: hsl(210, 69%, 70%);
    --brick-blue-400: hsl(210, 69%, 55%);
    --brick-blue-500: hsl(210, 69%, 42%);
}
.brick-animation .pl {
    display: block;
    margin: auto;
    width: 16em;
    height: auto;
}
.brick-animation .pl__brick--red { --brick-left: var(--brick-red-400); --brick-top: var(--brick-red-300); fill: var(--brick-red-500); }
.brick-animation .pl__brick--orange { --brick-left: var(--brick-orange-400); --brick-top: var(--brick-orange-300); fill: var(--brick-orange-500); }
.brick-animation .pl__brick--green { --brick-left: var(--brick-green-400); --brick-top: var(--brick-green-300); fill: var(--brick-green-500); }
.brick-animation .pl__brick--blue { --brick-left: var(--brick-blue-400); --brick-top: var(--brick-blue-300); fill: var(--brick-blue-500); }
.brick-animation .pl__brick-group { animation: brick-bounce 6s cubic-bezier(0.37, 0, 0.63, 1) infinite; }
.brick-animation .pl__brick-group--1 { animation-name: brick-move-1; }
.brick-animation .pl__brick-group--2 { animation-name: brick-move-2; }
.brick-animation .pl__brick-group--3 { animation-name: brick-move-3; }
.brick-animation .pl__brick-group--4 { animation-name: brick-move-4; }
@keyframes brick-bounce {
    from, 12%, 15%, 27%, 30%, 42%, 45%, 62%, 65%, 77%, 80%, 92%, 95%, to { transform: translate(0, 0); }
    13.5%, 28.5%, 43.5%, 63.5%, 78.5%, 93.5% { transform: translate(0, 6px); }
}
@keyframes brick-move-1 {
    from, 4%, 92%, to { transform: translate(0, 0); }
    12%, 19%, 77%, 84% { transform: translate(17.5px, 10px); }
    27%, 34%, 62%, 69% { transform: translate(35px, 20px); }
    42%, 54% { transform: translate(52.5px, 30px); }
}
@keyframes brick-move-2 {
    from, 92%, to { transform: translate(0, -47px); }
    4% { transform: translate(0, -87px); }
    8% { transform: translate(-35px, -87px); }
    12%, 80% { transform: translate(-35px, -67px); }
    84% { transform: translate(-35px, -107px); }
    88% { transform: translate(0, -67px); }
}
@keyframes brick-move-3 {
    from, 15%, 77%, to { transform: translate(0, -47px); }
    19% { transform: translate(0, -87px); }
    23% { transform: translate(-35px, -87px); }
    27%, 65% { transform: translate(-35px, -67px); }
    69% { transform: translate(-35px, -107px); }
    73% { transform: translate(0, -67px); }
}
@keyframes brick-move-4 {
    from, 30%, 62%, to { transform: translate(0, -47px); }
    34% { transform: translate(0, -87px); }
    38% { transform: translate(-35px, -87px); }
    42%, 50% { transform: translate(-35px, -67px); }
    54% { transform: translate(-35px, -107px); }
    58% { transform: translate(0, -67px); }
}
`;

const BrickAnimation = () => (
  <div className="brick-animation flex h-full items-center justify-center px-4 py-8">
    <style>{brickAnimationStyles}</style>
    <svg
      className="pl"
      viewBox="0 0 300 300"
      width="720px"
      height="720px"
      role="img"
      aria-label="Animated workflow bricks"
    >
      <defs>
        <symbol id="brick">
          <polygon fill="var(--brick-top)" points="70 0,140 39,70 125,0 39" />
          <polygon
            fill="var(--brick-left)"
            points="0 39,70 78,71 78,70 125,0 86"
          />
          <polygon points="70 78,140 39,140 86,70 125" />
          <use href="#studs" />
        </symbol>
        <symbol id="stud">
          <rect y="1" rx="14" ry="8" width="28" height="24" />
          <ellipse fill="var(--brick-top)" cx="14" cy="8" rx="14" ry="8" />
        </symbol>
        <symbol id="studs">
          <use href="#stud" transform="translate(21, 22)" />
          <use href="#stud" transform="translate(56, 3)" />
          <use href="#stud" transform="translate(56, 41)" />
          <use href="#stud" transform="translate(91, 22)" />
        </symbol>
      </defs>
      <g transform="translate(140, 218)">
        <g className="pl__brick-group">
          <g className="pl__brick-group pl__brick-group--1">
            <use className="pl__brick pl__brick--blue" href="#brick" />
            <g
              className="pl__brick-group pl__brick-group--2"
              transform="translate(0, -47)"
            >
              <use className="pl__brick pl__brick--green" href="#brick" />
              <g
                className="pl__brick-group pl__brick-group--3"
                transform="translate(0, -47)"
              >
                <use className="pl__brick pl__brick--orange" href="#brick" />
                <g
                  className="pl__brick-group pl__brick-group--4"
                  transform="translate(0, -47)"
                >
                  <use className="pl__brick pl__brick--red" href="#brick" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
);

const WorkProcess = () => {
  const [activePhaseId, setActivePhaseId] = useState("design");
  const activePhase = phases.find((phase) => phase.id === activePhaseId);
  const activeIndex = activePhase
    ? phases.findIndex((phase) => phase.id === activePhase.id)
    : -1;
  const Visual = activePhase ? visualByPhase[activePhase.id] : null;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto w-full rounded-[2rem] px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-6 rounded-4xl p-4 sm:p-6 lg:gap-8 lg:p-8">
          <div className="w-full text-start flex md:flex-row flex-col items-center gap-5">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-5xl font-display mx-auto mb-10 text-blue-500 text-4xl leading-tight sm:text-5xl lg:text-7xl"
            >
              From design to deployment, the structure, code quality, and
              discipline behind every build.
            </motion.p>
            <motion.p className="text-9xl -rotate-9" animate={{ y: [0, -14, 0], rotate: [-8, -2, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              👀
            </motion.p>
          </div>


          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-[10px] translate-y-[10px] rounded-2xl bg-[linear-gradient(115deg,#ff2d95_0%,#fb4d7c_45%,#ff8a3d_100%)]"
            />

            <div className="relative w-full bg-white border-2 border-black p-5 rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase ? activePhase.id : "idle"}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full rounded-3xl p-2 sm:p-4"
                >
                  {activePhase ? (
                    <>
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-[20px] font-light text-gray-500">
                            Active workflow
                          </p>
                          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 font-Display">
                            {activePhase.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
                            {activePhase.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-gray-900 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
                            0{activeIndex + 1}
                          </span>
                          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-600">
                            Selected result
                          </span>
                        </div>
                      </div>

                      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                        <div className="rounded-[1.5rem] border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4">
                          <div className="h-[250px] sm:h-[300px]">
                            {Visual && (
                              <Visual
                                items={activePhase.children}
                                rootIcon={activePhase.icon}
                              />
                            )}
                          </div>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto pr-1">
                          <div className="space-y-3">
                            {activePhase.children.map((child, index) => {
                              const ChildIcon = child.icon;
                              return (
                                <motion.div
                                  key={child.id}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: index * 0.05,
                                    duration: 0.25,
                                  }}
                                  className="rounded-2xl border border-gray-200/80 bg-white/80 p-3"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                                      <ChildIcon className="text-sm" />
                                    </span>
                                    <div>
                                      <h4 className="text-sm font-semibold text-gray-900">
                                        {child.label}
                                      </h4>
                                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                        {child.description}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-[30rem] flex flex-col items-center justify-center gap-4 rounded-[1.5rem] px-4 py-10 text-start sm:px-8">
                      <div>
                        <BrickAnimation />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="w-full bg-gray-50 p-5 rounded-xl">
                <div className="w-full">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    {phases.map((phase, index) => {
                      const isActive = activePhase?.id === phase.id;
                      const PhaseIcon = phase.icon;

                      return (
                        <motion.button
                          key={phase.id}
                          whileHover={{ y: -1, scale: 1 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => setActivePhaseId(phase.id)}
                          className={`w-full rounded-2xl p-4 text-left transition-all duration-300 ${
                            isActive
                              ? "bg-pink-600 text-white"
                              : "bg-white text-gray-900 hover:bg-gray-50" 
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                                isActive
                                  ? "bg-white text-black "
                                  : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              <PhaseIcon className="text-sm" />
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <p
                                  className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${isActive ? "text-white" : "text-gray-400"}`}
                                >
                                  0{index + 1}
                                </p>
                                <span className="text-[10px] text-gray-400">
                                  {phase.children.length} steps
                                </span>
                              </div>
                              <h3
                                className={`mt-1 text-base font-semibold ${isActive ? "text-white" : "text-gray-900"}`}
                              >
                                {phase.title}
                              </h3>
                              <p
                                className={`mt-1 line-clamp-2 text-sm leading-relaxed ${isActive ? "text-white" : "text-gray-600"}`}
                              >
                                {phase.description}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
