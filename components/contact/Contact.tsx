"use client";

import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import { FaBehance } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#071018] text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’d love to hear about it. Let’s create something amazing together.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Send Message Form */}
          <div className="bg-[#0D1520] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-md bg-[#071018] border border-[rgba(255,255,255,0.15)] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4895FC]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-md bg-[#071018] border border-[rgba(255,255,255,0.15)] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4895FC]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full rounded-md bg-[#071018] border border-[rgba(255,255,255,0.15)] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4895FC]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-md bg-[#071018] border border-[rgba(255,255,255,0.15)] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4895FC]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>

          {/* Right: Get in Touch Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Web Designer / UI-UX Specialist
            </h3>
            <p className="text-gray-400 mb-8">
              I’m based in Australia and specialize in crafting modern, user-centered designs.
              Feel free to reach out for collaborations or project inquiries.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <InfoCard
                icon={<Mail size={28} className="text-[#4895FC]" />}
                title="Email"
                value="samprada.757@gmail.com"
              />
              <InfoCard
                icon={<Phone size={28} className="text-green-400" />}
                title="Phone"
                value="0410 858 556"
              />
              <InfoCard
                icon={<Globe size={28} className="text-yellow-400" />}
                title="Website"
                value="designbysam.space"
              />
              <InfoCard
                icon={<MapPin size={28} className="text-red-400" />}
                title="Location"
                value="Australia"
              />
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-medium text-lg mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <SocialIcon
                  href="https://github.com/samprada"
                  icon={<Github size={22} />}
                />
                <SocialIcon
                  href="https://linkedin.com/in/samprada"
                  icon={<Linkedin size={22} />}
                />
                <SocialIcon
                  href="https://behance.net/samprada"
                  icon={<FaBehance size={22} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Subcomponent: Info Card */
function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 p-5 bg-[#0D1520] rounded-xl border border-[rgba(255,255,255,0.05)]">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#071018] border border-[rgba(255,255,255,0.05)]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white font-medium break-words">{value}</p>
      </div>
    </div>
  );
}

/* Subcomponent: Social Icon */
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#0D1520] border border-[rgba(255,255,255,0.1)] hover:border-[#4895FC]/40 hover:text-[#4895FC] transition-all"
    >
      {icon}
    </a>
  );
}
