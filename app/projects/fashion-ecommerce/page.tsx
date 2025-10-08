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
            title="NextCart – E-Commerce Website"
            subtitle="Full Stack E-Commerce"
            description="A full-featured online shopping platform with product browsing, secure payments, admin management, and dynamic inventory handling."
            tags={["Next.js", "Stripe API", "Prisma", "PostgreSQL"]}
            client="NextCart Retail"
            duration="3 months"
            year="2024"
            challenge="Building a scalable e-commerce system with real-time cart updates, product filtering, and payment security."
            solution="Implemented a modular product system using Prisma ORM and integrated Stripe for secure transactions."
            results="Achieved smooth checkout flow and 99.9% uptime under heavy traffic."
            overview="NextCart is a robust, modern e-commerce platform featuring responsive design, admin dashboards, and seamless user experience."
            audience="Small to medium-sized retailers, online businesses, and customers seeking smooth online shopping experiences."
            image="/projects/ecommerce.png"
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
