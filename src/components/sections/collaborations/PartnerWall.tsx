'use client';

import { motion } from 'framer-motion';
import { PARTNERS } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

export default function PartnerWall() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-luxury">
        <FadeIn className="mb-16 text-center">
          <p className="text-caption text-charcoal-light mb-4">Our Partners</p>
          <h2
            className="text-subsection text-charcoal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Trusted By Exceptional Brands
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group border border-border/50 py-10 md:py-14 px-6 flex items-center justify-center hover:bg-alabaster transition-colors duration-500"
            >
              <span
                className="text-base md:text-lg text-charcoal/30 group-hover:text-charcoal/70 transition-colors duration-500 text-center tracking-wider"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
