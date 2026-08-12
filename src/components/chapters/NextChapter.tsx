import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Briefcase, Terminal, MapPin } from 'lucide-react';

export default function NextChapter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  
  // Creates a slight parallax "curtain" effect
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  return (
    <section ref={ref} id="contact" className="relative py-32 px-6 max-w-[1200px] mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div style={{ y }} className="w-full h-full flex flex-col justify-center">
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">05 // Contact</span>
        </div>

        <motion.h2 
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's build<br />
          <span className="font-serif italic font-normal text-[#FF3300]">something that</span><br />
          matters.
        </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-[#888888] font-sans max-w-md">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="mailto:thomaswisnuadi1236@email.com" className="group flex items-center justify-between border-b border-white/10 pb-4" data-cursor-hover>
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Mail className="w-4 h-4" /> Email
            </span>
            <span className="font-display text-xl sm:text-2xl group-hover:text-[#FF3300] transition-colors">thomaswisnuadi1236@email.com</span>
          </a>
          <a href="https://www.linkedin.com/in/thomas-wisnu/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-white/10 pb-4" data-cursor-hover>
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Briefcase className="w-4 h-4" /> LinkedIn
            </span>
            <span className="font-display text-xl sm:text-2xl group-hover:text-[#FF3300] transition-colors">in/thomas-wisnu</span>
          </a>
          <a href="https://github.com/Thomasw278" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-white/10 pb-4" data-cursor-hover>
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Terminal className="w-4 h-4" /> GitHub
            </span>
            <span className="font-display text-xl sm:text-2xl group-hover:text-[#FF3300] transition-colors">@Thomasw278</span>
          </a>
          <div className="flex items-center justify-between pt-4">
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <MapPin className="w-4 h-4" /> Location
            </span>
            <span className="font-display text-xl sm:text-2xl text-white">Yogyakarta, ID</span>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
