import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="w-full pb-32">
            <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif font-semibold mb-16 tracking-tight text-white"
            >
                Get In <span className="text-[var(--color-accent)] italic">Touch</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col"
                >
                    <h3 className="text-2xl font-serif font-semibold mb-6 text-white">Let's build something.</h3>
                    <p className="text-lg text-[var(--color-text-light)] mb-10 leading-relaxed font-sans max-w-sm opacity-80">
                        I am currently looking for new opportunities in frontend engineering. 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a
                        href="mailto:dhayalanu103@gmail.com"
                        className="btn-primary w-fit"
                    >
                        Say Hello
                    </a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center space-y-6 md:pl-10 lg:border-l border-[var(--color-divider)]"
                >
                    <ContactLink
                        icon={<FaEnvelope size={20} />}
                        label="Email Address"
                        value="dhayalanu103@gmail.com"
                        link="mailto:dhayalanu103@gmail.com"
                    />
                    <ContactLink
                        icon={<FaLinkedin size={20} />}
                        label="LinkedIn Profile"
                        value="dhayalan-nataraj"
                        link="https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar"
                    />
                    <ContactLink
                        icon={<FaGithub size={20} />}
                        label="GitHub Repositories"
                        value="dhaya3132"
                        link="https://github.com/dhaya3132"
                    />
                </motion.div>
            </div>
        </section>
    );
};

const ContactLink = ({ icon, label, value, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-6 group p-4 -mx-4 rounded-xl hover:bg-[var(--color-surface)] transition-colors duration-300"
    >
        <div className="w-12 h-12 rounded-full border border-[var(--color-divider)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <div>
            <p className="text-sm text-[var(--color-text-muted)] font-sans mb-1 uppercase tracking-wider">{label}</p>
            <p className="text-lg font-serif text-white group-hover:text-[var(--color-accent)] transition-colors">{value}</p>
        </div>
    </a>
);

export default Contact;
