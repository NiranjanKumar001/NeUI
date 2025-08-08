import code from '@content/Carousel/ImageCarousel/ImageCarousel.jsx?raw';
import css from '@content/Carousel/ImageCarousel/ImageCarousel.css?raw';

export const imageCarousel = {
  installation: `npm i framer-motion`,
  usage: `import ImageCarousel from './ImageCarousel';

// Basic usage
<ImageCarousel images={imageArray} />

// With custom settings
<ImageCarousel 
  images={imageArray}
  autoPlay={true}
  autoPlayInterval={3000}
  showDots={true}
  showArrows={true}
/>`,
  code,
  css
}
