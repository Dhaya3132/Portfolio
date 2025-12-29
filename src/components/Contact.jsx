import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-center"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">Contact</h2>

            <div className="space-y-8 text-lg font-light">
                <div className="group">
                    <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:dhayalan@example.com" className="text-2xl md:text-3xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-neutral-900 dark:text-white break-all">
                        dhayalanu103@gmail.com
                    </a>
                </div>

                <div className="group">
                    <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-2xl md:text-3xl text-neutral-900 dark:text-white">
                        Chennai, Tamil Nadu
                    </p>
                </div>

                <div className="group mt-12 pt-12 border-t border-neutral-200 dark:border-white/10">
                    <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Availability</p>
                    <p className="text-xl text-green-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Open to new opportunities
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
