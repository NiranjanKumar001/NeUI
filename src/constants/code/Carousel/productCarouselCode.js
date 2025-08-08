import code from '@content/Carousel/ProductCarousel/ProductCarousel.jsx?raw';
import css from '@content/Carousel/ProductCarousel/ProductCarousel.css?raw';

export const productCarousel = {
  installation: `npm i framer-motion`,
  usage: `import ProductCarousel from './ProductCarousel';

// Basic usage
<ProductCarousel products={productArray} />

// With custom settings
<ProductCarousel 
  products={productArray}
  itemsPerView={3}
  spacing={20}
  autoPlay={false}
/>`,
  code,
  css
}
