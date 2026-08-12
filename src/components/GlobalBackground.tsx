import { useTheme } from '../context/ThemeContext';

export default function GlobalBackground() {
  const { theme } = useTheme();

  const isCyber = theme === 'cyber';

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

      {/* 1. Subtle Developer Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Top-left primary glow orb — changes dramatically with theme */}
      <div
        className="absolute -top-[20%] -left-[15%] w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] rounded-full pointer-events-none"
        style={{
          background: isCyber
            ? 'radial-gradient(circle, rgba(0,229,255,0.22) 0%, rgba(0,229,255,0.08) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,51,0,0.22) 0%, rgba(255,51,0,0.08) 40%, transparent 70%)',
          transition: 'background 0.8s ease',
        }}
      />

      {/* 3. Bottom-right secondary glow orb */}
      <div
        className="absolute -bottom-[20%] -right-[15%] w-[70vw] h-[70vw] sm:w-[55vw] sm:h-[55vw] rounded-full pointer-events-none"
        style={{
          background: isCyber
            ? 'radial-gradient(circle, rgba(0,255,102,0.15) 0%, rgba(0,229,255,0.05) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(255,51,0,0.05) 45%, transparent 70%)',
          transition: 'background 0.8s ease',
        }}
      />

      {/* 4. Center ambient top accent — very visible on mobile */}
      <div
        className="absolute top-0 left-0 right-0 h-[30vh] pointer-events-none"
        style={{
          background: isCyber
            ? 'linear-gradient(180deg, rgba(0,229,255,0.07) 0%, transparent 100%)'
            : 'linear-gradient(180deg, rgba(255,51,0,0.07) 0%, transparent 100%)',
          transition: 'background 0.8s ease',
        }}
      />

      {/* 5. Central Dimmer */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
