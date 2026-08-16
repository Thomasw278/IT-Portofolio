import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Tech', id: 'tools' },
  { name: 'Experiments', id: 'projects' },
  { name: 'Career', id: 'career' },
  { name: 'Certs', id: 'certificates' }
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = '';
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActiveId = item.id;
            break;
          }
        }
      }
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 px-6 py-6 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.3}>
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              className="font-display font-bold text-xl tracking-tighter text-white hover:opacity-80 transition-opacity"
              data-cursor-hover
            >
              <span className="hidden sm:inline">THOMAS AQUINAS RYAN WISNU ADI</span>
              <span className="sm:hidden">THOMAS WISNU</span>
              <span className="text-[#FF3300]">.</span>
            </a>
          </Magnetic>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-[#111111]/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <MagneticButton
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={activeId === item.id ? 'text-white' : 'text-white/60 hover:text-white'}
              >
                {activeId === item.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#FF3300] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </MagneticButton>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Background Atmosphere Theme Switcher Button */}
            <Magnetic strength={0.3}>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111]/80 border border-white/10 text-white hover:border-[#FF3300]/40 backdrop-blur-md transition-all shadow-xl active:scale-90"
                title={`Switch Background Theme: ${theme === 'crimson' ? 'Cyber Cyan Glow' : 'Crimson Red Glow'}`}
                aria-label="Toggle Background Theme"
                data-cursor-hover
              >
                <motion.div
                  key={theme}
                  initial={{ scale: 0.8, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1.5"
                >
                  <Sparkles size={14} className={theme === 'crimson' ? 'text-[#FF3300]' : 'text-[#00E5FF]'} />
                  <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest hidden sm:inline">
                    {theme === 'crimson' ? 'Crimson' : 'Cyber'}
                  </span>
                </motion.div>
              </button>
            </Magnetic>

            {/* Desktop Contact CTA */}
            <Magnetic strength={0.4}>
              <a 
                href="https://www.linkedin.com/in/thomas-wisnu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block bg-[#FF3300] text-white px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors"
                data-cursor-hover
              >
                Let's Talk
              </a>
            </Magnetic>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white rounded-full focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Modal / Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center w-full max-w-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-2xl font-display font-bold py-2 border-b border-white/5 transition-colors ${
                    activeId === item.id ? 'text-[#FF3300]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Theme Switcher inside Mobile Drawer */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 border border-white/10 font-mono text-xs text-white uppercase tracking-widest"
              >
                <Sparkles size={16} className={theme === 'crimson' ? 'text-[#FF3300]' : 'text-[#00E5FF]'} />
                <span>{theme === 'crimson' ? 'Switch to Cyber Cyan' : 'Switch to Crimson Red'}</span>
              </button>

              <a
                href="https://www.linkedin.com/in/thomas-wisnu/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 bg-[#FF3300] text-white py-3 rounded-full font-mono text-sm uppercase tracking-widest font-semibold text-center hover:bg-white hover:text-black transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
