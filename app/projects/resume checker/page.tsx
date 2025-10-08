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
        title="AI Resume Maker"
        subtitle="Web App / Productivity Tool"
        description="A smart resume-building platform that helps users generate personalized and professional resumes using AI-driven templates and language optimization."
        tags={["Next.js", "OpenAI API", "Tailwind CSS", "MongoDB"]}
        client="CareerBoost AI"
        duration="2 months"
        year="2024"
        challenge="Creating AI-powered resume suggestions while maintaining design flexibility and user privacy."
        solution="Integrated GPT-based content generation and a drag-and-drop resume editor for custom formatting."
        results="Users reported 60% faster resume completion and 2× higher job callback rates with AI-optimized resumes."
        overview="Resume Maker enables users to craft modern, ATS-friendly resumes effortlessly with AI guidance and template variety."
        audience="Job seekers, students, and professionals who want to stand out with impactful resumes."
        image="/projects/resume-maker.png"
        />
        <ProjectGallery />
        <ProjectImage />

        <ProjectExp />
        
      </main>
      <Footer />
    </div>
  );
};

export default FigmaPage;
