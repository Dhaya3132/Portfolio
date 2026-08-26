import React from 'react';
import { motion } from 'framer-motion';
import {
    DesignVisual,
    StructureVisual,
    DevelopmentVisual,
    TestingVisual,
    ProductionVisual,
} from './ProcessVisuals';

const visualByPhase = {
    design: DesignVisual,
    structure: StructureVisual,
    development: DevelopmentVisual,
    testing: TestingVisual,
    production: ProductionVisual,
};

const ProcessCard = ({ phase, index, featured = false, className = '' }) => {
    const Visual = visualByPhase[phase.id];
    const Icon = phase.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            className={`font-sans rounded-2xl border border-gray-200/80 bg-white/95 p-5 flex flex-col transition-colors duration-300 text-black ${className}`}
        >
            <div className={`w-full ${featured ? 'h-40 sm:h-48' : 'h-44 sm:h-48'} mb-5`}>
                {Visual && <Visual items={phase.children} rootIcon={phase.icon} />}
            </div>

            <div className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                    <Icon />
                </span>
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-sans">0{index + 1}</span>
                        <h3 className="font-sans text-lg leading-tight tracking-tight">{phase.title}</h3>
                    </div>
                    <p className="text-[13px]  leading-relaxed mt-1.5">
                        {phase.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProcessCard;
