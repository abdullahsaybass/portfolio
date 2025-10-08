"use client";
import React from "react";
import {
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSketch,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiWordpress,
} from "react-icons/si";

const skills = [
  { id: 1, name: "UI/UX Design", percent: "Expert", icon: <SiFigma className="text-[#F24E1E]" size={20} /> },
  { id: 2, name: "Figma", percent: "80%", icon: <SiFigma className="text-[#F24E1E]" size={20} /> },
  { id: 3, name: "Adobe XD", percent: "75%", icon: <SiAdobexd className="text-[#FF61F6]" size={20} /> },
  { id: 4, name: "Photoshop", percent: "70%", icon: <SiAdobephotoshop className="text-[#31A8FF]" size={20} /> },
  { id: 5, name: "Illustrator", percent: "65%", icon: <SiAdobeillustrator className="text-[#FF9A00]" size={20} /> },
  { id: 6, name: "Sketch", percent: "60%", icon: <SiSketch className="text-[#F7B500]" size={20} /> },
  { id: 7, name: "HTML/CSS", percent: "60%", icon: <SiHtml5 className="text-[#E34F26]" size={20} /> },
  { id: 8, name: "JavaScript", percent: "55%", icon: <SiJavascript className="text-[#F7DF1E]" size={20} /> },
  { id: 9, name: "Bootstrap", percent: "50%", icon: <SiBootstrap className="text-[#563d7c]" size={20} /> },
  { id: 10, name: "WordPress", percent: "45%", icon: <SiWordpress className="text-[#21759B]" size={20} /> },
];

export default function MyAdvantages() {
  return (
    <section className="w-full bg-[#080e1a] text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <div className="inline-block mb-4 px-4 py-1 bg-[#2c2e35] rounded">
          <span className="text-xs font-semibold text-[#b06fe1] uppercase tracking-wider">
            My Advantages
          </span>
        </div>

        {/* Title */}
        <h2 className="text-sm md:text-base font-medium max-w-3xl mx-auto leading-snug mb-8 text-gray-300">
          “These are my core skills based on my profile.”
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-3 bg-[#16181d] rounded-full px-5 py-3 w-[90%] shadow-md hover:bg-[#1d2026] transition-all"
            >
              <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shrink-0">
                {skill.icon}
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">{skill.percent}</p>
                <p className="text-xs text-gray-400">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
