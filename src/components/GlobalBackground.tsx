import { motion } from 'framer-motion';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      
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
        className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full blur-[80px] opacity-20 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, #FF3300 0%, transparent 70%)',
          willChange: 'transform'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[80px] opacity-15 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, #9333ea 0%, transparent 70%)',
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
