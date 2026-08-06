import { motion } from 'framer-motion';
import { Code2, Database, Server, Layout, FileJson, Cpu, Globe, Layers, Cloud, Shield } from 'lucide-react';

const techStack = [
  { name: "React / Next.js", icon: <Layout className="w-8 h-8" />, category: "Frontend" },
  { name: "TypeScript", icon: <Code2 className="w-8 h-8" />, category: "Language" },
  { name: "Node.js", icon: <Server className="w-8 h-8" />, category: "Backend" },
  { name: "PostgreSQL", icon: <Database className="w-8 h-8" />, category: "Database" },
  { name: "GraphQL", icon: <FileJson className="w-8 h-8" />, category: "API" },
  { name: "AWS Cloud", icon: <Cloud className="w-8 h-8" />, category: "DevOps" },
  { name: "Docker", icon: <Layers className="w-8 h-8" />, category: "DevOps" },
  { name: "Web Security", icon: <Shield className="w-8 h-8" />, category: "Architecture" },
  { name: "WebGL / Three.js", icon: <Globe className="w-8 h-8" />, category: "Creative" },
  { name: "System Design", icon: <Cpu className="w-8 h-8" />, category: "Architecture" }
];

export default function ArsenalChapter() {
  return (
    <section id="tools" className="py-32 px-6 max-w-[1200px] mx-auto min-h-screen flex flex-col justify-center">
      <div className="mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">03 // Tech Arsenal</span>
        <h2 className="font-display text-4xl sm:text-6xl font-bold mt-6 tracking-tight">Tools of the trade</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {techStack.map((tech, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group flex flex-col items-center text-center p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] rounded-xl transition-colors"
            data-cursor-hover
          >
            <div className="text-[#888888] group-hover:text-[#FF3300] transition-colors mb-6">
              {tech.icon}
            </div>
            <div className="font-display font-semibold text-lg text-white mb-2">{tech.name}</div>
            <div className="font-mono text-[10px] text-[#666666] uppercase tracking-widest">{tech.category}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
