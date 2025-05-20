import { motion } from 'framer-motion';
import { Background } from './components/Background';
import { MusicPlayer } from './components/MusicPlayer';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillBar } from './components/SkillBar';
import { Footer } from './components/Footer';
import { personalInfo, skills } from './data/portfolio';

function App() {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolSkills = skills.filter(skill => skill.category === 'tools');
  const scriptingSkills = skills.filter(skill => skill.category === 'scripting');

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
            {/* Skills Section */}
            <PortfolioSection title="Skills" index={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-200">Scripting</h3>
                  {scriptingSkills.map((skill, i) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      index={i} 
                    />
                  ))}
                  <h3 className="text-lg font-medium mb-3 mt-6 text-zinc-200">Frontend</h3>
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