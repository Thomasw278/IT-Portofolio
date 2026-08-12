import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsDesktop(isFinePointer);
    if (!isFinePointer) return;

    let rAF: number;
    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [data-cursor-hover]');
      setIsHovering(!!isHoverable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
      style={{ willChange: 'transform' }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 800,
        damping: 45,
        mass: 0.1,
      }}
    />
  );
}
