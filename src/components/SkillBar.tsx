import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-zinc-300">{name}</span>
        <span className="text-xs text-zinc-400">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-700/50 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
          style={{ width: `${level}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}