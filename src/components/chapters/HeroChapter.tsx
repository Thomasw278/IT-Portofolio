import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col justify-center px-6 overflow-hidden pt-20"
      id="hero"
    >
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 mt-10">
        <motion.div style={{ y: y1, opacity }} className="flex flex-col items-center">
          <h1 className="font-display font-bold text-[22vw] leading-[0.8] text-[#1a1a1a] tracking-tighter whitespace-nowrap">
            SOFTWARE
          </h1>
          <h1 className="font-display font-bold text-[22vw] leading-[0.8] text-[#1a1a1a] tracking-tighter whitespace-nowrap text-outline ml-[10vw]">
            CRAFTSMAN
          </h1>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full z-10 relative flex-1 flex flex-col justify-end pb-10 sm:pb-20">
        
        {/* Main Grid Layout matching the requested style */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-end relative h-full min-h-[60vh]">
          
          {/* Left Content */}
          <motion.div 
            className="flex flex-col z-20 order-2 lg:order-1 pb-10 lg:pb-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="font-serif italic text-4xl sm:text-5xl text-[#CCCCCC] mb-2 ml-1">
              Hello, I'm
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-[75px] leading-[0.9] text-white tracking-tighter">
              THOMAS AQUINAS<br/>RYAN WISNU ADI
            </h2>
            <h3 className="font-sans text-[#FF3300] font-bold text-lg md:text-xl mt-6 uppercase tracking-widest">
              Backend Developer &<br/>Database Enthusiast
            </h3>
            <p className="font-sans text-[#888888] text-sm md:text-base mt-6 max-w-[300px] leading-relaxed">
              I engineer digital experiences that blend immaculate code with high-end editorial design. Passionate about clean architecture and smooth interactions.
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#888888] mt-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-pulse" />
                Based in Yogyakarta
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-white/20" />
              <span className="hidden sm:inline-block">Scroll to explore</span>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <ArrowDown size={14} />
              </motion.div>
            </div>
          </motion.div>

          {/* Center Avatar Overlay */}
          <motion.div 
            className="relative h-[60vh] lg:h-[80vh] w-full max-w-[500px] mx-auto z-10 order-1 lg:order-2 flex items-end justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yAvatar }}
            data-cursor-hover
          >
            {/* Gradient mask at the bottom so the avatar blends seamlessly into the black background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10 h-32 bottom-0 top-auto" />
            <img 
              src="/avatar.png" 
              alt="Thomas Aquinas Ryan Wisnu Adi" 
              className="w-full h-full object-cover object-bottom filter grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Right Content / Stats */}
          <motion.div 
            className="flex flex-col items-start lg:items-end text-left lg:text-right z-20 order-3 pb-10 lg:pb-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-16 max-w-[200px]">
              <div className="w-10 h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-[#FF3300]" />
              </div>
              <p className="font-sans text-[#888888] text-sm text-left leading-relaxed">
                Turning ideas into powerful digital experiences.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex gap-4 items-center justify-start lg:justify-end">
                <span className="font-display font-bold text-5xl text-[#FF3300]">5+</span>
                <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest text-left leading-tight w-20">
                  Years<br/>Experience
                </span>
              </div>
              <div className="flex gap-4 items-center justify-start lg:justify-end">
                <span className="font-display font-bold text-5xl text-[#FF3300]">40+</span>
                <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest text-left leading-tight w-20">
                  Projects<br/>Completed
                </span>
              </div>
              <div className="flex gap-4 items-center justify-start lg:justify-end">
                <span className="font-display font-bold text-5xl text-[#FF3300]">20+</span>
                <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest text-left leading-tight w-20">
                  Happy<br/>Clients
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
