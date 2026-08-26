import React from 'react';

const surfaceClass = 'rounded-xl border border-gray-200/80 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm';
const textClass = 'text-gray-600/80';
const softTextClass = 'text-gray-500/70';
const accentClass = 'bg-gray-400/70';
const mutedClass = 'bg-gray-200/80';

// Design Plan — panel with scan-line rows, one per sub-step.
export const DesignVisual = ({ items }) => (
    <div className={`relative w-full h-full p-4 flex flex-col justify-center gap-3 overflow-hidden ${surfaceClass}`}>
        <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-400/60" />
            <span className="w-2 h-2 rounded-full bg-gray-400/60" />
            <span className="w-2 h-2 rounded-full bg-gray-400/60" />
        </div>
        <div className="mt-4 flex flex-col gap-3.5">
            {items.map((item, i) => {
                const Icon = item.icon;
                const width = 85 - i * 22;
                return (
                    <div key={item.id} className="flex items-center gap-2.5">
                        <Icon className={`${textClass} text-xs shrink-0`} />
                        <span className={`text-[10px] ${softTextClass} w-20 shrink-0 truncate`}>{item.label}</span>
                        <span className={`flex-1 h-1 rounded-full ${mutedClass} overflow-hidden`}>
                            <span
                                className={`block h-full rounded-full ${accentClass}`}
                                style={{ width: `${width}%` }}
                            />
                        </span>
                    </div>
                );
            })}
        </div>
    </div>
);

// Prioritize Structure — a root box branching into three child boxes.
export const StructureVisual = ({ items }) => (
    <div className={`relative w-full h-full flex flex-col items-center justify-center gap-4 py-4 overflow-hidden ${surfaceClass}`}>
        <div className={`px-3 py-1.5 rounded-md border border-gray-200/90 bg-gray-50/80 text-[10px] ${textClass} font-medium tracking-wide`}>
            src/
        </div>
        <div className="relative flex items-start justify-center gap-4 w-full px-4">
            <svg className="absolute -top-4 left-0 w-full h-4" viewBox="0 0 200 20" preserveAspectRatio="none" fill="none">
                <path d="M100 0 V8 M100 8 H30 M100 8 H170 M30 8 V16 M170 8 V16" stroke="rgba(15,23,42,0.16)" strokeWidth="1.5" />
            </svg>
            {items.map((item) => {
                const Icon = item.icon;
                return (
                    <div
                        key={item.id}
                        className="flex flex-col items-center gap-1.5 rounded-lg border border-gray-200/80 bg-gray-50/80 px-2.5 py-2 flex-1"
                    >
                        <Icon className={`${textClass} text-xs`} />
                        <span className={`text-[8.5px] ${softTextClass} text-center leading-tight`}>{item.label}</span>
                    </div>
                );
            })}
        </div>
    </div>
);

// Development — terminal window with code-like lines and a blinking cursor.
export const DevelopmentVisual = ({ items }) => (
    <div className={`relative w-full h-full p-4 overflow-hidden font-sans ${surfaceClass}`}>
        <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-gray-400/60" />
            <span className="w-2 h-2 rounded-full bg-gray-400/60" />
            <span className="w-2 h-2 rounded-full bg-gray-400/60" />
            <span className={`ml-2 text-[9px] ${softTextClass}`}>component.jsx</span>
        </div>
        <div className="flex flex-col gap-1.5 text-[10px]">
            <div className={`${softTextClass}`}>01 &nbsp;<span className={`${textClass}`}>import</span> {'{'} {items[1]?.label.split(' ')[0] || 'React'} {'}'}</div>
            {items.map((item, i) => {
                const Icon = item.icon;
                return (
                    <div key={item.id} className={`flex items-center gap-1.5 ${textClass}`}>
                        <span className={`${softTextClass}`}>{String(i + 2).padStart(2, '0')}</span>
                        <Icon className={`${textClass} text-[10px]`} />
                        <span className={`${textClass}`}>{item.label}</span>
                        <span className={`${softTextClass}`}>✓</span>
                    </div>
                );
            })}
            <div className={`${softTextClass}`}>
                05 &nbsp;<span className={`inline-block w-1.5 h-3 ${accentClass} animate-pulse align-middle`} />
            </div>
        </div>
    </div>
);

// Testing — checklist rows with a "passed" pill.
export const TestingVisual = ({ items }) => (
    <div className={`relative w-full h-full p-4 flex flex-col justify-center gap-2.5 overflow-hidden ${surfaceClass}`}>
        {items.map((item) => {
            const Icon = item.icon;
            return (
                <div
                    key={item.id}
                    className="flex items-center justify-between gap-2 rounded-lg border border-gray-200/80 bg-gray-50/80 px-3 py-2"
                >
                    <div className="flex items-center gap-2 min-w-0">
                        <Icon className={`${textClass} text-xs shrink-0`} />
                        <span className={`text-[10px] ${textClass} truncate`}>{item.label}</span>
                    </div>
                    <span className={`shrink-0 flex items-center gap-1 text-[8.5px] ${textClass} border border-gray-200/80 rounded-full px-2 py-0.5`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${accentClass}`} />
                        Passed
                    </span>
                </div>
            );
        })}
    </div>
);

// Production — a hero orbit: central node with satellites drifting around it.
export const ProductionVisual = ({ items, rootIcon: RootIcon }) => (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${surfaceClass}`}>
        <span className="absolute w-40 h-40 rounded-full border border-gray-200/80" />
        <span className="absolute w-28 h-28 rounded-full border border-gray-200/80" />
        <span className="absolute w-40 h-40 rounded-full bg-gray-100/70 blur-2xl" />
        <div className={`relative w-14 h-14 rounded-full ${accentClass} flex items-center justify-center z-10`}>
            {RootIcon && <RootIcon className="text-gray-700 text-xl" />}
        </div>
        {items.map((item, i) => {
            const Icon = item.icon;
            const angle = (i / items.length) * 360 + 30;
            const radius = 78;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            return (
                <div
                    key={item.id}
                    className="absolute w-9 h-9 rounded-full border border-gray-200/80 bg-white/80 backdrop-blur-sm flex items-center justify-center"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                    <Icon className={`${textClass} text-sm`} />
                </div>
            );
        })}
    </div>
);
