"use client";

import React from "react";
import {
  Smartphone,
  Code2,
  Palette,
  Lightbulb,
  LineChart,
  Cog,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  items: string[];
}

export default function Services() {
  return (
    <section className="py-20 bg-[#071018] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="uppercase text-sm tracking-widest text-cyan-400 font-light">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-medium mt-3 mb-3">
            How I Can Help Your Business
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            From concept to completion, I provide creative and technical
            expertise in UI/UX design and development to help businesses
            build meaningful, high-performing digital experiences.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Smartphone size={26} />}
            color="bg-gradient-to-tr from-[#56A4E3]/20 to-[#3B82F6]/20 text-[#56A4E3]"
            title="Web Design & Development"
            description="Modern, responsive, and SEO-friendly websites optimized for speed and accessibility."
            items={[
              "Responsive Layouts",
              "Next.js / React",
              "Performance Tuning",
              "SEO Optimization",
            ]}
          />

          <ServiceCard
            icon={<Palette size={26} />}
            color="bg-gradient-to-tr from-purple-500/20 to-pink-400/20 text-purple-400"
            title="UI/UX Design"
            description="Designing intuitive, human-centered digital experiences from wireframes to polished interfaces."
            items={[
              "Wireframes & Prototypes",
              "User Flow Mapping",
              "Visual Design",
              "Design Systems",
            ]}
          />

          <ServiceCard
            icon={<Code2 size={26} />}
            color="bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 text-orange-400"
            title="Frontend Development"
            description="Building clean, scalable code that brings designs to life using modern frameworks."
            items={[
              "React / Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Reusable Components",
            ]}
          />

          <ServiceCard
            icon={<LineChart size={26} />}
            color="bg-gradient-to-tr from-teal-400/20 to-green-400/20 text-teal-400"
            title="UX Research & Strategy"
            description="Data-informed decisions that improve usability, accessibility, and overall user experience."
            items={[
              "User Interviews",
              "Usability Testing",
              "Analytics Review",
              "A/B Testing",
            ]}
          />

          <ServiceCard
            icon={<Lightbulb size={26} />}
            color="bg-gradient-to-tr from-pink-500/20 to-purple-500/20 text-pink-400"
            title="Creative Direction"
            description="Guiding consistent brand visuals and interaction patterns across your digital products."
            items={[
              "Design Audits",
              "Brand Consistency",
              "Creative Prototyping",
              "Collaboration Strategy",
            ]}
          />

          <ServiceCard
            icon={<Cog size={26} />}
            color="bg-gradient-to-tr from-green-500/20 to-cyan-500/20 text-green-400"
            title="Design Consultation"
            description="Strategic design insights to help teams refine workflows and improve design outcomes."
            items={[
              "Process Optimization",
              "Accessibility (WCAG 2.1)",
              "Team Training",
              "Tool Selection",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* --- Subcomponent: Service Card --- */
function ServiceCard({
  icon,
  color,
  title,
  description,
  items,
}: ServiceCardProps) {
  return (
    <div className="bg-[#0D1520] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 hover:border-[#56A4E3]/40 transition-all duration-300 hover:-translate-y-1">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${color}`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm font-light mb-4">{description}</p>
      <ul className="text-gray-300 text-sm space-y-1.5 font-light">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-[#56A4E3]">✔</span>
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-[#56A4E3] text-sm font-medium mt-4 hover:underline"
      >
        Learn More →
      </a>
    </div>
  );
}
