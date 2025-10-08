import React from "react";
import ExpSection from "@/components/About/exp";
import About from "@/components/About/About";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stats from '@/components/About/stats'

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="">
       <ExpSection />
       <About />
       <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
