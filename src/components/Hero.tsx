
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypedText from "./TypedText";
import ScrollFade from "./ScrollFade";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <ScrollFade delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-blue mb-4">
                Hi, I'm <TypedText 
                  texts={["Kalu Ifechukwu", "a Developer", "a Problem Solver"]} 
                  typingSpeed={100}
                  className="text-portfolio-accent"
                />
              </h1>
            </ScrollFade>
            
            <ScrollFade delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-medium text-portfolio-dark-blue mb-6">
                MERN Stack Developer & Python Enthusiast
              </h2>
            </ScrollFade>
            
            <ScrollFade delay={0.6}>
              <p className="text-lg text-portfolio-muted mb-8 max-w-2xl">
                I’m passionate about turning ideas into interactive web experiences using the MERN stack and exploring Python to bring AI-powered features to life.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={0.8}>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-portfolio-blue hover:bg-portfolio-dark-blue text-white">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/5">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </ScrollFade>
            
            <ScrollFade delay={1}>
              <div className="flex items-center mt-8 space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-portfolio-muted hover:text-portfolio-blue transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-portfolio-muted hover:text-portfolio-blue transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="text-portfolio-muted hover:text-portfolio-blue transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </ScrollFade>
          </div>
          
          <ScrollFade direction="left" delay={0.5} className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-accent/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-portfolio-accent">
                  KI
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 w-32">
                <div className="text-portfolio-blue font-medium">Python</div>
                <div className="text-portfolio-accent font-medium">MERN Stack</div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
