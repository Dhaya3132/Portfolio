import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTerminal } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-10 mb-40"
        >
            <h2 className="text-6xl md:text-8xl font-black mb-20 tracking-tighter">
                INIT <span className="text-[#dfff00]">UP_LINK</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="brutalist-card border-[#dfff00]/20">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <FaTerminal size={20} className="text-[#dfff00]" />
                        DIRECT_CHANNELS
                    </h3>

                    <div className="space-y-6">
                        <ContactLink
                            icon={<FaEnvelope />}
                            label="MAIL"
                            value="dhayalanu103@gmail.com"
                            link="mailto:dhayalanu103@gmail.com"
                        />
                        <ContactLink
                            icon={<FaLinkedin />}
                            label="L-IN"
                            value="dhayalan-nataraj"
                            link="https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar"
                        />
                        <ContactLink
                            icon={<FaGithub />}
                            label="GIT"
                            value="dhaya3132"
                            link="https://github.com/dhaya3132"
                        />
                    </div>
                </div>

                <div className="brutalist-card bg-[#dfff00] text-black">
                    <h3 className="text-2xl font-black mb-6 uppercase">Transmit Message</h3>
                    <p className="font-mono text-sm font-bold mb-10 leading-tight">
                        SYSTEM_OVERRIDE: I AM ACTIVELY SEEKING HIGH-STAKES FRONTEND ROLES.
                        SECURE YOUR SYSTEM_SLOT NOW.
                    </p>
                    <a
                        href="mailto:dhayalanu103@gmail.com"
                        className="inline-block border-2 border-black px-8 py-3 font-black hover:bg-black hover:text-[#dfff00] transition-all"
                    >
                        PUSH_DATA();
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

const ContactLink = ({ icon, label, value, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group"
    >
        <div className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-gray-500 group-hover:border-[#dfff00] group-hover:text-[#dfff00] transition-all">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-mono text-gray-600 mb-0.5">{label}</p>
            <p className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{value}</p>
        </div>
    </a>
);

export default Contact;
