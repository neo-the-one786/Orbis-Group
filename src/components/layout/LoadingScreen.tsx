'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-ivory"
              >
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" opacity="0.15" />
                <text
                  x="32"
                  y="36"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="18"
                  fontFamily="var(--font-serif)"
                  fontWeight="400"
                  letterSpacing="-0.02em"
                >
                  O
                </text>
              </svg>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1
                className="text-ivory text-xl tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Orbis Group
              </h1>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-px bg-white/10 overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-full bg-ivory/50"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
