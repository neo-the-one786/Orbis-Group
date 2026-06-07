'use client';

import Link from 'next/link';
import { BRAND, NAV_LINKS, BRAND_VALUES } from '@/lib/constants';
import FadeIn from '@/components/animation/FadeIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Newsletter Section */}
      <div className="container-luxury section-padding border-b border-white/10">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-caption text-ivory/40 mb-6">Stay Informed</p>
            <h3
              className="text-subsection text-ivory mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Receive curated updates on our latest experiences and collaborations.
            </h3>
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-white/20 py-4 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-ivory/60 transition-colors text-sm tracking-wider"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="btn-luxury bg-ivory/10 text-ivory border border-ivory/20 hover:bg-ivory hover:text-charcoal text-xs py-4 px-8 transition-all duration-500 whitespace-nowrap"
              >
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </FadeIn>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span
                className="text-xl tracking-[0.15em] uppercase text-ivory"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {BRAND.name}
              </span>
            </Link>
            <p className="text-ivory/40 text-sm mt-4 leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>
            <div className="flex gap-6 mt-8">
              {['Instagram', 'LinkedIn', 'X'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-ivory/30 text-xs tracking-[0.15em] uppercase hover:text-ivory transition-colors duration-300 animated-underline"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-caption text-ivory/30 mb-6">Navigate</p>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 hover:text-ivory transition-colors duration-300 text-sm animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div>
            <p className="text-caption text-ivory/30 mb-6">Values</p>
            <ul className="space-y-4">
              {BRAND_VALUES.map((value) => (
                <li key={value} className="text-ivory/40 text-sm">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-caption text-ivory/30 mb-6">Connect</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@orbisgroup.com"
                  className="animated-underline text-ivory/60 hover:text-ivory transition-colors"
                >
                  hello@orbisgroup.com
                </a>
              </li>
              <li>
                <Link
                  href="/collaborations#inquiry"
                  className="text-ivory/60 hover:text-ivory transition-colors duration-300 text-sm animated-underline"
                >
                  Book A Call
                </Link>
              </li>
              <li>
                <a
                  href={BRAND.eventPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/60 hover:text-ivory transition-colors duration-300 text-sm animated-underline"
                >
                  {BRAND.eventPlatformName} →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/25 text-xs tracking-wider">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-ivory/25 text-xs tracking-wider hover:text-ivory/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-ivory/25 text-xs tracking-wider hover:text-ivory/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
