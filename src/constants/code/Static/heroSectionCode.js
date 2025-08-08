import code from '@content/Static/HeroSection/HeroSection.jsx?raw';
import css from '@content/Static/HeroSection/HeroSection.css?raw';

export const heroSection = {
  installation: `npm i react`,
  usage: `import HeroSection from './HeroSection';

// Basic usage
<HeroSection 
  title="Welcome to Our Platform"
  subtitle="Build amazing things with our tools"
  ctaText="Get Started"
/>

// With custom settings
<HeroSection 
  title="Custom Title"
  subtitle="Custom subtitle"
  ctaText="Learn More"
  backgroundImage={bgImage}
  alignment="center"
/>`,
  code,
  css
}
