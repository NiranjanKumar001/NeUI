import code from '@content/ScrollBased/ParallaxScroll/ParallaxScroll.jsx?raw';
import css from '@content/ScrollBased/ParallaxScroll/ParallaxScroll.css?raw';

export const parallaxScroll = {
  installation: `npm i framer-motion`,
  usage: `import ParallaxScroll from './ParallaxScroll';

// Basic usage
<ParallaxScroll>
  <div>Your content here</div>
</ParallaxScroll>

// With custom settings
<ParallaxScroll 
  speed={0.5}
  direction="vertical"
  offset={50}
>
  <div>Content with parallax effect</div>
</ParallaxScroll>`,
  code,
  css
}
