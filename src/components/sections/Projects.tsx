import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Link, Code } from "lucide-react";

// Project card component with simplified animations
const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image with simplified animation */}
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy" // Lazy load images for better performance
          className="w-full h-full object-cover object-center"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Overlay with project details - simplified transition */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-space-dark/95 via-space-dark/70 to-transparent p-6 flex flex-col justify-end"
        style={{
          opacity: isHovered ? 1 : 0.9,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <h3 className="text-xl font-bold mb-2 glow-text">{title}</h3>
        <p className="text-sm text-foreground/80 mb-4">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-glow-primary/10 text-glow-primary border border-glow-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-glow-primary/10 text-glow-primary border border-glow-primary/30
                hover:bg-glow-primary/20 transition-all duration-300"
            >
              <Link size={18} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-foreground border border-white/10
                hover:bg-white/10 transition-all duration-300"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects component
const Projects = () => {
  // Project data
  const projects = [
    {
      title: "Stay-Easy",
      description:
        "StayEasy is a Web3-enabled full-stack hotel management system designed to streamline bookings, customer management, and billing",
      image:
        "https://imgs.search.brave.com/CKptHdkDi8wY4vCp47-xfQ6pUS45mV5G9D4xxt4l4IQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbEV2R0ZP/U0hmTmYwTlEzNVBi/eWtGUUszUUdjRjFS/dDViX01pemZGdjM4/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV011ZG1W/amRHVmxlbmt1L1ky/OXRMM041YzNSbGJT/OXkvWlhOdmRYSmpa/WE12ZEdoMS9iV0p1/WVdsc2N5OHdNemN2/L056UTNMelE0Tmk5/emJXRnMvYkM5dmJt/eHBibVV0YUc5MC9a/V3d0WVdOamIyMXRi/MlJoL2RHbHZiaTFp/YjI5cmFXNW4vTFhk/bFluTnBkR1V0Y0hK/di9kbWxrWlMxdGIy/UnBjMmd0L2NtVnpa/WEoyWVhScGIyNHQv/YzNsemRHVnRMWFJ5/WVhabC9iQzEwWldO/b2JtOXNiMmQ1L0xX/TnZibU5sY0hRdGNH/aHYvZEc4dWFuQm4.jpeg",
      tags: ["React", "Web3.js", "API Integration"],
      demoLink: "https://stay-easy-psi.vercel.app/",
      githubLink: "https://github.com/Soumojit-007/StayEasy",
    },
    {
      title: "Forever",
      description:
        "Modern e-commerce platform with cart functionality, payment processing, and admin dashboard",
      image:
        "https://imgs.search.brave.com/kz4SYyz0qYyP83uprgvtfvK6nOE7yqwAxt281RJCZT0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTVh1U1hB/ZXNDbVQ1a2owSFRD/Wmh2YnhlZUxEWXB4/aWFzeWtmbmZUeGtp/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/UXcvTlRjMk1ETTNO/aTkyWldOMC9iM0l2/YjI1c2FXNWxMWE5v/L2IzQndhVzVuTFdS/bGMybG4vYmkxbmNt/RndhR2xqTFdWcy9a/VzFsYm5SekxYTnBa/MjV6L0xYTjViV0p2/YkhNdGJXOWkvYVd4/bExXMWhjbXRsZEds/dS9aeTFoYm1RdFpH/bG5hWFJoL2JDMXRZ/WEpyWlhScGJtY3Uv/YW5CblAzTTlOakV5/ZURZeC9NaVozUFRB/bWF6MHlNQ1pqL1BU/SkVVM0JyV1RscmRI/TkIvWm5wQ1QyTmFW/VTFyV2xSby9Wek5D/Tm10MlIxbEhNV05J/L1VUTjVaV0ZRU21j/OQ.jpeg",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      demoLink: "https://forever-one-puce.vercel.app/",
      githubLink: "https://github.com/Soumojit-007/Forever",
    },

    {
      title: "Micropayments",
      description: "DApp for seamless, low-gas Web3 micropayments.",
      image:
        "https://imgs.search.brave.com/1udLi-PruyC8BVZM-DVByS7Z8o7Vnda6URV8uLdD8QE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRG10X1R5/VHE4WUdYQkJILW5N/N2tqQ3FIQnNlcXVB/T1ZzWWVMRXF0dy1W/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9kMmxzWkdG/d2NtbGpiM1F1L1ky/OXRMM2R3TFdOdmJu/UmwvYm5RdmRYQnNi/MkZrY3k4eS9NREl5/THpFd0wyUnZibUYw/L2FXOXVMWGRsWW5O/cGRHVXQvZEdWdGNH/eGhkR1V0TlRBdy9l/RE16TXk1d2JtYw.jpeg",
      tags: ["Next.js", "Tailwind CSS", "Solidity", "Ethers.js"],
      demoLink: "https://micropayments-web3-0.vercel.app/",
      githubLink:
        "https://github.com/Soumojit-007/micropayments_web3.0 tech stack",
    },
    {
      title: "Photo Gallery",
      description: "Snapshots of life and beauty captured in every frame.",
      image: "https://imgs.search.brave.com/Gp8rqwGBs03bAovc7g87iEp3AQZ_hL5pgr9vcQZxMCQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vYnhkam1z/ck1WTWIxaUxfYjJY/REtySlFvelZKVzI2/X2x0dnZ3Z1ktZ3ZJ/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTls/Ykdaei9hV2RvZEM1/amIyMHZkM0F0L1ky/OXVkR1Z1ZEM5MWNH/eHYvWVdSekx6SXdN/VGt2TURrdi9jR2h2/ZEc4dFoyRnNiR1Z5/L2VTMXZkbVZ5ZG1s/bGR5MW0vWldGMGRY/SmxMVFF1YW5Cbg.jpeg",
      tags: ["React", "Node.js", "Tailwind],
      demoLink: "https://collegetips-gallery-gamma.vercel.app/",
      githubLink: "https://github.com/Soumojit-007/collegetips_gallery",
    },
    // {
    //   title: "NFT Marketplace",
    //   description: "Platform for creating, buying, and selling digital collectibles as NFTs",
    //   image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    //   tags: ["React", "Solidity", "Ethereum", "IPFS"],
    //   demoLink: "https://example.com",
    //   githubLink: "https://github.com",
    // },
  ];

  return (
    <section id="projects" className="section">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="glow-text">Projects</span>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          A curated showcase of my recent work, personal projects, and
          experimental ventures across a diverse range of cutting-edge
          technologies. This collection highlights my journey of continuous
          learning, creative exploration, and practical
          application—demonstrating how I push boundaries, solve complex
          problems, and bring innovative ideas to life. From sleek web
          applications to novel tech experiments, each piece reflects my
          commitment to craftsmanship, functionality, and forward-thinking
          design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="https://port-folio-07.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-flex items-center space-x-2"
        >
          <Code size={18} />
          <span>Visit My old Portfolio</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
