'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  as: Tag = 'h2',
}: TextRevealProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
      aria-label={text}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <motion.span variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
