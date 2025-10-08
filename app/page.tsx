
import Footer from "@/components/footer";

import Navbar from "@/components/navbar";

import Hero from "@/components/hero";
import WorkProcess from "@/components/workprocess";
import MyAdvantages from "@/components/myadvantage"
import PortfolioSection from "@/components/Projects"
import ExperienceJourney from '@/components/education'
import ServicesSection from '@/components/ServicesSection'

const MainPage = () => {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-x-hidden bg-black">

   
      <Navbar />
      <Hero />
      <MyAdvantages />
      <PortfolioSection />
      <ExperienceJourney />
      <ServicesSection />
      <WorkProcess />
      <Footer />
     
      <div className="w-full max-w-7xl px-5 sm:px-10">
        
        
        
      </div>

    </main>
  );
};

export default MainPage;
