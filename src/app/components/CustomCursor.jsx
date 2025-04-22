'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen width once on mount
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // adjust threshold if needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    let cursor;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    };

    if (isDesktop) {
      cursor = document.getElementById('custom-cursor');
      window.addEventListener('mousemove', moveCursor);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] bg-gradient-to-br from-pink-500 to-purple-500 mix-blend-difference shadow-lg transition-transform duration-75"
    ></div>
  );
}
