import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function GlobalBackground() {
  const { theme } = useTheme();

  const orbColor1 = theme === 'cyber' ? '#00E5FF' : '#FF3300';
  const orbColor2 = theme === 'cyber' ? '#00FF66' : '#9333ea';

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-700">

      {/* 1. Subtle Developer Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Floating Aurora / Glow Orbs (Hardware-accelerated) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full blur-[90px] opacity-25 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${orbColor1} 0%, transparent 70%)`,
          willChange: 'transform'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[90px] opacity-20 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${orbColor2} 0%, transparent 70%)`,
          willChange: 'transform'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 3. Central Dimmer */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
