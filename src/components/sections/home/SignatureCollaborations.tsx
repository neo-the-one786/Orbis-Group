'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLLABORATIONS_CATEGORIES } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

const GALLERY_ITEMS = [
  { title: 'Atelier Noir Collection', category: 'Fashion', color: '#1E3A8A' },
  { title: 'Meridian Wellness Retreat', category: 'Lifestyle', color: '#046A38' },
  { title: 'Quantum Conference', category: 'Technology', color: '#5D1A66' },
  { title: 'The Grand Ballroom', category: 'Hospitality', color: '#8B6914' },
  { title: 'Future Minds Summit', category: 'Education', color: '#1E3A8A' },
  { title: 'Silk & Stone Showcase', category: 'Fashion', color: '#5D1A66' },
  { title: 'Digital Horizons', category: 'Technology', color: '#046A38' },
  { title: 'Heritage Gala', category: 'Hospitality', color: '#8B6914' },
  { title: 'Culture Forward', category: 'Lifestyle', color: '#1E3A8A' },
];

export default function SignatureCollaborations() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', ...COLLABORATIONS_CATEGORIES];
  const filtered =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="signature" className="section-padding bg-alabaster">
      <div className="container-luxury">
        {/* Header */}
        <FadeIn className="mb-12">
          <p className="text-caption text-charcoal-light mb-4">Portfolio</p>
          <h2
            className="text-section text-charcoal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Signature Collaborations
          </h2>
          <div className="divider-accent mt-8" />
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs tracking-[0.1em] uppercase py-3 px-6 transition-all duration-500 ${
                  activeFilter === cat
                    ? 'bg-charcoal text-ivory'
                    : 'bg-transparent text-charcoal-light border border-border hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden cursor-pointer ${
                  i === 0 || i === 4 ? 'md:row-span-2 h-[500px] md:h-auto' : 'h-[300px]'
                }`}
              >
                {/* Color Background */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    background: `linear-gradient(160deg, ${item.color}dd 0%, ${item.color}55 100%)`,
                  }}
                />

                {/* Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="text-caption text-ivory/50 mb-2 block">
                      {item.category}
                    </span>
                    <h3
                      className="text-xl md:text-2xl text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
