"use client";
import React from "react";
import { CheckCircle, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";

const DesignProcess = () => {
  const steps = [
    {
      step: 1,
      title: "Research & Discovery",
      desc: "Conducted user interviews with 50+ podcast listeners to understand pain points and usability needs.",
      duration: "2 weeks",
    },
    {
      step: 2,
      title: "Wireframing & Information Architecture",
      desc: "Created low-fidelity wireframes and defined the app’s navigation structure for intuitive flow.",
      duration: "1 week",
    },
    {
      step: 3,
      title: "Visual Design & Prototyping",
      desc: "Designed high-fidelity mockups and interactive prototypes to visualize the user experience.",
      duration: "3 weeks",
    },
    {
      step: 4,
      title: "Testing & Iteration",
      desc: "Conducted usability testing and refined the design based on real user feedback and insights.",
      duration: "2 weeks",
    },
  ];

  const features = [
    "Smart podcast recommendations using AI",
    "Custom playlist creation and sharing",
    "Social features for podcast discussions",
    "Offline downloading with sync across devices",
    "Sleep timer and speed controls",
    "Chapter navigation and bookmarking",
  ];

  return (
    <section className="w-full bg-[#080E1A] text-gray-300 py-10 border-t bg-#071018">
      {/* Outer Container */}
      <div className="max-w-5xl mx-auto px-6 border border-[rgba(255,255,255,0.08)] rounded-2xl p-10 shadow-[0_0_20px_rgba(0,0,0,0.3)] space-y-16">
        
        {/* Design Process */}
        <div>
          <h2 className="text-[50px] font-[500] text-white mb-10 text-center">
            Design Process
          </h2>

          <div className="space-y-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col md:flex-row justify-between items-start bg-[#0D1520] p-6 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[#4895FC]/40 transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] text-white font-bold text-xl">
                    {item.step}
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-1 text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-[20px] text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-gray-200 bg-[#0C1622] px-3 py-1 rounded-md mt-4 md:mt-0 self-end md:self-center border border-[rgba(255,255,255,0.15)]">
                  {item.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#0D1520] border border-[rgba(255,255,255,0.1)] rounded-xl p-8">
          <h3 className="text-[50px] font-[500] text-white mb-6">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                <p className="text-[20px] text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="bg-[#0D1520] border border-[rgba(255,255,255,0.1)] rounded-xl p-8">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="text-green-400 w-5 h-5" />
            <h3 className="text-[50px] font-[500] text-white">Results & Impact</h3>
          </div>
          <p className="text-[20px] text-gray-300 leading-relaxed">
            40% increase in user engagement, 25% longer session times, and 95%
            accessibility compliance rating.
          </p>
        </div>

        {/* Explore More Projects */}
        <div className="text-center border-t border-[rgba(255,255,255,0.08)] pt-12 mt-8">
          <h3 className="text-[50px] font-[500] text-white mb-4">
            Explore More Projects
          </h3>
          <p className="text-[20px] text-gray-400 mb-8">
            Discover how I’ve helped other clients achieve their design goals.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="border border-[rgba(255,255,255,0.2)] text-gray-200 px-6 py-3 text-[20px] rounded-md flex items-center gap-2 hover:bg-[rgba(255,255,255,0.05)] transition">
              <ArrowLeft className="w-5 h-5" />
              Previous Project
            </button>

            <button className="bg-gradient-to-r from-[#0F4DFF] to-[#4FD1C5] text-white text-[20px] font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:opacity-90 transition">
              Next Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
