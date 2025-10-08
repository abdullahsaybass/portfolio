import React from "react";
import { RecentProjects } from "@/components/recent-projects";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const ProjectPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-5 sm:px-10 py-16">
      <RecentProjects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
