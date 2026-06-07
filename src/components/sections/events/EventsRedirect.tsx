'use client';

import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

export default function EventsRedirect() {
  return (
    <section data-theme="dark" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 silk-bg" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,20,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle portal effect rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border border-ivory/5"
            style={{
              width: `${ring * 280}px`,
              height: `${ring * 280}px`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15 / ring, 0.25 / ring, 0.15 / ring],
            }}
            transition={{
              duration: 6 + ring * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: ring * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-narrow text-center py-32">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-caption text-ivory/40 mb-8"
        >
          Events
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl text-ivory mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
        >
          Your Experience Continues<br className="hidden md:block" /> With {BRAND.eventPlatformName}.
        </motion.h1>

        {/* Subheadline */}
        <FadeIn delay={0.5}>
          <p className="text-large text-ivory/40 max-w-xl mx-auto mb-4">
            Registration, ticketing, hosting, schedules, and event access are handled through our dedicated event platform.
          </p>
        </FadeIn>

        {/* Powered by */}
        <FadeIn delay={0.65}>
          <p className="text-xs text-ivory/20 tracking-[0.15em] uppercase mb-12">
            Powered by {BRAND.eventPlatformName}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary CTA */}
            <a
              href={BRAND.eventPlatformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-ivory text-charcoal hover:bg-white text-xs transition-all duration-500 group"
            >
              <span className="flex items-center gap-3">
                Open {BRAND.eventPlatformName}
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="/collaborations"
              className="btn-luxury bg-transparent text-ivory border border-ivory/20 hover:bg-ivory/10 text-xs transition-all duration-500"
            >
              <span>Learn About Our Partnerships</span>
            </a>
          </div>
        </FadeIn>

        {/* URL hint */}
        <FadeIn delay={1}>
          <p className="text-ivory/15 text-xs mt-12">
            Opens {BRAND.eventPlatformUrl}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
