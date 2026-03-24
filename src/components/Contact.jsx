import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="w-full pb-32">

            <div className="relative inline-block mb-10"><motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white"
            >
                Get In <span className="text-[var(--color-accent)] italic">Touch</span>
            </motion.h2>
                <motion.svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-[var(--color-accent)]"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <path
                        d="M2 8.5C50 2 150 2 198 8.5"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </motion.svg></div>



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
                        className="btn-primary w-fit flex gap-2"
                    >
                        Say Hello
                        <svg viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="h-5 w-5 iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387" fill="#ffffff"></path><path d="M15.73 48.172l-.184-.039c.023.006.078.015.184.039" fill="#ffffff"></path><path d="M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261" fill="#ffffff"></path><path d="M46.504 22.794c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963" fill="#ffffff"></path><path d="M48.865 17.848c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49" fill="#ffffff"></path><path d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827" fill="#ffffff"></path></g></svg>

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
