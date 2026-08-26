import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
    const resumeDocId = "1ETYxsfHW7dLr_7NI3VUD2_qqLhLJ4mklH8CGt-vdf5g";
    const previewLink = `https://docs.google.com/document/d/${resumeDocId}/preview`;
    const downloadLink = `https://docs.google.com/document/d/${resumeDocId}/export?format=pdf`;
    const fullAccessLink = `https://docs.google.com/document/d/${resumeDocId}/edit?usp=sharing`;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-white backdrop-blur-sm p-4 md:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-5xl h-[90vh] bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex md:flex-row flex-col md:items-center md:justify-between p-4 border-b border-white/10 bg-[#111]">
                            <h2 className="text-xl font-semibold text-white tracking-wide font-serif italic">You can View or Download My Resume</h2>

                            <div className="flex items-center gap-4">
                                <a
                                    href={downloadLink}
                                    download="Dhayalan_Resume.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium border border-white/10"
                                >
                                    <FaDownload size={14} />
                                    <span className="hidden sm:inline">Download PDF</span>
                                </a>
                                <a
                                    href={fullAccessLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] hover:opacity-90 text-white rounded-lg transition-opacity text-sm font-medium"
                                >
                                    <FaExternalLinkAlt size={14} />
                                    <span className="hidden sm:inline">Open Link</span>
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors ml-2"
                                >
                                    <IoClose size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 w-full  bg-black/80 relative">
                            <iframe
                                src={previewLink}
                                className="w-full h-full border-0"
                                title="Resume Document"
                                allow="autoplay"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
