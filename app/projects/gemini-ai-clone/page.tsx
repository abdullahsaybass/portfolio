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
            title="Gemini AI Clone"
            subtitle="AI Chat Platform"
            description="A modern conversational AI clone inspired by Google Gemini, built with Next.js, OpenAI API, and real-time chat streaming."
            tags={["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"]}
            client="Personal Project"
            duration="3 weeks"
            year="2025"
            challenge="Recreating a responsive, real-time chat interface similar to Gemini with token streaming."
            solution="Used server actions and OpenAI API to achieve fast and seamless conversation updates."
            results="Highly responsive Gemini-style AI chat that supports real-time message streaming."
            overview="This project showcases advanced UI and backend integration using Next.js 14 with OpenAI streaming APIs."
            audience="Developers, students, and tech enthusiasts exploring conversational AI UX."
            image="/projects/gemini-ai.png"
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
