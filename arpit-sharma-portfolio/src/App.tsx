import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from './data/portfolioData';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CyberDevices } from './components/CyberDevices';
import { 
  Network, 
  Shield, 
  Terminal, 
  Cpu, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Networking');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0c] flex items-center justify-center z-[100]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-24 h-24 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-cyber-purple rounded-full"
            />
            <div className="absolute inset-2 border-t-2 border-cyber-blue rounded-full opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl tracking-tighter">
              AS
            </div>
          </div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
          />
          <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-cyber-blue/60">Initializing NOC Dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "glass-dark py-3 border-white/10" : "bg-transparent py-6 border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center border-cyber-purple/50 group-hover:border-cyber-purple">
              <span className="font-bold text-lg text-glow">AS</span>
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight">Arpit Sharma</p>
              <p className="text-[10px] text-cyber-blue font-mono uppercase">Network Engineer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-blue transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="px-5 py-2 glass rounded-full text-xs hover:border-cyber-blue transition-all">
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-8 text-2xl"
          >
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-cyber-purple/30">
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-purple animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-purple">Cyber Ops Ready</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Securing Networks, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-violet">
                Building Futures.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              {portfolioData.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-cyber-purple hover:bg-cyber-violet transition-colors rounded-xl font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(157,0,255,0.3)]">
                Connect on LinkedIn <Linkedin size={18} />
              </button>
              <button className="px-8 py-4 glass hover:bg-white/10 transition-colors rounded-xl font-bold text-sm flex items-center gap-2">
                View Infrastructure <Briefcase size={18} />
              </button>
            </div>

            <div className="flex gap-8 pt-8 items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-glow">3+</span>
                <span className="text-[10px] font-mono uppercase tracking-tighter text-slate-500">Years Experience</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-glow">1000+</span>
                <span className="text-[10px] font-mono uppercase tracking-tighter text-slate-500">Devices Monitored</span>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <CyberDevices />
          </div>
        </section>

        {/* About / Stats Grid */}
        <section id="about" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-2 p-8 glass rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                <Terminal size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ChevronRight className="text-cyber-blue" /> Career Path
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Currently operating as a Network Engineer at <strong>Stefanini Group</strong> within the LEAR Corporation project. 
                My focus is merging legacy network reliability with modern DevOps automation. Expert in Cisco environments, 
                Palo Alto security, and enterprise connectivity.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 glass-dark rounded-3xl border-cyber-blue/20"
            >
              <h3 className="text-sm font-mono text-cyber-blue uppercase tracking-widest mb-6">Certifications</h3>
              <ul className="space-y-4">
                {portfolioData.certifications.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <Award size={16} className="text-cyber-purple shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {portfolioData.skills.map((group) => (
                <button
                  key={group.category}
                  onClick={() => setActiveTab(group.category)}
                  className={cn(
                    "px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all",
                    activeTab === group.category 
                      ? "bg-white text-black font-bold shadow-[0_0_20px_white/20]" 
                      : "glass text-slate-400 hover:text-white"
                  )}
                >
                  {group.category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <AnimatePresence mode="wait">
              {portfolioData.skills.find(s => s.category === activeTab)?.skills.map((skill, i) => (
                <motion.div
                  key={`${activeTab}-${skill}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative"
                >
                  <div className="p-4 glass-dark rounded-xl h-full flex items-center justify-center text-center group-hover:border-cyber-blue/40 transition-all border-white/5">
                    <span className="text-xs font-bold uppercase tracking-tight">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-cyber-blue font-mono text-xs uppercase tracking-[0.3em] mb-2">My Journey</p>
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>
            <div className="hidden md:block h-[1px] flex-1 mx-8 bg-white/5" />
          </div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-cyber-purple shadow-[0_0_10px_rgba(157,0,255,0.5)]" />
                <div className="p-8 glass rounded-3xl border-cyber-purple/10">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-cyber-blue">
                        <span className="text-sm font-bold">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="text-xs text-slate-500">Project: {exp.project}</span>
                      </div>
                    </div>
                    <div className="px-4 py-1 glass rounded-full text-xs font-mono text-slate-400">
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-4">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-blue/40 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Infrastructure Labs</h2>
            <p className="text-slate-400">Practical implementations and monitored environments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group glass rounded-3xl overflow-hidden border-white/5 hover:border-cyber-blue/30 transition-all flex flex-col"
              >
                <div className="h-48 bg-[#111115] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 pointer-events-none cyber-grid" />
                  {project.type === 'Security' ? <Shield size={80} className="text-cyber-purple/20 group-hover:scale-110 transition-transform" /> : <Network size={80} className="text-cyber-blue/20 group-hover:scale-110 transition-transform" />}
                  <div className="absolute bottom-4 left-4 flex gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="text-[8px] font-mono px-2 py-0.5 glass rounded uppercase text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{project.description}</p>
                  <button className="flex items-center gap-2 text-xs font-bold text-cyber-blue group-hover:translate-x-2 transition-transform">
                    Lab Documentation <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="glass-dark rounded-[40px] p-8 md:p-16 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[100px]" />

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Initiate Connection</h2>
                <p className="text-slate-400 text-lg">
                  Looking for a network engineer who understands the security landscape and DevOps automation? Let's connect.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-cyber-blue group-hover:bg-cyber-blue group-hover:text-black transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-500">Email Gateway</p>
                      <p className="font-medium">{portfolioData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-cyber-purple group-hover:bg-cyber-purple group-hover:text-black transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-500">Secure Line</p>
                      <p className="font-medium">{portfolioData.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <input type="text" placeholder="Identity (Name)" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-blue outline-none transition-all" />
                <input type="email" placeholder="Return Address (Email)" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-blue outline-none transition-all" />
                <textarea placeholder="Transmission Content (Message)" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-blue outline-none transition-all resize-none"></textarea>
                <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyber-blue transition-colors flex items-center justify-center gap-2">
                  Send Transmission <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold">Arpit Sharma</p>
              <p className="text-xs text-slate-500 mt-1">© 2024 NOC-AS. All infrastructure monitored.</p>
            </div>
            <div className="flex gap-4">
              <a href={portfolioData.linkedin} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-cyber-blue transition-all">
                <Linkedin size={18} />
              </a>
              <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-cyber-purple transition-all">
                <Download size={18} />
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Progress Line */}
      <motion.div 
        className="fixed top-0 left-0 w-1 h-screen bg-cyber-blue/20 z-[60] origin-top"
        style={{ scaleY: 0 }}
      />
    </div>
  );
}
