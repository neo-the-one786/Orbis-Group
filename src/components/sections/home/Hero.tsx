'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { BRAND } from '@/lib/constants';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.003;
      const { width, height } = canvas;

      // Create luxurious flowing gradient
      ctx.clearRect(0, 0, width, height);

      // Base dark background
      ctx.fillStyle = '#0a0a14';
      ctx.fillRect(0, 0, width, height);

      // Flowing silk layers
      for (let i = 0; i < 4; i++) {
        const gradient = ctx.createRadialGradient(
          width * (0.3 + 0.4 * Math.sin(time + i * 1.5)),
          height * (0.3 + 0.4 * Math.cos(time * 0.7 + i * 2)),
          0,
          width * 0.5,
          height * 0.5,
          width * (0.5 + 0.2 * Math.sin(time * 0.5 + i))
        );

        const hues = [220, 250, 210, 270];
        gradient.addColorStop(0, `hsla(${hues[i]}, 60%, ${20 + 5 * Math.sin(time + i)}%, 0.15)`);
        gradient.addColorStop(0.5, `hsla(${hues[i]}, 40%, 12%, 0.08)`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Subtle light streaks
      for (let i = 0; i < 2; i++) {
        const x = width * (0.2 + 0.6 * Math.sin(time * 0.3 + i * 3));
        const y = height * (0.3 + 0.4 * Math.cos(time * 0.4 + i * 2));
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, width * 0.3);
        gradient.addColorStop(0, `hsla(220, 70%, 30%, ${0.04 + 0.02 * Math.sin(time + i)})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Faint particles
      for (let i = 0; i < 30; i++) {
        const px = (width * (0.1 + 0.8 * ((Math.sin(i * 7.3 + time * 0.2) + 1) / 2)));
        const py = (height * (0.1 + 0.8 * ((Math.cos(i * 5.7 + time * 0.15) + 1) / 2)));
        const size = 1 + Math.sin(i * 3.1 + time) * 0.5;
        const alpha = 0.1 + 0.08 * Math.sin(i * 2.3 + time * 0.5);

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 210, 240, ${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,20,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-caption text-ivory/40 mb-8"
        >
          Premium Experiential Marketing
        </motion.p>

        {/* Main Headline */}
        <h1
          className="text-hero text-ivory max-w-5xl mx-auto mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {['Experiences', 'Designed', 'Beautifully.'].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-large text-ivory/50 max-w-xl mx-auto mb-12"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Strategy, partnerships, and unforgettable brand activations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/collaborations"
            className="btn-luxury bg-ivory text-charcoal hover:bg-white text-xs transition-all duration-500"
          >
            <span>Explore Collaborations</span>
          </Link>
          <Link
            href="/events"
            className="btn-luxury bg-transparent text-ivory border border-ivory/30 hover:bg-ivory/10 text-xs transition-all duration-500"
          >
            <span>Register For Events →</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-ivory/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-ivory/10 relative overflow-hidden">
          <motion.div
            className="w-full h-4 bg-ivory/40"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
