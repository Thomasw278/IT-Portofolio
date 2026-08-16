import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Briefcase, Terminal, MapPin, Copy, Check } from 'lucide-react';

export default function NextChapter() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('thomaswisnuadi1236@email.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Creates a slight parallax "curtain" effect
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  return (
    <section ref={ref} id="contact" className="relative py-16 sm:py-32 px-4 sm:px-6 max-w-[1200px] mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div style={{ y }} className="w-full h-full flex flex-col justify-center">
        <div className="mb-6 sm:mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">06 // Contact</span>
        </div>

        <motion.h2 
          className="font-display text-3xl sm:text-7xl md:text-8xl font-bold leading-[1.0] sm:leading-[0.9] tracking-tighter mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's build<br />
          <span className="font-serif italic font-normal text-[#FF3300]">something that</span><br />
          matters.
        </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 border-t border-white/10 pt-8 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-base sm:text-xl text-[#888888] font-sans max-w-md mb-6 text-justify">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF3300] font-mono text-xs text-white hover:text-[#FF3300] transition-all shadow-lg active:scale-95"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 sm:gap-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="mailto:thomaswisnuadi1236@email.com" className="group flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-1" data-cursor-hover>
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Mail className="w-4 h-4 text-[#FF3300]" /> Email
            </span>
            <span className="font-display text-sm xs:text-base sm:text-2xl group-hover:text-[#FF3300] transition-colors break-all sm:break-normal">thomaswisnuadi1236@email.com</span>
          </a>
          <a href="https://www.linkedin.com/in/thomas-wisnu/" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-1" data-cursor-hover>
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Briefcase className="w-4 h-4 text-[#FF3300]" /> LinkedIn
            </span>
            <span className="font-display text-sm xs:text-base sm:text-2xl group-hover:text-[#FF3300] transition-colors">in/thomas-wisnu</span>
          </a>
          <a href="https://github.com/Thomasw278" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-1" data-cursor-hover>
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Terminal className="w-4 h-4 text-[#FF3300]" /> GitHub
            </span>
            <span className="font-display text-sm xs:text-base sm:text-2xl group-hover:text-[#FF3300] transition-colors">@Thomasw278</span>
          </a>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-1">
            <span className="flex items-center gap-3 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <MapPin className="w-4 h-4 text-[#FF3300]" /> Location
            </span>
            <span className="font-display text-sm xs:text-base sm:text-2xl text-white">Yogyakarta, ID</span>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
