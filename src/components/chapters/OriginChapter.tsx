import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Layout, Cpu, Database } from 'lucide-react';

export default function OriginChapter() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="py-32 px-6 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center relative"
    >
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">01 // The Origin</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Text */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8">
              Bridging the gap between <span className="font-serif italic font-normal text-[#FF3300]">design & engineering.</span>
            </h2>
            <motion.div 
              className="space-y-6 text-[#CCCCCC] font-sans text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                Hello, I'm Ardan. For over five years, I've engineered digital experiences at the intersection of performant code and immersive design. 
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                I specialize in architecting scalable systems, shaping user interfaces, and turning complex logic into elegant, accessible solutions. Whether it's a high-traffic fintech dashboard or a cinematic e-commerce platform, I ensure the underlying architecture is as flawless as the front-end aesthetics.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                Beyond the terminal, I'm passionate about mentoring upcoming developers and exploring the boundaries of generative AI in UX design.
              </motion.p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/10">
              {[
                { label: "Experience", value: "5+ Yrs" },
                { label: "Projects", value: "40+" },
                { label: "Clients", value: "Global" },
                { label: "Focus", value: "Full Stack" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-mono text-[10px] text-[#888888] uppercase mb-1">{stat.label}</div>
                  <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Animated Graphic */}
        <div className="relative h-[600px] hidden lg:block perspective-[1000px]">
          {/* Main Glowing Background */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF3300]/20 to-purple-600/20 rounded-full blur-[80px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Element 1: Code Block */}
          <motion.div 
            style={{ y: y1, rotateX: rotate1 }}
            className="absolute top-[10%] left-[10%] w-[280px] bg-[#111111] border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
              <Terminal className="w-4 h-4 text-[#FF3300]" />
              <span className="font-mono text-xs text-[#888888]">server.js</span>
            </div>
            <div className="font-mono text-[10px] text-[#CCCCCC] space-y-2">
              <p><span className="text-purple-400">import</span> express <span className="text-purple-400">from</span> 'express';</p>
              <p><span className="text-purple-400">const</span> app = express();</p>
              <br/>
              <p>app.<span className="text-blue-400">get</span>('/', (req, res) =&gt; {'{'})</p>
              <p className="pl-4">res.<span className="text-blue-400">send</span>('System Online');</p>
              <p>{'}'});</p>
            </div>
          </motion.div>

          {/* Floating Element 2: UI Wireframe */}
          <motion.div 
            style={{ y: y2, rotateY: rotate2 }}
            className="absolute bottom-[10%] right-[5%] w-[320px] bg-[#0a0a0a] border border-[#FF3300]/30 rounded-xl p-6 shadow-2xl shadow-[#FF3300]/5 backdrop-blur-md z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
              <Layout className="w-4 h-4 text-[#FF3300]" />
              <span className="font-mono text-xs text-[#888888]">ui_component.tsx</span>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-1/3 bg-white/20 rounded animate-pulse" />
              <div className="h-24 w-full bg-[#111111] rounded border border-white/5 flex items-center justify-center">
                 <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 >
                    <Cpu className="w-8 h-8 text-[#FF3300]/50" />
                 </motion.div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-1/2 bg-white/10 rounded" />
                <div className="h-6 w-1/2 bg-[#FF3300]/20 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Floating Orbiting Data Nodes */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center">
              <Database className="w-3 h-3 text-[#888888]" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#1a1a1a] border border-[#FF3300]/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#FF3300] rounded-full animate-ping" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
