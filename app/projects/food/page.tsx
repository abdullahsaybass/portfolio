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
            title="SmartChef – Food Delivery & Recipe App"
            subtitle="Mobile App / Food Tech"
            description="A sleek food ordering and recipe discovery app that allows users to explore cuisines, order from nearby restaurants, and learn to cook with guided video tutorials."
            tags={["React Native", "Firebase", "Redux Toolkit", "Google Maps API"]}
            client="SmartChef Startups"
            duration="4 months"
            year="2024"
            challenge="Creating a single app experience that balances both ordering and recipe discovery without overwhelming users."
            solution="Built a clean dual-mode interface with dynamic navigation that lets users easily switch between recipes and food delivery modes."
            results="Increased average session time by 40% due to intuitive interaction design and recipe recommendations."
            overview="SmartChef is a hybrid mobile application focusing on both convenience and inspiration in cooking. It seamlessly integrates online ordering with step-by-step recipe guidance."
            audience="Urban foodies, busy professionals, and home cooks seeking meal ideas and quick delivery options."
            image="/projects/food-app.png"
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
