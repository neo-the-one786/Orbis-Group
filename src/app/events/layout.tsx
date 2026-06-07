import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Access WeMonkey, the dedicated event platform by Orbis Group, for registration, tickets, hosting, and scheduling.',
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
