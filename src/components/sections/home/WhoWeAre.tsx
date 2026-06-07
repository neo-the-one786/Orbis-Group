'use client';

import { METRICS, BRAND } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';
import CountUp from '@/components/animation/CountUp';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section-padding bg-alabaster">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Philosophy */}
          <FadeIn direction="left">
            <p className="text-caption text-charcoal-light mb-6">Who We Are</p>
            <h2
              className="text-section text-charcoal mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              We create demand.{' '}
              <span className="text-royal-blue">We build visibility.</span>
            </h2>
            <div className="divider-accent mb-8" />
            <p className="text-large text-charcoal-light leading-relaxed mb-6">
              {BRAND.description}
            </p>
            <p className="text-body text-charcoal-light/70 leading-relaxed">
              {BRAND.positioning}
            </p>
          </FadeIn>

          {/* Right — Metrics */}
          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-1 gap-0">
              {METRICS.map((metric, i) => (
                <div
                  key={i}
                  className={`py-10 ${
                    i < METRICS.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <CountUp
                      end={metric.value}
                      suffix={metric.suffix}
                      className="text-6xl md:text-7xl lg:text-8xl text-charcoal"
                      duration={2500}
                    />
                  </div>
                  <p className="text-caption text-charcoal-light mt-3">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
