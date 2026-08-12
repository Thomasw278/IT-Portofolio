import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Magnetic from './Magnetic';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Tech', id: 'tools' },
  { name: 'Experiments', id: 'projects' },
  { name: 'Career', id: 'career' }
];

function MagneticButton({ children, className = '', onClick }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${className}`}
      data-cursor-hover
    >
      {children}
    </motion.button>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Better scroll spy using getBoundingClientRect
      let currentActiveId = '';
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is currently in view (middle of screen)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActiveId = item.id;
            break;
          }
        }
      }
      if (currentActiveId) setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/5">
        <Magnetic strength={0.2}>
          <div 
            className="font-display font-bold text-xl tracking-tight text-white cursor-pointer px-4"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-cursor-hover
          >
            Thomas Aquinas Ryan Wisnu Adi
          </div>
        </Magnetic>

        <div className="hidden md:flex items-center gap-1 border-l border-white/10 pl-4">
          {navItems.map((item) => (
            <MagneticButton
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={activeId === item.id ? 'text-black' : 'text-[#888888] hover:text-white'}
            >
              {activeId === item.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </MagneticButton>
          ))}
        </div>

        <Magnetic strength={0.4}>
          <a 
            href="mailto:thomaswisnuadi1236@email.com"
            className="hidden md:inline-block bg-[#FF3300] text-white px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors ml-4"
            data-cursor-hover
          >
            Let's Talk
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
