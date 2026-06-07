'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" data-theme="dark" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <FadeIn className="text-center mb-16">
          <p className="text-caption text-ivory/30 mb-4">Testimonials</p>
          <h2
            className="text-subsection text-ivory"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Words From Our Partners
          </h2>
        </FadeIn>

        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Quote Mark */}
              <div
                className="text-8xl md:text-9xl text-ivory/5 leading-none mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote
                className="text-xl md:text-2xl lg:text-3xl text-ivory/80 leading-relaxed max-w-3xl mx-auto mb-10 -mt-16"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {TESTIMONIALS[current].quote}
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-ivory text-sm font-medium tracking-wider">
                  {TESTIMONIALS[current].author}
                </span>
                <span className="text-ivory/40 text-xs tracking-wider">
                  {TESTIMONIALS[current].role}, {TESTIMONIALS[current].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 ${
                i === current
                  ? 'w-8 h-1 bg-ivory/60'
                  : 'w-3 h-1 bg-ivory/15 hover:bg-ivory/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
