import code from '@content/Carousel/TestimonialCarousel/TestimonialCarousel.jsx?raw';
import css from '@content/Carousel/TestimonialCarousel/TestimonialCarousel.css?raw';

export const testimonialCarousel = {
  installation: `npm i framer-motion`,
  usage: `import TestimonialCarousel from './TestimonialCarousel';

// Basic usage
<TestimonialCarousel testimonials={testimonialsArray} />

// With custom settings
<TestimonialCarousel 
  testimonials={testimonialsArray}
  autoPlay={true}
  showAvatar={true}
  centerMode={true}
/>`,
  code,
  css
}
