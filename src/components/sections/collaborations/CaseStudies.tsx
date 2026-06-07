'use client';

import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

const ACCENT_COLORS = ['#1E3A8A', '#5D1A66', '#046A38'];

export default function CaseStudies() {
  return (
    <section className="section-padding bg-alabaster">
      <div className="container-luxury">
        <FadeIn className="mb-20">
          <p className="text-caption text-charcoal-light mb-4">Case Studies</p>
          <h2
            className="text-section text-charcoal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Work That Speaks
          </h2>
          <div className="divider-accent mt-8" />
        </FadeIn>

        <div className="space-y-24">
          {CASE_STUDIES.map((study, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Visual */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className="aspect-[4/5] relative overflow-hidden"
                  style={{
                    background: `linear-gradient(160deg, ${ACCENT_COLORS[i]}cc 0%, ${ACCENT_COLORS[i]}44 100%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-8xl text-white/10"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-7 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-caption text-charcoal-light mb-3">
                  {study.client} — {study.industry}
                </span>
                <h3
                  className="text-3xl md:text-4xl text-charcoal mb-8"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {study.title}
                </h3>

                <div className="space-y-6">
                  {[
                    { label: 'Challenge', text: study.challenge },
                    { label: 'Strategy', text: study.strategy },
                    { label: 'Execution', text: study.execution },
                    { label: 'Outcome', text: study.outcome },
                  ].map((section) => (
                    <div key={section.label}>
                      <h4 className="text-caption text-royal-blue mb-2">{section.label}</h4>
                      <p className="text-sm text-charcoal-light leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-border">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-2xl text-charcoal block" style={{ fontFamily: 'var(--font-serif)' }}>
                        {value}
                      </span>
                      <span className="text-caption text-charcoal-light mt-1 block capitalize">
                        {key}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
