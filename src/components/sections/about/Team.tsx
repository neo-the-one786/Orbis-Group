'use client';

import { TEAM_MEMBERS } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animation/StaggerChildren';

export default function Team() {
  return (
    <section className="section-padding bg-alabaster">
      <div className="container-luxury">
        <FadeIn className="mb-16">
          <p className="text-caption text-charcoal-light mb-4">The People</p>
          <h2
            className="text-section text-charcoal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Team
          </h2>
          <div className="divider-accent mt-8" />
        </FadeIn>

        <StaggerChildren stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <StaggerItem key={i}>
              <div className="group">
                {/* Avatar Placeholder */}
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gradient-to-br from-charcoal/5 to-charcoal/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-5xl text-charcoal/10 group-hover:text-royal-blue/20 transition-colors duration-700"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {member.initial}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-royal-blue/0 group-hover:bg-royal-blue/5 transition-colors duration-500" />
                </div>

                {/* Info */}
                <h3
                  className="text-lg text-charcoal mb-1 group-hover:text-royal-blue transition-colors duration-500"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {member.name}
                </h3>
                <p className="text-sm text-charcoal-light">
                  {member.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
