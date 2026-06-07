'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
      initial={{ opacity: 0 }}
      animate={{ opacity: progress > 0.01 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
