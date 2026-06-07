// ============================================================
// Orbis Group — Brand Constants & Content
// ============================================================

export const BRAND = {
  name: 'Orbis Group',
  nameShort: 'Orbis',
  tagline: 'Experiences Designed Beautifully.',
  description:
    'Orbis Group is a premium experiential marketing and partnership company that creates memorable experiences through collaboration, culture, and exceptional execution. We work with brands, organisations, creators, institutions, and communities to transform ideas into experiences.',
  positioning: 'We turn audiences into communities and events into culture.',
  url: 'https://orbisgroup.com',
  eventPlatformName: 'WeMonkey',
  eventPlatformUrl: 'https://wemonkey.com',
  email: 'hello@orbisgroup.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Events', href: '/events' },
] as const;

export const BRAND_VALUES = [
  'Experience',
  'Beauty',
  'Connection',
  'Precision',
  'Culture',
  'Excellence',
] as const;

export const METRICS = [
  { value: 120, suffix: '+', label: 'Experiences Crafted' },
  { value: 50, suffix: '+', label: 'Brand Partners' },
  { value: 1, suffix: 'M+', label: 'Audience Reach' },
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Concept',
    description:
      'Every great experience begins with a vision. We listen, research, and distill your ambition into a creative concept that resonates.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We architect the blueprint — audience mapping, channel selection, partnership alignment, and campaign frameworks designed to move people.',
  },
  {
    number: '03',
    title: 'Activation',
    description:
      'From digital campaigns to physical environments, we bring the strategy to life through meticulous execution and creative production.',
  },
  {
    number: '04',
    title: 'Experience',
    description:
      'The moment arrives. Audiences gather. Communities form. We orchestrate every detail so the experience feels effortless and unforgettable.',
  },
  {
    number: '05',
    title: 'Impact',
    description:
      'We measure what matters — reach, engagement, sentiment, and lasting brand equity. Every experience creates ripples that extend far beyond the event.',
  },
] as const;

export const FEATURED_EXPERIENCES = [
  {
    title: 'The Gilded Series',
    industry: 'Fashion & Luxury',
    scale: '5,000+ Attendees',
    impact: '12M Impressions',
    category: 'Fashion',
    description: 'An immersive fashion showcase that redefined luxury presentation in South Asia.',
  },
  {
    title: 'Horizon Summit',
    industry: 'Technology',
    scale: '3,200+ Attendees',
    impact: '8.5M Impressions',
    category: 'Technology',
    description: 'A three-day convergence of visionary minds shaping the future of digital experience.',
  },
  {
    title: 'Maison Collective',
    industry: 'Lifestyle & Hospitality',
    scale: '2,800+ Guests',
    impact: '6M Impressions',
    category: 'Lifestyle',
    description: 'An elevated lifestyle experience blending culinary arts, design, and cultural curation.',
  },
] as const;

export const COLLABORATIONS_CATEGORIES = [
  'Fashion',
  'Lifestyle',
  'Technology',
  'Hospitality',
  'Education',
] as const;

export const CASE_STUDIES = [
  {
    title: 'The Grand Atelier',
    client: 'Maison Élégance',
    industry: 'Fashion',
    challenge: 'Launch a heritage fashion house into the contemporary digital landscape while preserving brand mystique.',
    strategy: 'Created an invitation-only experiential series blending physical installations with digital storytelling across curated channels.',
    execution: 'Produced a three-city tour with immersive pop-up ateliers, exclusive content partnerships, and influencer-led discovery moments.',
    outcome: '15M impressions, 340% increase in brand search volume, 12 new wholesale partnerships secured.',
    metrics: { impressions: '15M', growth: '340%', partnerships: 12 },
  },
  {
    title: 'Circuit Unbound',
    client: 'NexGen Labs',
    industry: 'Technology',
    challenge: 'Position an emerging tech brand as a thought leader within a saturated market of incumbent players.',
    strategy: 'Developed an annual summit format that paired cutting-edge product reveals with cultural programming and community building.',
    execution: 'Delivered a 48-hour immersive summit featuring keynotes, workshops, live demos, and curated networking dinners.',
    outcome: '8.5M reach, 92% attendee satisfaction, featured in 45+ publications, 20% pipeline conversion.',
    metrics: { reach: '8.5M', satisfaction: '92%', publications: '45+' },
  },
  {
    title: 'Terroir & Table',
    client: 'The Collective Kitchen',
    industry: 'Hospitality',
    challenge: 'Elevate a regional culinary brand to national recognition through experiential storytelling.',
    strategy: 'Designed a seasonal experience series connecting food, art, and place — each event rooted in a distinct cultural narrative.',
    execution: 'Curated four seasonal events across landmark venues, featuring guest chefs, local artisans, and immersive dining theatre.',
    outcome: '6M impressions, 200% social following growth, national press coverage, sold-out series.',
    metrics: { impressions: '6M', growth: '200%', status: 'Sold Out' },
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'Orbis Group transformed our brand presence entirely. The experience they created wasn\'t just an event — it was a cultural moment that people still reference.',
    author: 'Arjun Mehta',
    role: 'Chief Marketing Officer',
    company: 'Maison Élégance',
  },
  {
    quote: 'Working with Orbis Group felt like collaborating with a luxury atelier. Every detail was considered, every moment was intentional. The results spoke for themselves.',
    author: 'Priya Sharma',
    role: 'Head of Brand Partnerships',
    company: 'NexGen Labs',
  },
  {
    quote: 'They don\'t just plan experiences — they architect emotions. Our audience left not as attendees, but as advocates.',
    author: 'David Chen',
    role: 'Founder & Creative Director',
    company: 'The Collective Kitchen',
  },
] as const;

export const PARTNERS = [
  'Maison Élégance',
  'NexGen Labs',
  'The Collective Kitchen',
  'Atelier Noir',
  'Vanguard Studios',
  'Meridian Group',
  'The Culture Foundry',
  'Silk & Stone',
  'Prestige Holdings',
  'Luminary Ventures',
  'Heritage House',
  'The Modern Guild',
] as const;

export const INDUSTRIES = [
  { name: 'Fashion & Luxury', count: 28, icon: '◆' },
  { name: 'Technology', count: 22, icon: '⬡' },
  { name: 'Hospitality', count: 18, icon: '◇' },
  { name: 'Lifestyle', count: 15, icon: '○' },
  { name: 'Education', count: 12, icon: '△' },
  { name: 'Culture & Arts', count: 9, icon: '□' },
] as const;

export const TIMELINE_EVENTS = [
  { year: '2019', title: 'Founded', description: 'Orbis Group was born from a conviction that experiences should be as considered as the brands behind them.' },
  { year: '2020', title: 'Digital Pivot', description: 'Pioneered hybrid experience formats, proving that digital-first doesn\'t mean experience-last.' },
  { year: '2021', title: 'First 50', description: 'Reached 50 brand partnerships and established our reputation for luxury experiential marketing.' },
  { year: '2022', title: 'National Reach', description: 'Expanded operations across 8 cities, bringing our approach to new audiences and markets.' },
  { year: '2023', title: 'The Culture Shift', description: 'Launched our signature "Culture Series" — experiences designed to become part of the cultural conversation.' },
  { year: '2024', title: '1M+ Reached', description: 'Surpassed one million audience members across all experiences, cementing our position as a market leader.' },
] as const;

export const PRINCIPLES = [
  {
    title: 'Precision',
    description: 'Every detail is deliberate. From the first touchpoint to the lasting impression, we engineer experiences with surgical care.',
  },
  {
    title: 'Beauty',
    description: 'Aesthetics are not superficial — they are strategic. Beautiful experiences command attention and earn trust.',
  },
  {
    title: 'Connection',
    description: 'We build bridges between brands and audiences, transforming transactions into relationships and attendance into belonging.',
  },
  {
    title: 'Culture',
    description: 'The best experiences don\'t just happen — they become part of the conversation. We create moments that transcend the moment.',
  },
] as const;

export const TEAM_MEMBERS = [
  { name: 'Anika Rao', role: 'Founder & Creative Director', initial: 'AR' },
  { name: 'Marcus Webb', role: 'Head of Strategy', initial: 'MW' },
  { name: 'Zara Patel', role: 'Director of Partnerships', initial: 'ZP' },
  { name: 'James Okafor', role: 'Head of Production', initial: 'JO' },
  { name: 'Leila Kim', role: 'Brand Director', initial: 'LK' },
  { name: 'Rohan Desai', role: 'Head of Digital', initial: 'RD' },
] as const;
