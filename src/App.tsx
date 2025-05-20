import { motion } from 'framer-motion';
import { Background } from './components/Background';
import { MusicPlayer } from './components/MusicPlayer';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillBar } from './components/SkillBar';
import { Footer } from './components/Footer';
import { personalInfo, skills, socialLinks } from './data/portfolio';

function App() {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolSkills = skills.filter(skill => skill.category === 'tools');

  // Social icon mapping
  const iconMap: Record<string, JSX.Element> = {
    Discord: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord"><circle cx="12" cy="12" r="10"/><path d="M17.5 16.5c-1.5-1-3.5-1-5 0"/><path d="M8.5 16.5c1.5-1 3.5-1 5 0"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
    ),
    Github: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V23"/></svg>
    ),
    Gamepad2: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
    ),
  };

  return (
    <div className="min-h-screen text-white relative">
      <Background />
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.header 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            className="text-xl text-zinc-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.p>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="backdrop-blur-lg bg-white/5 px-4 py-2 rounded-md border border-white/10">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm">{personalInfo.availableForWork ? 'Available for work' : 'Currently busy'}</span>
            </div>
          </motion.div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <PortfolioSection title="About Me" index={0}>
              <p className="text-zinc-300 leading-relaxed mb-4">{personalInfo.bio}</p>
              <p className="text-zinc-300 leading-relaxed">
                Based in <span className="text-white font-medium">{personalInfo.location}</span>
              </p>
            </PortfolioSection>

            {/* Socials Section */}
            <PortfolioSection title="Socials" index={1}>
              <div className="flex flex-col gap-4 items-start">
                {socialLinks.map((link, i) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-lg font-medium shadow"
                  >
                    <span className="text-blue-400">{iconMap[link.icon] || null}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </PortfolioSection>

            {/* Skills Section */}
            <PortfolioSection title="Skills" index={2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-200">Frontend</h3>
                  {frontendSkills.map((skill, i) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      index={i} 
                    />
                  ))}
                  <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-200">Backend</h3>
                  {backendSkills.map((skill, i) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      index={i + frontendSkills.length} 
                    />
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-200">Design</h3>
                  {designSkills.map((skill, i) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      index={i} 
                    />
                  ))}
                  <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-200">Tools</h3>
                  {toolSkills.map((skill, i) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      index={i + designSkills.length} 
                    />
                  ))}
                </div>
              </div>
            </PortfolioSection>
          </div>

          {/* Music Player Column */}
          <div className="lg:sticky lg:top-16 h-fit">
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <MusicPlayer />
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
