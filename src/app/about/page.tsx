'use client';

import AboutHero from '@/components/sections/about/AboutHero';
import Manifesto from '@/components/sections/about/Manifesto';
import Timeline from '@/components/sections/about/Timeline';
import Principles from '@/components/sections/about/Principles';
import Values from '@/components/sections/about/Values';
import Team from '@/components/sections/about/Team';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Manifesto />
      <Timeline />
      <Principles />
      <Values />
      <Team />
    </>
  );
}
