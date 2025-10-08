"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#080e1a] text-white flex items-center justify-center overflow-x-hidden">

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">

        {/* === Left Content === */}
        <div className="z-20 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light text-gray-200">
            Samprada <br />
            <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-[#0F4DFF] to-[#4895FC]">
              Aryal
            </span>
          </h1>

          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-[#4895FC]">
            Web Designer / UI-UX Specialist
          </h2>

          <p className="mt-6 text-gray-300 text-[20px] leading-relaxed max-w-full sm:max-w-md md:max-w-lg mx-auto md:mx-0 text-justify">
            Creative Web Designer and UI/UX Specialist passionate about crafting
            modern, responsive, and user-friendly digital experiences. Skilled
            in blending visual design with intuitive interaction to deliver
            clean, accessible, and performance-driven websites that connect
            users with brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10">
            <button className="bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] font-medium text-sm sm:text-base md:text-base hover:opacity-90 transition">
              View Portfolio
            </button>
            <button className="text-white font-medium text-sm sm:text-base md:text-base hover:text-[#4895FC] transition px-4 py-2 sm:px-6 sm:py-3 rounded-[8px]">
              Contact Me
            </button>
          </div>
        </div>

        {/* === Right Visual (Bouncing cubes) === */}
        <div className="relative flex justify-center md:justify-end mt-8 md:mt-0 z-10">
          {/* Background gradient glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-tr from-[#0F4DFF] to-[#4895FC] opacity-40 blur-3xl rounded-full z-0"></div>

          {/* Animated gradient cubes */}
          <div className="relative grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 z-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0F4DFF] to-[#4895FC] rounded-xl opacity-90 border border-white/10 shadow-[0_0_20px_rgba(72,149,252,0.4)]"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#080e1a] via-[#1c153a] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
