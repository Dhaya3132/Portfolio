import React from 'react';
import { motion } from 'framer-motion';
import { EASE_FLUID } from '../../utils/motion';

const surfaceClass = 'rounded-xl border border-gray-200/80 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm';
const textClass = 'text-gray-600/80';
const softTextClass = 'text-gray-500/70';
const accentClass = 'bg-gray-400/70';
const mutedClass = 'bg-gray-200/80';
const gradientFill = 'bg-[linear-gradient(90deg,#0a84ff,#bf5af2,#ff375f)]';

// Each visual is re-mounted when the phase changes, so these entrance
// animations replay every time a new phase is selected.

// Design Plan — panel with progress rows that fill in, one per sub-step.
export const DesignVisual = ({ items }) => (
    <div className={`relative w-full h-full p-4 flex flex-col justify-center gap-3 overflow-hidden ${surfaceClass}`}>
        <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="mt-4 flex flex-col gap-3.5">
            {items.map((item, i) => {
                const Icon = item.icon;
                const width = 85 - i * 22;
                return (
                    <motion.div
                        key={item.id}
                        className="flex items-center gap-2.5"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: EASE_FLUID }}
                    >
                        <Icon className={`${textClass} text-xs shrink-0`} />
                        <span className={`text-[10px] ${softTextClass} w-20 shrink-0 truncate`}>{item.label}</span>
                        <span className={`flex-1 h-1.5 rounded-full ${mutedClass} overflow-hidden`}>
                            <motion.span
                                className={`block h-full rounded-full ${gradientFill}`}
                                initial={{ width: '0%' }}
                                animate={{ width: `${width}%` }}
                                transition={{ delay: 0.25 + i * 0.12, duration: 1.2, ease: EASE_FLUID }}
                            />
                        </span>
                    </motion.div>
                );
            })}
        </div>
    </div>
);

// Prioritize Structure — a root box branching into three child boxes.
export const StructureVisual = ({ items }) => (
    <div className={`relative w-full h-full flex flex-col items-center justify-center gap-4 py-4 overflow-hidden ${surfaceClass}`}>
        <motion.div
            className={`px-3 py-1.5 rounded-md border border-gray-200/90 bg-gray-50/80 text-[10px] ${textClass} font-medium tracking-wide`}
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE_FLUID }}
        >
            src/
        </motion.div>
        <div className="relative flex items-start justify-center gap-4 w-full px-4">
            <svg className="absolute -top-4 left-0 w-full h-4" viewBox="0 0 200 20" preserveAspectRatio="none" fill="none">
                <motion.path
                    d="M100 0 V8 M100 8 H30 M100 8 H170 M30 8 V16 M170 8 V16 M100 8 V16"
                    stroke="rgba(94,92,230,0.45)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.2, duration: 0.9, ease: EASE_FLUID }}
                />
            </svg>
            {items.map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.id}
                        className="flex flex-col items-center gap-1.5 rounded-lg border border-gray-200/80 bg-gray-50/80 px-2.5 py-2 flex-1"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 + i * 0.12, duration: 0.6, ease: EASE_FLUID }}
                    >
                        <Icon className={`${textClass} text-xs`} />
                        <span className={`text-[8.5px] ${softTextClass} text-center leading-tight`}>{item.label}</span>
                    </motion.div>
                );
            })}
        </div>
    </div>
);

// Development — terminal window with code-like lines and a blinking cursor.
export const DevelopmentVisual = ({ items }) => (
    <div className={`relative w-full h-full p-4 overflow-hidden font-sans ${surfaceClass}`}>
        <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
            <span className={`ml-2 text-[9px] ${softTextClass}`}>component.jsx</span>
        </div>
        <div className="flex flex-col gap-1.5 text-[10px]">
            <div className={`${softTextClass}`}>01 &nbsp;<span className={`${textClass}`}>import</span> {'{'} {items[1]?.label.split(' ')[0] || 'React'} {'}'}</div>
            {items.map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.id}
                        className={`flex items-center gap-1.5 ${textClass}`}
                        initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                        transition={{ delay: 0.2 + i * 0.25, duration: 0.5, ease: 'easeOut' }}
                    >
                        <span className={`${softTextClass}`}>{String(i + 2).padStart(2, '0')}</span>
                        <Icon className={`${textClass} text-[10px]`} />
                        <span className={`${textClass}`}>{item.label}</span>
                        <span className="text-[#28c840]">✓</span>
                    </motion.div>
                );
            })}
            <div className={`${softTextClass}`}>
                05 &nbsp;<span className={`inline-block w-1.5 h-3 ${accentClass} animate-pulse align-middle`} />
            </div>
        </div>
    </div>
);

// Testing — checklist rows whose "passed" pills pop in one by one.
export const TestingVisual = ({ items }) => (
    <div className={`relative w-full h-full p-4 flex flex-col justify-center gap-2.5 overflow-hidden ${surfaceClass}`}>
        {items.map((item, i) => {
            const Icon = item.icon;
            return (
                <motion.div
                    key={item.id}
                    className="flex items-center justify-between gap-2 rounded-lg border border-gray-200/80 bg-gray-50/80 px-3 py-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: EASE_FLUID }}
                >
                    <div className="flex items-center gap-2 min-w-0">
                        <Icon className={`${textClass} text-xs shrink-0`} />
                        <span className={`text-[10px] ${textClass} truncate`}>{item.label}</span>
                    </div>
                    <motion.span
                        className="shrink-0 flex items-center gap-1 text-[8.5px] text-green-700 border border-green-200 bg-green-50 rounded-full px-2 py-0.5"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.25, type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Passed
                    </motion.span>
                </motion.div>
            );
        })}
    </div>
);

// Production — a hero orbit: central node with satellites circling around it.
export const ProductionVisual = ({ items, rootIcon: RootIcon }) => (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${surfaceClass}`}>
        <span className="absolute w-40 h-40 rounded-full border border-gray-200/80" />
        <span className="absolute w-28 h-28 rounded-full border border-gray-200/80" />
        <span className="absolute w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(191,90,242,0.18),transparent_70%)]" />
        <motion.div
            className={`relative w-14 h-14 rounded-full ${gradientFill} flex items-center justify-center z-10 shadow-[0_10px_30px_-8px_rgba(191,90,242,0.7)]`}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.1, 1] }}
            transition={{ duration: 0.7, ease: EASE_FLUID }}
        >
            {RootIcon && <RootIcon className="text-white text-xl" />}
        </motion.div>
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
            {items.map((item, i) => {
                const Icon = item.icon;
                const angle = (i / items.length) * 360 + 30;
                const radius = 78;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                    <div
                        key={item.id}
                        className="absolute"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                        {/* counter-rotate so icons stay upright while orbiting */}
                        <motion.div
                            className="w-9 h-9 rounded-full border border-gray-200/80 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: -360 }}
                            transition={{
                                opacity: { delay: 0.3 + i * 0.12, duration: 0.4 },
                                scale: { delay: 0.3 + i * 0.12, type: 'spring', stiffness: 300, damping: 15 },
                                rotate: { duration: 24, repeat: Infinity, ease: 'linear' },
                            }}
                        >
                            <Icon className={`${textClass} text-sm`} />
                        </motion.div>
                    </div>
                );
            })}
        </motion.div>
    </div>
);
