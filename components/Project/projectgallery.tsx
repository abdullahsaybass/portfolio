"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/1.png", alt: "Project 1" },
  { src: "/images/project2.png", alt: "Project 2" },
  { src: "/images/project3.png", alt: "Project 3" },
  { src: "/images/project4.png", alt: "Project 4" },
  { src: "/images/project5.png", alt: "Project 5" },
  { src: "/images/project6.png", alt: "Project 6" },
];

export default function ProjectGallery() {
  return (
    <section className="w-full bg-[#080e1a] text-white py-10 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[50px] font-medium mb-4">Project Gallery</h2>
          <p className="text-gray-400 text-[20px] max-w-2xl mx-auto">
            A showcase of my featured works — crafted with precision, creativity, and a focus on seamless user experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0b1524] shadow-lg hover:shadow-[0_0_30px_#4895FC60] transition-all duration-300"
            >
              <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
