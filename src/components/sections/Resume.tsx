import { motion } from "framer-motion";
import { FileText, Calendar, Briefcase, Book } from "lucide-react";

// Timeline event component
const TimelineEvent = ({
  date,
  title,
  subtitle,
  description,
  isLeft = true,
  type = "work",
}: {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  isLeft?: boolean;
  type?: "work" | "education";
}) => {
  const contentClasses = isLeft ? "md:mr-auto md:text-right" : "md:ml-auto";

  const containerClasses = isLeft ? "md:flex-row" : "md:flex-row-reverse";

  const Icon = type === "work" ? Briefcase : Book;

  return (
    <motion.div
      className={`flex ${containerClasses} items-start mb-12`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-full md:w-5/12 ${contentClasses}`}>
        <span className="inline-block text-glow-primary text-sm mb-2">
          {date}
        </span>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-lg text-foreground/70 mb-3">{subtitle}</h4>
        <p className="text-sm text-foreground/60">{description}</p>
      </div>

      <div className="hidden md:flex items-center justify-center w-2/12">
        <div className="w-10 h-10 rounded-full bg-glow-primary/20 flex items-center justify-center animate-pulse-glow">
          <Icon size={18} className="text-glow-primary" />
        </div>
      </div>

      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

// Main Resume component
const Resume = () => {
  const resumeData = {
    workExperience: [
      // {
      //   date: "2021 - Present",
      //   title: "Senior Frontend Developer",
      //   subtitle: "Tech Innovations Inc.",
      //   description: "Leading the frontend development team, implementing modern React architecture, and mentoring junior developers."
      // },
      // {
      //   date: "2020 - 2021",
      //   title: "Web Developer",
      //   subtitle: "Digital Solutions Agency",
      //   description: "Built responsive web applications with React, Node.js, and MongoDB, focusing on performance optimization."
      // },
      {
        date: "2025(Present)",
        title: "Junior Developer",
        subtitle: "Collegetips.in",
        description:
          "Worked on UI/UX implementation, frontend development, and maintenance of client websites.",
      },
    ],
    education: [
      {
        date: "2020 - 2022",
        title: "Secondary School Certificate",
        subtitle: "Acme Academy",
        description:
          "Completed my secondary education with a focus on science and mathematics.",
      },
      {
        date: "2022 - 2026",
        title: "BTech in Computer Science",
        subtitle: "Vellore Insitiute of Technology",
        description:
          "Focused on software devlopement, data structures and algorithms , web technologies , machine learning and AI, and Blockchain.",
      },
    ],
  };

  return (
    <section id="resume" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="glow-text">Experience</span>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Welcome to a timeline that captures the milestones of my professional journey and educational growth in the dynamic world of web development. From the foundational steps of learning HTML and CSS to building full-stack applications and exploring the possibilities of Web3, this path reflects continuous learning, real-world experience, and a passion for crafting digital solutions.

Along the way, I've pursued academic knowledge, taken on internships, contributed to impactful projects, and stayed updated with modern tools and frameworks. Whether it's designing intuitive user interfaces, writing clean backend logic, or deploying responsive applications, every step has added depth to my skill set and shaped the developer I am today.

This timeline showcases not just a list of roles or certifications—but the evolution of a developer committed to innovation, collaboration, and continuous improvement in the tech space.
        </p>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-heading mb-12 inline-block relative">
            Work Experience
            <div className="absolute bottom-0 left-0 h-0.5 w-24 bg-glow-primary"></div>
          </h3>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10"></div>

            {/* Timeline events */}
            {resumeData.workExperience.map((job, index) => (
              <TimelineEvent
                key={index}
                date={job.date}
                title={job.title}
                subtitle={job.subtitle}
                description={job.description}
                isLeft={index % 2 === 0}
                type="work"
              />
            ))}
          </div>

          <h3 className="text-2xl font-heading mt-20 mb-12 inline-block relative">
            Education
            <div className="absolute bottom-0 left-0 h-0.5 w-24 bg-glow-primary"></div>
          </h3>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10"></div>

            {/* Timeline events */}
            {resumeData.education.map((edu, index) => (
              <TimelineEvent
                key={index}
                date={edu.date}
                title={edu.title}
                subtitle={edu.subtitle}
                description={edu.description}
                isLeft={index % 2 === 0}
                type="education"
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/MyResume.pdf"
              className="button-primary inline-flex items-center space-x-2"
              download
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
