import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export function ProjectItem({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index
}: ProjectItemProps) {
  return (
    <motion.div 
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="w-full h-48 sm:h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        
        <p className="text-zinc-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}