'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/animation/FadeIn';

export default function FinalCTA() {
  return (
    <section id="final-cta" data-theme="dark" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 silk-bg" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(10,10,20,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, rgba(93,26,102,0.3) 0%, transparent 70%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center py-32">
        <FadeIn>
          <p className="text-caption text-ivory/30 mb-8">Let&rsquo;s Create Together</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-ivory mb-8 max-w-4xl mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to create something unforgettable?
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-large text-ivory/40 max-w-lg mx-auto mb-12">
            We partner with brands that believe in the power of exceptional experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/collaborations#inquiry"
              className="btn-luxury bg-ivory text-charcoal hover:bg-white text-xs transition-all duration-500"
            >
              <span>Start A Conversation</span>
            </Link>
            <Link
              href="/about"
              className="btn-luxury bg-transparent text-ivory border border-ivory/20 hover:bg-ivory/10 text-xs transition-all duration-500"
            >
              <span>Learn About Us</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
