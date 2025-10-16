
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, BookOpen } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6">
              Hi, I’m Victor, a passionate software developer with a strong drive to turn ideas into real-world digital solutions. My tech journey started out of pure curiosity — a desire to understand how the apps and websites I used every day were built. That curiosity grew into a deep passion for coding, problem-solving, and creating projects that make a difference.
            </p>
            <p className="text-lg mb-6">
              Over time, I’ve explored various areas of technology — from web development using the MERN stack (MongoDB, Express, React, Node.js) to building AI-powered and data-driven applications. Each project I’ve worked on has taught me something new — not just about code, but about creativity, persistence, and the beauty of continuous learning.
            </p>
            <p className="text-lg">
              I’m focused on combining my skills in frontend design, backend logic, and intelligent systems to craft modern, responsive, and smart web applications. My goal is to keep improving, contribute to impactful projects, and inspire others who are just beginning their tech journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-portfolio-blue shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Code className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Technical Skills</h3>
                    <p className="text-portfolio-muted">
                      Proficient in JavaScript, React, Node.js, Express, MongoDB, Python and various frameworks and libraries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-portfolio-accent shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Briefcase className="h-6 w-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Experience</h3>
                    <p className="text-portfolio-muted">
                      Worked on diverse projects including AI-Powered web applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-portfolio-light-blue shadow-md hover:shadow-lg transition-shadow md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <BookOpen className="h-6 w-6 text-portfolio-light-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education & Learning</h3>
                    <p className="text-portfolio-muted">
                      Constantly enhancing my skills through continuous learning, workshops, and staying updated with industry trends.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
