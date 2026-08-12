import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce OS",
    category: "Full Stack · Architecture",
    description: "A headless e-commerce architecture built for scale. Microservices backend with a Next.js frontend.",
    stats: { "Uptime": "99.9%", "Revenue": "$2.4M", "Latency": "<50ms" },
    color: "#FF3300",
    github: "https://github.com/Thomasw278",
    demo: "https://github.com/Thomasw278"
  },
  {
    title: "Fintech Dashboard",
    category: "React · Data Visualization",
    description: "Real-time analytics dashboard processing millions of data points with WebGL rendering.",
    stats: { "Data/sec": "50K", "Users": "120K", "Render": "60fps" },
    color: "#2255FF",
    github: "https://github.com/Thomasw278",
    demo: "https://github.com/Thomasw278"
  },
  {
    title: "AI Code Assistant",
    category: "Machine Learning · Extension",
    description: "VS Code extension that predicts and generates code blocks based on context using custom LLM.",
    stats: { "Downloads": "500K+", "Accuracy": "94%", "Latency": "120ms" },
    color: "#00FF66",
    github: "https://github.com/Thomasw278",
    demo: "https://github.com/Thomasw278"
  }
];

export default function CraftChapter() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="projects" ref={targetRef}>
      {/* Mobile Layout: Clean vertical stack with interactive cards */}
      <div className="md:hidden py-16 px-5 max-w-xl mx-auto space-y-12">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">02 // Vibe Code Experiments</span>
          <h2 className="font-display text-3xl font-bold mt-2">Selected Work</h2>
        </div>

        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            whileTap={{ scale: 0.98 }}
            className="space-y-5 border border-white/10 bg-white/[0.02] p-5 rounded-2xl shadow-2xl"
          >
            <div className="aspect-[16/10] w-full bg-[#111111] border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
              <span className="font-display text-5xl text-white/20">{project.title.substring(0, 2)}</span>
              
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 text-[#FF3300] border border-[#FF3300]/30 backdrop-blur-md">
                  FEATURED
                </span>
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white/70 mb-3 bg-white/5">
                {project.category}
              </span>
              <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 mb-5">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="font-mono text-[9px] uppercase text-[#888888] mb-0.5">{key}</div>
                    <div className="font-mono text-xs text-white font-medium">{value}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FF3300] text-white py-2.5 rounded-xl font-mono text-xs font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  <ExternalLink size={14} /> View Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Source Code"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Layout: Cinematic Sticky Horizontal Scroll */}
      <div className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-black">
          {/* Section Header */}
          <div className="absolute top-10 left-6 z-10 flex w-full justify-between pr-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">02 // Vibe Code Experiments</span>
            <span className="font-mono text-xs text-white/50">Scroll to explore</span>
          </div>

          <motion.div style={{ x }} className="flex w-[300vw]">
            {projects.map((project, index) => (
              <div key={index} className="w-[100vw] h-screen flex items-center justify-center p-6 sm:p-20">
                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                  
                  {/* Visual placeholder */}
                  <div 
                    className="aspect-square md:aspect-[4/3] w-full bg-[#111111] border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden"
                    data-cursor-hover
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                    <span className="font-display text-4xl sm:text-6xl text-white/10">{project.title.substring(0, 2)}</span>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-4 font-mono text-[10px] text-white/80 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
                    >
                      <ExternalLink size={12} /> VIEW LIVE
                    </a>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-white/70 mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">{project.title}</h3>
                      <p className="text-[#888888] text-lg mb-10 max-w-md leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="font-mono text-[10px] uppercase text-[#888888] mb-1">{key}</div>
                          <div className="font-mono text-lg text-white font-medium">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

          {/* Progress Indicator */}
          <div className="absolute bottom-10 right-10 font-mono text-sm text-white flex items-center gap-4">
            <span>01</span>
            <div className="w-24 h-px bg-white/20 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#FF3300]" 
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
            <span>03</span>
          </div>
        </div>
      </div>
    </section>
  );
}
