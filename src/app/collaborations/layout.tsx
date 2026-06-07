import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaborations',
  description:
    'Explore Orbis Group\'s brand partnerships, case studies, and campaign outcomes across fashion, technology, hospitality, and lifestyle.',
};

export default function CollaborationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
