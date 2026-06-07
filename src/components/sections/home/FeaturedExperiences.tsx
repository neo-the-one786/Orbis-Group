'use client';

import { motion } from 'framer-motion';
import { FEATURED_EXPERIENCES } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animation/StaggerChildren';

export default function FeaturedExperiences() {
  return (
    <section id="featured" className="section-padding bg-ivory">
      <div className="container-luxury">
        {/* Section Header */}
        <FadeIn className="mb-20">
          <p className="text-caption text-charcoal-light mb-4">Selected Work</p>
          <h2
            className="text-section text-charcoal max-w-3xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Featured Experiences
          </h2>
          <div className="divider-accent mt-8" />
        </FadeIn>

        {/* Cards */}
        <StaggerChildren stagger={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_EXPERIENCES.map((exp, i) => (
            <StaggerItem key={i}>
              <motion.article
                className="card-luxury group bg-alabaster rounded-sm overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Placeholder */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${i === 0 ? '#1E3A8A' : i === 1 ? '#5D1A66' : '#046A38'} 0%, 
                        ${i === 0 ? '#16213e' : i === 1 ? '#2d0a33' : '#023d20'} 100%)`,
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500" />
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="text-caption text-ivory/70 bg-charcoal/30 backdrop-blur-sm px-4 py-2 rounded-sm">
                      {exp.category}
                    </span>
                  </div>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="text-2xl mb-3 text-charcoal group-hover:text-royal-blue transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-charcoal-light text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-charcoal-light/60 border-t border-border pt-4">
                    <span>{exp.industry}</span>
                    <span>{exp.scale}</span>
                  </div>
                  <div className="mt-3 text-right">
                    <span className="text-caption text-royal-blue font-medium">
                      {exp.impact}
                    </span>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
