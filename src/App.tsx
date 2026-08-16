import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import HeroChapter from './components/chapters/HeroChapter';
import OriginChapter from './components/chapters/OriginChapter';
import ArsenalChapter from './components/chapters/ArsenalChapter';
import CraftChapter from './components/chapters/CraftChapter';
import JourneyChapter from './components/chapters/JourneyChapter';
import CertificatesChapter from './components/chapters/CertificatesChapter';
import NextChapter from './components/chapters/NextChapter';
import Footer from './components/Footer';

import MobileBottomDock from './components/MobileBottomDock';

function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      // Lenis Smooth Scroll Setup (Desktop Only for 120 FPS performance)
      lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis scroll warning:', err);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#000000] text-white font-sans min-h-screen selection:bg-[#FF3300] selection:text-white relative z-0">
      <GlobalBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroChapter />
        <OriginChapter />
        <ArsenalChapter />
        <CraftChapter />
        <JourneyChapter />
        <CertificatesChapter />
        <NextChapter />
      </main>
      <Footer />
      <MobileBottomDock />
    </div>
  );
}

export default App;
