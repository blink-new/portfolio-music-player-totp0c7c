import { Github, Gamepad2, Discord } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/portfolio';
import { motion } from 'framer-motion';

export function Footer() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Discord':
        return <Discord size={20} />;
      case 'Roblox':
        return <Gamepad2 size={20} />;
      default:
        return null;
    }
  };

  return (
    <motion.footer 
      className="py-8 mt-12 border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label={`Visit ${link.name}`}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {getIconComponent(link.icon)}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}