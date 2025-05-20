import { Github, Gamepad2, Mail } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/portfolio';
import { motion } from 'framer-motion';

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M17.5 16.5c-1.5-1-3.5-1-5 0"/><path d="M8.5 16.5c1.5-1 3.5-1 5 0"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
);

export function Footer() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Gamepad2':
        return <Gamepad2 size={20} />;
      case 'Discord':
        return <DiscordIcon />;
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
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Send email"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}