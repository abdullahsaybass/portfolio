"use client";

import Image from "next/image";
import {
  User,
  Clock,
  Calendar,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
} from "lucide-react";

export default function ProjectTemplate({
  title,
  subtitle,
  description,
  tags,
  client,
  duration,
  year,
  challenge,
  solution,
  results,
  overview,
  audience,
  image,
}: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  client: string;
  duration: string;
  year: string;
  challenge: string;
  solution: string;
  results: string;
  overview: string;
  audience: string;
  image: string;
}) {
  return (
    <section className="w-full bg-[#071018] text-white py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-transparent border border-[#4895FC] text-[#4895FC] text-sm px-4 py-1 rounded-full mb-6">
              {subtitle}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-3">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="bg-[#0D1520] text-gray-300 text-sm px-4 py-2 rounded-md border border-[rgba(255,255,255,0.1)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[rgba(255,255,255,0.05)]">
              <Image
                src={image}
                alt={title}
                width={800}
                height={600}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== Project Details ===== */}
        <div className="space-y-10">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={<User size={28} className="text-blue-400" />}
              title="Client"
              value={client}
            />
            <InfoCard
              icon={<Clock size={28} className="text-green-400" />}
              title="Duration"
              value={duration}
            />
            <InfoCard
              icon={<Calendar size={28} className="text-purple-400" />}
              title="Year"
              value={year}
            />
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoBox
              icon={<Target size={22} className="text-red-400" />}
              title="Challenge"
              description={challenge}
            />
            <InfoBox
              icon={<Lightbulb size={22} className="text-yellow-400" />}
              title="Solution"
              description={solution}
            />
          </div>

          {/* Results */}
          <div className="bg-gradient-to-r from-[#0D1520] to-[#0B1A26] p-6 md:p-8 rounded-xl border border-[rgba(255,255,255,0.05)] flex items-start gap-3">
            <TrendingUp size={26} className="text-green-400 mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-2 text-white">
                Results & Impact
              </h4>
              <p className="text-gray-300">{results}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-[#0D1520] p-6 md:p-8 rounded-xl border border-[rgba(255,255,255,0.05)] space-y-4">
            <h4 className="font-semibold text-lg text-white">
              Project Overview
            </h4>
            <p className="text-gray-300 leading-relaxed">{overview}</p>

            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Users size={20} className="text-blue-400" />
                <h5 className="font-medium text-white">Target Audience</h5>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {audience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Subcomponents === */
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
    <div className="flex flex-col items-center justify-center bg-[#0D1520] p-6 rounded-xl border border-[rgba(255,255,255,0.05)] shadow-md text-center">
      <div className="mb-3">{icon}</div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-400">{value}</p>
    </div>
  );
}

function InfoBox({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#0D1520] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
