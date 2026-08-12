import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Server, Layout, FileJson, Cpu, Globe, Layers, Cloud, Shield } from 'lucide-react';

const categories = ["All", "Backend", "Frontend", "DevOps", "Architecture"];

const techStack = [
  { name: "React / Next.js", icon: <Layout className="w-8 h-8" />, category: "Frontend" },
  { name: "TypeScript", icon: <Code2 className="w-8 h-8" />, category: "Frontend" },
  { name: "Node.js", icon: <Server className="w-8 h-8" />, category: "Backend" },
  { name: "PostgreSQL", icon: <Database className="w-8 h-8" />, category: "Backend" },
  { name: "GraphQL", icon: <FileJson className="w-8 h-8" />, category: "Backend" },
  { name: "AWS Cloud", icon: <Cloud className="w-8 h-8" />, category: "DevOps" },
  { name: "Docker", icon: <Layers className="w-8 h-8" />, category: "DevOps" },
  { name: "Web Security", icon: <Shield className="w-8 h-8" />, category: "Architecture" },
  { name: "WebGL / Three.js", icon: <Globe className="w-8 h-8" />, category: "Frontend" },
  { name: "System Design", icon: <Cpu className="w-8 h-8" />, category: "Architecture" }
];

export default function ArsenalChapter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStack = activeCategory === "All" 
    ? techStack 
    : techStack.filter(item => item.category === activeCategory);

  return (
    <section id="tools" className="py-16 sm:py-32 px-4 sm:px-6 max-w-[1200px] mx-auto min-h-screen flex flex-col justify-center">
      <div className="mb-8 sm:mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">03 // Tech Arsenal</span>
        <h2 className="font-display text-3xl sm:text-6xl font-bold mt-4 sm:mt-6 tracking-tight">Tools of the trade</h2>
        
        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition-colors ${
                activeCategory === cat
                  ? 'bg-[#FF3300] text-white font-semibold'
                  : 'bg-white/5 text-[#888888] hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <AnimatePresence>
          {filteredStack.map((tech, i) => (
            <motion.div 
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center text-center p-4 sm:p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] rounded-2xl transition-all shadow-xl"
              data-cursor-hover
            >
              <div className="text-[#888888] group-hover:text-[#FF3300] transition-colors mb-3 sm:mb-6 group-hover:scale-110 transform duration-300">
                {tech.icon}
              </div>
              <div className="font-display font-semibold text-sm sm:text-lg text-white mb-1 sm:mb-2">{tech.name}</div>
              <div className="font-mono text-[9px] sm:text-[10px] text-[#FF3300]/80 uppercase tracking-widest">{tech.category}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
