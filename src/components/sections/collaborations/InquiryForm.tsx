'use client';

import { useState } from 'react';
import FadeIn from '@/components/animation/FadeIn';

export default function InquiryForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 2: Connect to Resend + Supabase
  };

  const inputClass =
    'w-full bg-transparent border-b border-border py-4 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-royal-blue transition-colors duration-500 text-sm';

  return (
    <section id="inquiry" className="section-padding bg-charcoal">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <FadeIn direction="left">
            <p className="text-caption text-ivory/30 mb-6">Get In Touch</p>
            <h2
              className="text-section text-ivory mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let&rsquo;s Build Something Together
            </h2>
            <p className="text-large text-ivory/40 leading-relaxed mb-8">
              Tell us about your brand, your vision, and the experience you want to create. We will respond within 48 hours.
            </p>
            <div className="space-y-4">
              <p className="text-ivory/30 text-sm">
                <span className="text-ivory/50">Email:</span>{' '}
                <a href="mailto:hello@orbisgroup.com" className="animated-underline text-ivory/60 hover:text-ivory transition-colors">
                  hello@orbisgroup.com
                </a>
              </p>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="text-caption text-ivory/30 mb-2 block">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={`${inputClass} text-ivory border-ivory/15 placeholder:text-ivory/20 focus:border-ivory/50`}
                  placeholder="Full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-caption text-ivory/30 mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={`${inputClass} text-ivory border-ivory/15 placeholder:text-ivory/20 focus:border-ivory/50`}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="text-caption text-ivory/30 mb-2 block">
                  Company / Brand
                </label>
                <input
                  id="company"
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className={`${inputClass} text-ivory border-ivory/15 placeholder:text-ivory/20 focus:border-ivory/50`}
                  placeholder="Brand or organisation name"
                />
              </div>

              <div>
                <label htmlFor="budget" className="text-caption text-ivory/30 mb-2 block">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  className={`${inputClass} text-ivory border-ivory/15 bg-charcoal appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-charcoal">Select range</option>
                  <option value="under-25k" className="bg-charcoal">Under ₹25L</option>
                  <option value="25k-50k" className="bg-charcoal">₹25L – ₹50L</option>
                  <option value="50k-1cr" className="bg-charcoal">₹50L – ₹1Cr</option>
                  <option value="above-1cr" className="bg-charcoal">Above ₹1Cr</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-caption text-ivory/30 mb-2 block">
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className={`${inputClass} text-ivory border-ivory/15 placeholder:text-ivory/20 focus:border-ivory/50 resize-none`}
                  placeholder="Describe the experience you want to create..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-luxury bg-ivory text-charcoal hover:bg-white text-xs w-full sm:w-auto transition-all duration-500 mt-4"
              >
                <span>Send Inquiry</span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
