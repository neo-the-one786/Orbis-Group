'use client';

import FadeIn from '@/components/animation/FadeIn';

export default function Manifesto() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow text-center">
        <FadeIn>
          <p className="text-caption text-charcoal-light mb-8">Our Manifesto</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-snug mb-10"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            We believe the most powerful form of marketing is the one people choose to be part of.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="divider-accent mx-auto mb-10" />
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-large text-charcoal-light leading-relaxed max-w-2xl mx-auto mb-8">
            In a world saturated with messages, we create moments. Not advertisements — but experiences 
            that earn attention, build trust, and create lasting memory. We partner with brands that 
            understand: the future of marketing is not louder. It is more meaningful.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-body text-charcoal-light/60 leading-relaxed max-w-2xl mx-auto">
            Every collaboration begins with a question: what would make people genuinely grateful 
            they attended? That question guides everything we do — from concept to execution, 
            from the first invitation to the lasting impression.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
