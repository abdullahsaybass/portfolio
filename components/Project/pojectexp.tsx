"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Advanced AI Streamlined Design",
    description:
      "Nublien blends cutting-edge AI capabilities with sleek, modern design. It&aposs built for agencies that need to showcase sophisticated technology in a user-friendly and visually compelling way.",
    tags: ["AI Design", "Tech Innovation"],
    badge: "Assist",
  },
  {
    title: "Effortless Customization for Your Brand",
    description:
      "The template comes with flexible design options that adapt to your unique vision. With easy-to-use customization tools, you can fine-tune every detail to fit your brand’s style and messaging.",
    tags: ["Easy Customization", "Brand Identity"],
    badge: "Guide",
  },
  {
    title: "Future-Proof and Scalable Solutions",
    description:
      "Nublien is built to grow with your agency. Whether you’re adding new services, expanding your team, or scaling up your product line.",
    tags: ["Growth", "Scalability"],
    badge: "Resolve",
    hasButton: true,
  },
];

export default function ProjectExp() {
  return (
    <section className="w-full bg-[#080e1a] text-white py-20 border border-[rgba(255,255,255,0.06)]">
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-1 text-sm font-medium rounded-full bg-[#4895FC1A] text-[#4895FC] border border-[#4895FC40]">
                About Nublien
              </span>
              <h2 className="mt-4 text-[50px] font-medium text-white leading-snug">
                AI Meets Design, <br /> Purpose Into Ideas!
              </h2>
              <p className="mt-4 text-gray-400 text-[20px] max-w-3xl leading-relaxed">
                Nublien is a premium AI agency template crafted for teams
                pushing the boundaries of technology and creative storytelling.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="space-y-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0b1524] p-6 shadow-lg"
                >
                  {/* Badge */}
                  <div className="absolute -top-3 right-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-[#4895FC1A] text-[#4895FC] border border-[#4895FC40]">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-400">{feature.description}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {feature.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs rounded-full border border-[#4895FC40] text-[#4895FC] hover:bg-[#4895FC10] transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {feature.hasButton && (
                    <button className="mt-6 px-6 py-2 rounded-md bg-[#4895FC] text-white font-medium hover:bg-[#3a7ee2] transition">
                      Book an Appointment
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="relative">
            <div className="sticky top-24">
              <Image
                src="/1.png"
                alt="Preview"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg object-cover border border-[rgba(255,255,255,0.05)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mt-16">
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-xl bg-transparent border border-[#4895FC60] text-[#4895FC] text-base sm:text-lg font-semibold hover:bg-[#4895FC10] transition shadow-lg">
            ← Previous Project
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-xl bg-[#4895FC] text-white text-base sm:text-lg font-semibold hover:bg-[#3a7ee2] transition shadow-lg">
            Next Project →
          </button>
        </div>
      </div>
    </section>
  );
}
