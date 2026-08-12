import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 relative">
          {/* Left */}
          <div className="flex flex-col gap-1 text-[#888888] font-mono text-xs text-center sm:text-left order-2 sm:order-1">
            <span>© {new Date().getFullYear()} Thomas Aquinas Ryan Wisnu Adi.</span>
            <span>All rights reserved.</span>
          </div>

          {/* Center / Avatar Back to Top */}
          <div className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 order-1 sm:order-2">
            <motion.button
              onClick={scrollToTop}
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/10 p-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src={`${import.meta.env.BASE_URL}avatar.png`} 
                  alt="Back to top" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <span className="text-white font-mono text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Top</span>
                </div>
              </div>
            </motion.button>
          </div>

          {/* Right */}
          <div className="text-[#888888] font-mono text-xs text-center sm:text-right order-3">
            <span>Designed in Yogyakarta.</span><br/>
            <span>Built with React & Framer Motion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
