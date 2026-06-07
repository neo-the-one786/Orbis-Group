'use client';

import { PRINCIPLES } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animation/StaggerChildren';

export default function Principles() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-luxury">
        <FadeIn className="mb-16">
          <p className="text-caption text-charcoal-light mb-4">What Guides Us</p>
          <h2
            className="text-section text-charcoal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Principles
          </h2>
          <div className="divider-accent mt-8" />
        </FadeIn>

        <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRINCIPLES.map((principle, i) => (
            <StaggerItem key={i}>
              <div className="group p-8 border border-border hover:border-royal-blue/30 transition-all duration-500 h-full">
                <span
                  className="text-6xl text-border group-hover:text-royal-blue/20 transition-colors duration-500 block mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-xl text-charcoal mb-4 group-hover:text-royal-blue transition-colors duration-500"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {principle.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
