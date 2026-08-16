import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Cpu, FolderGit2, Mail, Check, Copy, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const dockItems = [
  { id: 'hero', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: User },
  { id: 'tools', label: 'Tech', icon: Cpu },
  { id: 'projects', label: 'Work', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function MobileBottomDock() {
  const [activeTab, setActiveTab] = useState('hero');
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
    }
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('thomaswisnuadi1236@email.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#FF3300] text-white font-mono text-xs px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-white/20"
          >
            <Check size={14} />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Navigation Bar for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex justify-center pointer-events-auto">
        <div className="flex items-center justify-between w-full max-w-sm px-3 py-2 rounded-full bg-[#111111]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-colors ${isActive ? 'text-white' : 'text-[#888888]'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="dockPill"
                    className="absolute inset-0 bg-[#FF3300] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon size={18} />
                <span className="text-[9px] font-mono mt-0.5">{item.label}</span>
              </button>
            );
          })}

          <div className="h-5 w-px bg-white/10 mx-0.5" />

          {/* Theme Switcher Button — prominent pill with color glow */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center py-1 px-2 rounded-full transition-all active:scale-90"
            title={`Switch Background Theme: ${theme === 'crimson' ? 'Cyber Cyan' : 'Crimson Red'}`}
          >
            <div
              className="w-5 h-5 rounded-full mb-0.5 flex items-center justify-center shadow-lg"
              style={{
                background: theme === 'crimson' ? '#FF3300' : '#00E5FF',
                boxShadow: theme === 'crimson'
                  ? '0 0 8px rgba(255,51,0,0.8)'
                  : '0 0 8px rgba(0,229,255,0.8)',
                transition: 'background 0.4s ease, box-shadow 0.4s ease',
              }}
            >
              <Sparkles size={11} className="text-white" />
            </div>
            <span className="text-[9px] font-mono" style={{ color: theme === 'crimson' ? '#FF3300' : '#00E5FF' }}>
              {theme === 'crimson' ? 'Crimson' : 'Cyber'}
            </span>
          </button>

          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="flex flex-col items-center justify-center py-1 px-2 rounded-full text-[#888888] active:text-[#FF3300] transition-colors"
            title="Copy Email"
          >
            {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            <span className="text-[9px] font-mono mt-0.5">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </>
  );
}
