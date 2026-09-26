
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// NavLink component for navigation items
const NavLink = ({ 
  title, 
  href, 
  isActive 
}: { 
  title: string; 
  href: string; 
  isActive: boolean;
}) => {
  return (
    <a
      href={href}
      className={`relative px-3 py-2 transition-all duration-300 text-sm ${
        isActive 
          ? 'text-glow-primary font-medium' 
          : 'text-foreground/70 hover:text-foreground'
      }`}
    >
      {title}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-glow-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </a>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  // Update the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background opacity based on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Get all sections and determine which one is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Skills', href: '#skills' },
    { title: 'Resume', href: '#resume' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];
  
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-heading font-bold text-foreground">
          <span className="glow-text">Soumojit Gon</span>
        </a>
        
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              title={link.title}
              href={link.href}
              isActive={activeSection === link.href.slice(1)}
            />
          ))}
        </div>
        
        <div className="md:hidden flex items-center">
          <a href="#contact" className="button-primary text-sm">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
