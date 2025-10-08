"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A16] text-gray-300 border-t border-white/10">
      {/* Sections container */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:gap-32 gap-12 py-16 px-4">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-white mb-3">Samprada Aryal</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs mx-auto lg:mx-0">
            Creating beautiful, functional digital experiences that make a
            difference. Let's build something amazing together.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaEnvelope />, link: "mailto:samprada@example.com" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center lg:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "About", "Projects", "Services", "Contact"].map(
              (link, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-white transition"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>samprada@portfolio.com</li>
            <li>+977-9812345678</li>
            <li>Kathmandu, Nepal</li>
            <li className="flex justify-center lg:justify-start items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-green-400">Available for work</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Bar */}
      <div className="w-full px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-gray-500 gap-2">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Samprada Aryal. Made with ❤️ and lots of coffee.
        </p>
        <p className="text-center md:text-right text-gray-400">
          Built with <span className="text-white font-medium">React</span> &{" "}
          <span className="text-white font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
