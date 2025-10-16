
import React from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "language";
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Languages
    { name: "Python", level: 80, category: "language" },
    { name: "JavaScript", level: 90, category: "language" },
    { name: "TypeScript", level: 80, category: "language" },
    { name: "HTML/CSS", level: 90, category: "language" },
    
    // Frontend
    { name: "React.js", level: 88, category: "frontend" },
    { name: "Redux", level: 82, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Material UI", level: 80, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express.js", level: 88, category: "backend" },
    { name: "MongoDB", level: 90, category: "backend" },
    // { name: "Django", level: 87, category: "backend" },
    // { name: "Flask", level: 85, category: "backend" },
    // { name: "SQL", level: 80, category: "backend" },
    
    // Tools & Others
    { name: "Git", level: 85, category: "tools" },
    // { name: "Docker", level: 75, category: "tools" },
    // { name: "AWS", level: 70, category: "tools" },
    { name: "RESTful APIs", level: 90, category: "tools" },
  ];

  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const languageSkills = skills.filter(skill => skill.category === "language");
  const toolSkills = skills.filter(skill => skill.category === "tools");

  const SkillProgressBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-portfolio-muted">{skill.level}%</span>
        </div>
        <Progress value={skill.level} className="h-2" />
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-blue">Programming Languages</h3>
            {languageSkills.map((skill) => (
              <SkillProgressBar key={skill.name} skill={skill} />
            ))}
            
            <h3 className="text-xl font-semibold mb-6 mt-10 text-portfolio-blue">Frontend Development</h3>
            {frontendSkills.map((skill) => (
              <SkillProgressBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-blue">Backend Development</h3>
            {backendSkills.map((skill) => (
              <SkillProgressBar key={skill.name} skill={skill} />
            ))}
            
            <h3 className="text-xl font-semibold mb-6 mt-10 text-portfolio-blue">Tools & Technologies</h3>
            {toolSkills.map((skill) => (
              <SkillProgressBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-blue">Key Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.name} className="skill-badge">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
