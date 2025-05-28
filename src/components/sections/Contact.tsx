
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Social link component
const SocialLink = ({ 
  icon, 
  href, 
  label 
}: { 
  icon: React.ReactNode; 
  href: string; 
  label: string;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/5 text-foreground border border-white/10
      hover:bg-white/10 hover:text-glow-primary transition-all duration-300
      flex items-center justify-center"
    aria-label={label}
  >
    {icon}
  </a>
);

// Main Contact component
const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    console.log('Form data:', formState);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="glow-text">Touch</span>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to chat? Feel free to reach out through the form below or via social platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="glass p-8 rounded-xl glow-border">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-glow-primary/50 text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-glow-primary/50 text-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-glow-primary/50 text-foreground"
                  placeholder="I'd like to discuss a project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full button-primary py-3"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div>
            <div className="glass p-8 rounded-xl mb-8 glow-border">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Email</p>
                  <a href="mailto:john.doe@example.com" className="text-glow-primary hover:underline">
                    sanjugon2003@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Location</p>
                  <p>Kolkata,West Bengal</p>
                </div>
                
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Availability</p>
                  <p>Open to freelance projects and collaborations</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-xl glow-border">
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              
              <div className="flex space-x-4">
                <SocialLink 
                  icon={<Github size={20} />} 
                  href="https://github.com/Soumojit-007" 
                  label="GitHub"
                />
                <SocialLink 
                  icon={<Linkedin size={20} />} 
                  href="https://www.linkedin.com/in/soumojit-gon-a80319224/" 
                  label="LinkedIn"
                />
                <SocialLink 
                  icon={<Twitter size={20} />} 
                  href="https://x.com/home" 
                  label="Twitter"
                />
                <SocialLink 
                  icon={<Mail size={20} />} 
                  href="sanjugon2003@gmail.com" 
                  label="Email"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 p-4 rounded-full bg-glow-primary/10 text-glow-primary border border-glow-primary/30
          hover:bg-glow-primary/20 transition-all duration-300 shadow-[0_0_10px_rgba(76,201,240,0.3)]"
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </section>
  );
};

export default Contact;
