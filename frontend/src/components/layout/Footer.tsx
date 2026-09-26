
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="py-8 px-6 border-t border-white/10 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-foreground/60 mb-4 md:mb-0">
          © {currentYear}All rights reserved.
        </p>
        
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-sm text-foreground/60">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
          {/* <a 
            href="https://port-folio-07.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors font-medium text-glow-primary"
          >
            My Old Portfolio
          </a> */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
