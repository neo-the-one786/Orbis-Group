'use client';

import { motion } from 'framer-motion';
import { BRAND_VALUES } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

export default function Values() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-luxury text-center">
        <FadeIn>
          <p className="text-caption text-ivory/30 mb-6">Our Values</p>
        </FadeIn>

        <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6">
          {BRAND_VALUES.map((value, i) => (
            <motion.span
              key={value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl md:text-5xl lg:text-7xl text-ivory/15 hover:text-ivory/70 transition-colors duration-700 cursor-default"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {value}
              {i < BRAND_VALUES.length - 1 && (
                <span className="text-ivory/5 ml-6 md:ml-10">·</span>
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
