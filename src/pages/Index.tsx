
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollFade from "@/components/ScrollFade";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Header />
      <Hero />
      <ScrollFade>
        <About />
      </ScrollFade>
      <ScrollFade>
        <Skills />
      </ScrollFade>
      <ScrollFade>
        <Projects />
      </ScrollFade>
      <ScrollFade>
        <Contact />
      </ScrollFade>
      <Footer />
    </div>
  );
};

export default Index;
