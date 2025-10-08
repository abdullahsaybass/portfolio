"use client";
import Image from "next/image";
import React, { useState } from "react";

const categories = [
  "All",
  "Mobile App",
  "Dashboard",
  "Website",
  "WordPress",
  "Html/Css",
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    subtitle: "UI/UX Design",
    category: "Website",
    image: "/1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Gemini AI Clone",
    subtitle: "UI/UX Design",
    category: "Website",
    image: "/2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Resume Checker",
    subtitle: "UI/UX Design",
    category: "Website",
    image: "/3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Food App",
    subtitle: "Mobile App / Dashboard",
    category: "Mobile App",
    image: "/4.png",
    link: "#",
  },
  {
    id: 5,
    title: "Yoon Clone",
    subtitle: "UI/UX Design",
    category: "Website",
    image: "/5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Fashion E-Commerce",
    subtitle: "UI/UX Design",
    category: "Website",
    image: "/6.png",
    link: "#",
  },
  {
    id: 7,
    title: "E-Commerce App",
    subtitle: "Mobile App",
    category: "Mobile App",
    image: "/7.png",
    link: "#",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="bg-[#080e1a] text-white py-20 w-full">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Panel */}
        <div>
          <div className="mb-3">
            <span className="text-xs uppercase font-semibold text-[#b06fe1] tracking-widest bg-[#2c2e35] px-3 py-1 rounded">
              My Portfolio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-6">
            Some of my <br />
            <span className="text-gray-300">features work.</span>
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border border-gray-700 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#4e44ce] to-[#25d366] text-white"
                    : "hover:bg-[#1e1f24] text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="mt-4 px-5 py-2 rounded bg-gradient-to-r from-orange-500 to-purple-500 text-sm font-medium">
            View Others Work
          </button>
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="cursor-pointer"
              onClick={() => window.open(proj.link, "_blank")}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-semibold mt-3">{proj.title}</h3>
              <p className="text-sm text-gray-400">{proj.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
