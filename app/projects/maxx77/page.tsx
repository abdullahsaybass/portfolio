import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectTemplate from "@/components/Project/Projectheader";
import ProjectImage from "@/components/Project/projectimages";
import ProjectExp from "@/components/Project/pojectexp"
import ProjectGallery from '@/components/Project/projectgallery'
const FigmaPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="">
        <ProjectTemplate
            title="MAX99 – Modern Business Website"
            subtitle="Corporate / Web Design"
            description="A modern, responsive business website for MAX99 — built to highlight brand identity, services, and performance through interactive layouts."
            tags={["Next.js", "Framer Motion", "Tailwind CSS", "SEO"]}
            client="MAX99 Global"
            duration="1 month"
            year="2025"
            challenge="Designing a professional yet creative layout that feels dynamic while maintaining corporate credibility."
            solution="Used Framer Motion animations with a modular section system to balance performance and engagement."
            results="Reduced bounce rate by 45% and improved SEO visibility through optimized metadata and layout."
            overview="The MAX99 website represents modern brand identity, delivering clear messaging, visual flow, and user engagement for a global audience."
            audience="Corporate clients, investors, and B2B audiences seeking professional digital presence."
            image="/projects/max99.png"
        />
        <ProjectGallery />
        <ProjectImage />

        <ProjectExp />
        
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default FigmaPage;
