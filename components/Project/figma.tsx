


"use client";

import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0b0014] to-[#120028] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 w-8 h-8 flex items-center justify-center rounded-lg">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="text-xl font-semibold">Nubien</span>
          </div>
          <div className="w-12 h-[1px] bg-gray-500 my-3"></div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Made remotely with 💜 and passion –{" "}
            <span className="font-semibold text-white">Westhill Studio</span>.
          </p>
        </div>

        {/* Template Pages */}
        <div>
          <h4 className="text-white font-semibold mb-4">Template Pages</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Social</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <FaGithub /> GitHub
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <FaLinkedin /> LinkedIn
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <FaBehance /> Behance
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              Framer
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2024 Mandro Design</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
