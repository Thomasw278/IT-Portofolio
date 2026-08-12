import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const roles = [
  "Backend Developer",
  "Database Enthusiast",
  "Software Engineer"
];

export default function HeroChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center px-5 sm:px-6 overflow-hidden pt-20 pb-24 sm:pb-10"
      id="hero"
    >
      {/* Massive Background Text — hidden on very small screens to avoid overflow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 mt-10">
        <motion.div style={{ y: y1, opacity }} className="flex flex-col items-center">
          <h1 className="font-display font-bold text-[28vw] sm:text-[22vw] leading-[0.8] text-[#1a1a1a] tracking-tighter whitespace-nowrap">
            SOFTWARE
          </h1>
          <h1 className="font-display font-bold text-[28vw] sm:text-[22vw] leading-[0.8] text-[#1a1a1a] tracking-tighter whitespace-nowrap text-outline ml-[10vw]">
            CRAFTSMAN
          </h1>
        </motion.div>
      </div>

      {/* Mobile Layout: Stacked */}
      <div className="flex flex-col lg:hidden max-w-xl mx-auto w-full z-10 gap-6 relative">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF3300]/10 border border-[#FF3300]/30 text-xs font-mono text-[#FF3300] w-fit shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-ping" />
          <span>Available for Hire</span>
        </div>

        {/* Name + Role */}
        <div>
          <div className="font-serif italic text-2xl text-[#CCCCCC] mb-1">Hello, I'm</div>
          <h2 className="font-display font-bold text-[42px] leading-[0.95] text-white tracking-tighter">
            THOMAS AQUINAS<br/>RYAN WISNU ADI
          </h2>

          {/* Rotating Role */}
          <div className="h-9 overflow-hidden mt-3 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-sans text-[#FF3300] font-bold text-sm uppercase tracking-widest"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Avatar — Centered on mobile */}
        <motion.div
          className="relative w-full max-w-[260px] mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10" />
          <img
            src={`${import.meta.env.BASE_URL}avatar.png`}
            alt="Thomas Aquinas Ryan Wisnu Adi"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Bio */}
        <p className="font-sans text-[#888888] text-sm leading-relaxed text-justify">
          I engineer digital experiences that blend immaculate code with high-end editorial design. Passionate about clean architecture and smooth interactions.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "3+", label: "Years\nExperience" },
            { value: "5+", label: "Projects\nCompleted" },
            { value: "Local", label: "Community\nClients" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-start p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="font-display font-bold text-2xl text-[#FF3300]">{stat.value}</span>
              <span className="font-mono text-[9px] text-[#888888] uppercase tracking-widest leading-tight whitespace-pre-line mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#555555]">
          <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-pulse" />
          Based in Yogyakarta
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={12} />
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout: Original 3-column grid */}
      <div className="max-w-[1400px] mx-auto w-full z-10 relative hidden lg:flex flex-col flex-1 justify-end pb-20">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-end relative h-full min-h-[60vh]">
          
          {/* Left */}
          <motion.div 
            className="flex flex-col z-20 pb-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF3300]/10 border border-[#FF3300]/30 mb-4 text-xs font-mono text-[#FF3300] w-fit shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-ping" />
              <span>Available for Hire</span>
            </div>
            <div className="font-serif italic text-5xl text-[#CCCCCC] mb-2 ml-1">Hello, I'm</div>
            <h2 className="font-display font-bold text-[75px] leading-[0.9] text-white tracking-tighter">
              THOMAS AQUINAS<br/>RYAN WISNU ADI
            </h2>
            <div className="h-12 overflow-hidden mt-4 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="font-sans text-[#FF3300] font-bold text-lg uppercase tracking-widest"
                >
                  {roles[roleIndex]}
                </motion.h3>
              </AnimatePresence>
            </div>
            <p className="font-sans text-[#888888] text-base mt-4 max-w-[320px] leading-relaxed text-justify">
              I engineer digital experiences that blend immaculate code with high-end editorial design. Passionate about clean architecture and smooth interactions.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#888888] mt-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-pulse" />
                Based in Yogyakarta
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span>Scroll to explore</span>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <ArrowDown size={14} />
              </motion.div>
            </div>
          </motion.div>

          {/* Center Avatar */}
          <motion.div 
            className="relative h-[80vh] w-full max-w-[500px] mx-auto z-10 flex items-end justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yAvatar }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10 h-32 bottom-0 top-auto" />
            <img 
              src={`${import.meta.env.BASE_URL}avatar.png`} 
              alt="Thomas Aquinas Ryan Wisnu Adi" 
              className="w-full h-full object-cover object-bottom filter grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Right Stats */}
          <motion.div 
            className="flex flex-col items-end text-right z-20 pb-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-16 max-w-[200px]">
              <div className="w-10 h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#FF3300]" />
              </div>
              <p className="font-sans text-[#888888] text-sm text-left leading-relaxed">
                Turning ideas into powerful digital experiences.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              {[
                { value: "3+", label: "Years\nExperience" },
                { value: "5+", label: "Projects\nCompleted" },
                { value: "Local", label: "Community\nClients" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-row gap-4 items-center justify-end">
                  <span className="font-display font-bold text-5xl text-[#FF3300]">{stat.value}</span>
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest text-left leading-tight w-20 whitespace-pre-line">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
