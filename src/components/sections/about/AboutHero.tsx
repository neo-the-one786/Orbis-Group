'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 silk-bg" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,20,0.7) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-luxury pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-caption text-ivory/40 mb-6"
        >
          About Orbis Group
        </motion.p>
        <h1
          className="text-hero text-ivory max-w-5xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {['Experiences', 'move people.'].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
