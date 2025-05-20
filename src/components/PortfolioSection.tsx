import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PortfolioSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  index?: number;
}

export function PortfolioSection({ 
  title, 
  children, 
  className = '',
  index = 0
}: PortfolioSectionProps) {
  return (
    <motion.section
      className={`w-full max-w-2xl mx-auto backdrop-blur-lg bg-black/20 rounded-xl p-6 sm:p-8 border border-white/10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold mb-6 text-white inline-block relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 * index }}
      >
        {title}
        <motion.span 
          className="absolute left-0 -bottom-2 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.6, delay: 0.3 * index }}
        />
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 * index }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}