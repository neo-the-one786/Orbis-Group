'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE_EVENTS } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section className="section-padding bg-alabaster overflow-hidden" ref={containerRef}>
      <div className="container-luxury">
        <FadeIn className="mb-16">
          <p className="text-caption text-charcoal-light mb-4">Our Journey</p>
          <h2
            className="text-section text-charcoal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The Story So Far
          </h2>
        </FadeIn>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border">
            <motion.div
              className="h-full bg-royal-blue origin-left"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Events */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {TIMELINE_EVENTS.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pt-0 md:pt-20"
              >
                {/* Node */}
                <div className="hidden md:block absolute top-[42px] left-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-ivory border-2 border-royal-blue" />
                </div>

                {/* Year */}
                <span
                  className="text-3xl md:text-2xl text-royal-blue block mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {event.year}
                </span>

                {/* Title */}
                <h3 className="text-lg text-charcoal font-medium mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
