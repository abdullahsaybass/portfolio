import { Approach } from "@/components/approach";
import { Experience } from "@/components/experience";
import Footer from "@/components/footer";
import { RecentProjects } from "@/components/recent-projects";
import Navbar from "@/components/navbar";
import About from "@/components/About/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero";
import WorkProcess from "@/components/workprocess";
import MyAdvantages from "@/components/myadvantage"
import PortfolioSection from "@/components/Projects"
import ExperienceJourney from '@/components/education'
import ServicesSection from '@/components/ServicesSection'
// import ProjectDetail from "@/components/projectdetails"
const MainPage = () => {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-x-hidden bg-black">

      {/* === Full-width Hero Section === */}
      <Navbar />
      <Hero />
      <MyAdvantages />
      <PortfolioSection />
      <ExperienceJourney />
      <ServicesSection />
      <WorkProcess />
      <Footer />
      {/* <ProjectDetail /> */}
      {/* === Other content inside max-width wrapper === */}
      <div className="w-full max-w-7xl px-5 sm:px-10">
        
        {/* <MyAdvantages /> */}
        {/* <RecentProjects />

        <MyAdvantages />
        <WorkProcess />
        <Experience />
        <Approach />
        <Contact /> */}
        
      </div>

    </main>
  );
};

export default MainPage;
