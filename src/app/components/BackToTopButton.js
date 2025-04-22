'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';


export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-400 transition-all"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </motion.button>
  );
}
