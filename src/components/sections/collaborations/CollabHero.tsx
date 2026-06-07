'use client';

import { motion } from 'framer-motion';

export default function CollabHero() {
  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 30%, #5D1A66 60%, #1E3A8A 100%)',
          backgroundSize: '400% 400%',
          animation: 'silk 20s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 30%, rgba(10,10,20,0.8) 100%)',
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
          Collaborations
        </motion.p>
        <h1
          className="text-hero text-ivory max-w-5xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {['Built with', 'exceptional partners.'].map((line, i) => (
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
