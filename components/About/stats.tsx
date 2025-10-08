"use client";

import React from "react";
import { Briefcase, MonitorSmartphone, Sparkles } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  title: string;
  description: string;
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#071018] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4">
          My Creative Journey
        </h2>
        <p className="text-center text-gray-400 text-sm mb-12 max-w-2xl mx-auto">
          Over the past 3+ years, I’ve designed and delivered user-focused digital experiences across multiple platforms, combining creativity and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            icon={<Briefcase size={30} />}
            value="3+"
            title="Years Experience"
            description="In UI/UX and Web Design"
          />
          <StatCard
            icon={<MonitorSmartphone size={30} />}
            value="10+"
            title="Projects Completed"
            description="Websites & design systems"
          />
          <StatCard
            icon={<Sparkles size={30} />}
            value="100%"
            title="Client Satisfaction"
            description="Delivering design excellence"
          />
        </div>
      </div>
    </section>
  );
}

/* --- Subcomponent --- */
function StatCard({ icon, value, title, description }: StatCardProps) {
  return (
    <div className="bg-[#0D1520] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#56A4E3]/40 transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#56A4E3]/20 to-[#3B82F6]/20 text-[#56A4E3] mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-1">{value}</h3>
      <p className="text-gray-200 text-sm font-medium mb-1">{title}</p>
      <p className="text-gray-400 text-xs font-light">{description}</p>
    </div>
  );
}
