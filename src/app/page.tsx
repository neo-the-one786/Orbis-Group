'use client';

import Hero from '@/components/sections/home/Hero';
import FeaturedExperiences from '@/components/sections/home/FeaturedExperiences';
import WhoWeAre from '@/components/sections/home/WhoWeAre';
import Process from '@/components/sections/home/Process';
import SignatureCollaborations from '@/components/sections/home/SignatureCollaborations';
import Testimonials from '@/components/sections/home/Testimonials';
import FinalCTA from '@/components/sections/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiences />
      <WhoWeAre />
      <Process />
      <SignatureCollaborations />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
