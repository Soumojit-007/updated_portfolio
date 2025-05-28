
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Skill card with 3D effect
const SkillCard = ({ title, icon, description }: { title: string; icon: string; description: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for card rotation
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });
  
  // Handle mouse movement over the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  // Reset card position
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  return (
    <motion.div
      className="h-64 w-full perspective-1000"
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="glass h-full w-full rounded-xl p-6 flex flex-col items-center justify-center text-center glow-border"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="text-4xl mb-4" style={{ transform: "translateZ(20px)" }}>
          {icon}
        </div>
        <h3 className="text-xl font-heading mb-2 glow-text" style={{ transform: "translateZ(20px)" }}>
          {title}
        </h3>
        <p className="text-sm text-foreground/70" style={{ transform: "translateZ(20px)" }}>
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Skill category section
const SkillCategory = ({ title, skills }: { title: string; skills: { title: string; icon: string; description: string }[] }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-heading mb-6 inline-block relative">
        {title}
        <div className="absolute bottom-0 left-0 h-0.5 w-24 bg-glow-primary"></div>
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

// Main Skills component
const Skills = () => {
  // Skill data by category
  const skillsData = {
    frontend: [
      { title: 'React', icon: '⚛️', description: 'Building interactive UIs with React, Redux, and Next.js' },
      { title: 'JavaScript', icon: '📜', description: 'ES6+, TypeScript, and modern JS frameworks' },
      { title: 'CSS', icon: '🎨', description: 'Tailwind CSS, SCSS, CSS-in-JS, and animations' },
    ],
    backend: [
      { title: 'Node.js', icon: '⚙️', description: 'RESTful APIs with Express and GraphQL' },
      { title: 'Databases', icon: '🗄️', description: 'MongoDB, PostgreSQL, and Firebase' },
      { title: 'Web3', icon: '🔗', description: 'Smart contracts, dApps, and blockchain integration' },
    ],
    tools: [
      { title: 'Git', icon: '🔄', description: 'Version control, GitHub, and collaborative workflows' },
      { title: 'Testing', icon: '🧪', description: 'Jest, React Testing Library, and Cypress' },
      { title: 'DevOps', icon: '🚀', description: 'CI/CD, Docker, and cloud deployment' },
    ],
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section id="skills" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="glow-text">Skillset</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
          <SkillCategory title="Backend Development" skills={skillsData.backend} />
          <SkillCategory title="Tools & Workflows" skills={skillsData.tools} />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
