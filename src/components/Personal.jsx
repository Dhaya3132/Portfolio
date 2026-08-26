import React from "react";
import { motion } from "framer-motion";

const Personal = () => {
  return (
    <section className="relative isolate min-h-[760px] w-full max-w-7xl p-6 md:p-10 mx-auto text-center flex flex-col justify-center items-center overflow-hidden">
      <motion.img
        src="/assests/about/helmet.png"
        alt=""
        aria-hidden="true"
        className="personal-object personal-dice"
        animate={{ y: [0, -14, 0], rotate: [-8, -2, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/assests/about/f760b0ae9126a22ab6faba2c2f928204.png"
        alt=""
        aria-hidden="true"
        className="personal-object personal-character"
        animate={{ y: [0, 12, 0], rotate: [5, 1, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/assests/about/f890e016b764c7712eb7a44a46043dc4.png"
        alt=""
        aria-hidden="true"
        className="personal-object personal-artwork"
        animate={{ y: [0, -10, 0], rotate: [7, 11, 7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/assests/about/%E2%80%94Pngtree%E2%80%94modern%20blue%20steering%20wheel%20in_20957305.png"
        alt=""
        aria-hidden="true"
        className="personal-object personal-wheel"
        animate={{ y: [0, 10, 0], rotate: [-12, -5, -12] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl">
        <h5 className="text-5xl md:text-8xl text-black mb-2">Hello.</h5>

        <h2 className="font-display text-3xl md:text-7xl text-orange-500 mb-2">
          I Make designs people remember
        </h2>

        <div className="max-w-5xl text-center text-3xl md:text-6xl text-black">
          <p className="font-medium">
            I develope clean websites, apps, and systems that help ideas look
            sharper, feel trusted and work with purpose
          </p>
        </div>

        <div className="personal-cta">
          <button className="bg-indigo-500 text-white font-medium rounded-xl px-5 py-3 shadow -rotate-9">
            Start project
          </button>
          <motion.img
            src="/assests/about/ping.png"
            alt=""
            aria-hidden="true"
            className="personal-ping"
            animate={{ scale: [1, 1.08, 1], rotate: [8, 13, 8] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Personal;
