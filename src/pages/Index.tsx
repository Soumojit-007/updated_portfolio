
import AnimatedBackground from "@/components/3d/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="relative">
      {/* Animated 3D background */}
      <AnimatedBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
