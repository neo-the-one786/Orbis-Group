'use client';

import { INDUSTRIES } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animation/StaggerChildren';

export default function Industries() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-luxury">
        <FadeIn className="mb-16">
          <p className="text-caption text-charcoal-light mb-4">Sectors</p>
          <h2
            className="text-section text-charcoal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Industries We Serve
          </h2>
          <div className="divider-accent mt-8" />
        </FadeIn>

        <StaggerChildren stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {INDUSTRIES.map((industry, i) => (
            <StaggerItem key={i}>
              <div className="group border border-border/50 p-10 hover:bg-alabaster transition-all duration-500 cursor-default">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-3xl text-charcoal/10 group-hover:text-royal-blue/30 transition-colors duration-500">
                    {industry.icon}
                  </span>
                  <span className="text-caption text-charcoal-light/40">
                    {industry.count} Projects
                  </span>
                </div>
                <h3
                  className="text-xl text-charcoal group-hover:text-royal-blue transition-colors duration-500"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {industry.name}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
