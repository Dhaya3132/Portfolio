import React from 'react';
import { motion } from 'framer-motion';

const BackgroundPattern = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base Grid Pattern */}
            <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Scanning Line Effect */}
            <motion.div
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-[0.05] dark:opacity-[0.08]"
                animate={{
                    top: ['-10%', '110%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export default BackgroundPattern;
