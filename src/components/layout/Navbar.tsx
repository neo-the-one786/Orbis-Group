'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, BRAND } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect dark background sections under the navbar
  useEffect(() => {
    const checkBackground = () => {
      if (!navRef.current) return;

      const navRect = navRef.current.getBoundingClientRect();
      const navMidY = navRect.top + navRect.height / 2;
      const navMidX = navRect.left + navRect.width / 2;

      // Sample the element directly below the navbar center
      const elementsBelow = document.elementsFromPoint(navMidX, navMidY);
      
      const darkSections = elementsBelow.some((el) => {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') return false;
        
        // Parse rgb values
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!match) return false;
        
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
        
        return luminance < 80; // Dark background
      });

      setIsOverDark(darkSections);
    };

    checkBackground();
    window.addEventListener('scroll', checkBackground, { passive: true });
    return () => window.removeEventListener('scroll', checkBackground);
  }, [pathname]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // Determine text color: 
  // - Not scrolled → always ivory (hero is dark)
  // - Scrolled & over dark section → ivory text, dark bg with transparency
  // - Scrolled & over light section → charcoal text, ivory bg
  const isDark = !isScrolled || isOverDark;

  return (
    <>
      <motion.header
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${
          isScrolled
            ? isOverDark
              ? 'bg-charcoal/80 backdrop-blur-md border-b border-ivory/10'
              : 'bg-ivory/95 backdrop-blur-md border-b border-border/50 shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-luxury flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span
              className={`text-xl md:text-2xl tracking-[0.15em] uppercase transition-colors duration-500 ${
                isDark ? 'text-ivory' : 'text-charcoal'
              }`}
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`animated-underline text-sm tracking-[0.1em] uppercase transition-colors duration-500 ${
                  pathname === link.href ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                } ${isDark ? 'text-ivory' : 'text-charcoal'}`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/collaborations#inquiry"
              className={`btn-luxury text-xs py-3 px-6 ${
                isDark
                  ? 'bg-ivory/10 text-ivory border border-ivory/30 hover:bg-ivory/20'
                  : 'bg-charcoal text-ivory hover:bg-royal-blue'
              } transition-all duration-500`}
            >
              <span>Book A Call</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <span
              className={`block w-6 h-px transition-all duration-500 ${
                isMobileOpen
                  ? 'rotate-45 translate-y-[3.5px] bg-ivory'
                  : isDark ? 'bg-ivory' : 'bg-charcoal'
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-500 ${
                isMobileOpen
                  ? '-rotate-45 -translate-y-[3.5px] bg-ivory'
                  : isDark ? 'bg-ivory' : 'bg-charcoal'
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-charcoal flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-3xl md:text-4xl tracking-[0.1em] uppercase transition-opacity ${
                      pathname === link.href ? 'text-ivory' : 'text-ivory/60 hover:text-ivory'
                    }`}
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/collaborations#inquiry"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-luxury btn-outline border-ivory/30 text-ivory mt-4 text-sm"
                >
                  <span>Book A Call</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
