'use client';

import CollabHero from '@/components/sections/collaborations/CollabHero';
import PartnerWall from '@/components/sections/collaborations/PartnerWall';
import CaseStudies from '@/components/sections/collaborations/CaseStudies';
import Industries from '@/components/sections/collaborations/Industries';
import InquiryForm from '@/components/sections/collaborations/InquiryForm';

export default function CollaborationsPage() {
  return (
    <>
      <CollabHero />
      <PartnerWall />
      <CaseStudies />
      <Industries />
      <InquiryForm />
    </>
  );
}
