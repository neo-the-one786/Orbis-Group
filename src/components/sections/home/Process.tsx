'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

export default function Process() {
  return (
    <section id="process" className="section-padding bg-ivory">
      <div className="container-luxury">
        {/* Header */}
        <FadeIn className="mb-20 text-center">
          <p className="text-caption text-charcoal-light mb-4">Our Process</p>
          <h2
            className="text-section text-charcoal max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            From Vision to Impact
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex items-start gap-8 md:gap-16 mb-16 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-ivory border border-border flex items-center justify-center z-10"
                  whileInView={{ scale: [0.8, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                >
                  <span
                    className="text-sm text-royal-blue tracking-wider font-medium"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {step.number}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div
                className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4'
                }`}
              >
                <h3
                  className="text-2xl md:text-3xl text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {step.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
