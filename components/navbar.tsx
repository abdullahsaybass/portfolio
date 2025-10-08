"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data";

const projects = [
  { name: "Figma Clone", href: "/project/figma-clone" },
  { name: "Zoom Clone", href: "/projects/zoom-clone" },
  { name: "Gemini Clone", href: "/projects/gemini-clone" },
  { name: "AI Resume Analyzer", href: "/projects/ai-resume-analyzer" },
  { name: "Fashion Ecommerce Site", href: "/projects/fashion-ecommerce" },
  { name: "Food Clone", href: "/projects/food-clone" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="w-full top-0 left-0 z-50 text-white bg-[#080e1a]">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-4">
        {/* Top bar */}
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border-2 border-blue-600 rounded-md"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">✓</span>
              </div>
            </div>
            <span className="text-lg font-semibold">Aryal</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[16px]">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.name === "Projects" ? (
                  <>
                    <button
                      onMouseEnter={() => setProjectsOpen(true)}
                      onMouseLeave={() => setProjectsOpen(false)}
                      className="text-gray-300 hover:text-white transition"
                    >
                      {item.name}
                    </button>
                    {projectsOpen && (
                      <ul
                        onMouseEnter={() => setProjectsOpen(true)}
                        onMouseLeave={() => setProjectsOpen(false)}
                        className="absolute top-full left-0 mt-2 w-52 bg-[#080e1a] rounded-md shadow-lg py-2 z-50"
                      >
                        {projects.map((proj) => (
                          <li key={proj.name}>
                            <Link
                              href={proj.href}
                              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                            >
                              {proj.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <Link
            href="#contact"
            className="hidden md:inline-block bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] px-4 sm:px-6 py-2 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-3 text-[16px] bg-[#080e1a] rounded-lg p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.name === "Projects" ? (
                  <>
                    <button
                      onClick={() => setProjectsOpen(!projectsOpen)}
                      className="w-full text-left text-gray-300 hover:text-white transition flex justify-between items-center"
                    >
                      {item.name} <span>{projectsOpen ? "▲" : "▼"}</span>
                    </button>
                    <ul
                      className={`pl-4 mt-2 flex flex-col gap-2 transition-all duration-300 ease-in-out overflow-hidden ${
                        projectsOpen ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      {projects.map((proj) => (
                        <li key={proj.name}>
                          <Link
                            href={proj.href}
                            className="block text-gray-300 hover:text-white transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {proj.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className="block text-gray-300 hover:text-white transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="block bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] px-4 py-2 rounded-lg font-medium text-center text-sm sm:text-base"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
