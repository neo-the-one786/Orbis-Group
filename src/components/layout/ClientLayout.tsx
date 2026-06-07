'use client';

import { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import ScrollProgress from '@/components/layout/ScrollProgress';
import GrainOverlay from '@/components/layout/GrainOverlay';
import SmoothScroll from '@/components/layout/SmoothScroll';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <ScrollProgress />
      <GrainOverlay />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
