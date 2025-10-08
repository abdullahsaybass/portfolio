import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact/Contact";

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-5 sm:px-10 py-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
