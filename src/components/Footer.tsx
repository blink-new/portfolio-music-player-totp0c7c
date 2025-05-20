import { Github } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/portfolio';
import { motion } from 'framer-motion';

// Custom SVGs for Discord and Roblox
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-1.11 2.086-1.527 3.005a18.524 18.524 0 0 0-5.456 0c-.418-.92-1.003-2.098-1.527-3.005A.115.115 0 0 0 8.115 3.2a19.736 19.736 0 0 0-3.432 1.169.105.105 0 0 0-.047.043C2.228 7.045 1.345 9.625 1.5 12.162c0 .014.006.028.014.04a19.888 19.888 0 0 0 5.993 3.058.112.112 0 0 0 .123-.042c.462-.63.874-1.295 1.226-1.994a.112.112 0 0 0-.061-.155 12.6 12.6 0 0 1-1.785-.85.112.112 0 0 1-.011-.186c.12-.09.24-.18.355-.27a.112.112 0 0 1 .114-.013c3.781 1.73 7.87 1.73 11.607 0a.112.112 0 0 1 .115.012c.116.09.236.18.356.27a.112.112 0 0 1-.01.186c-.57.33-1.16.62-1.786.85a.112.112 0 0 0-.06.156c.36.7.773 1.364 1.225 1.994a.112.112 0 0 0 .123.042 19.888 19.888 0 0 0 5.994-3.058.112.112 0 0 0 .014-.04c.16-2.537-.63-5.117-2.136-7.75a.098.098 0 0 0-.048-.043ZM8.02 13.665c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z" fill="currentColor"/>
  </svg>
);

const RobloxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/>
    <rect x="8" y="8" width="8" height="8" rx="1" fill="#fff"/>
  </svg>
);

export function Footer() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Discord':
        return <DiscordIcon width={20} height={20} />;
      case 'Roblox':
        return <RobloxIcon width={20} height={20} />;
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
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
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
