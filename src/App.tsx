import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import HeroChapter from './components/chapters/HeroChapter';
import OriginChapter from './components/chapters/OriginChapter';
import ArsenalChapter from './components/chapters/ArsenalChapter';
import CraftChapter from './components/chapters/CraftChapter';
import JourneyChapter from './components/chapters/JourneyChapter';
import NextChapter from './components/chapters/NextChapter';
import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simple preloader delay for effect
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-[#000000] text-white font-sans min-h-screen selection:bg-[#FF3300] selection:text-white relative z-0">
      <GlobalBackground />
      <CustomCursor />
      
      {/* Cinematic Preloader */}
      <div 
        className={`fixed inset-0 z-50 bg-[#000000] flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${showContent ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="overflow-hidden">
          <div className={`font-display font-bold text-4xl tracking-tighter transition-transform duration-700 delay-300 ${showContent ? 'translate-y-full' : 'translate-y-0'}`}>
            ARDAN<span className="text-[#FF3300]">.</span>
          </div>
        </div>
      </div>

      {showContent && (
        <>
          <Navbar />
          <main>
            <HeroChapter />
            <OriginChapter />
            <ArsenalChapter />
            <CraftChapter />
            <JourneyChapter />
            <NextChapter />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
