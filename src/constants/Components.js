const backgrounds = {
  'boomparis': () => import("@demo/Backgrounds/BoomParisDemo"),
};

const carousel = {
  'image-carousel': () => import("@demo/Carousel/ImageCarouselDemo"),
  'product-carousel': () => import("@demo/Carousel/ProductCarouselDemo"),
  'testimonial-carousel': () => import("@demo/Carousel/TestimonialCarouselDemo"),
};

const scrollBased = {
  'parallax-scroll': () => import("@demo/ScrollBased/ParallaxScrollDemo"),
  'reveal-animation': () => import("@demo/ScrollBased/RevealAnimationDemo"),
  'sticky-navigation': () => import("@demo/ScrollBased/StickyNavigationDemo"),
};

const staticComponents = {
  'hero-section': () => import("@demo/Static/HeroSectionDemo"),
  'feature-grid': () => import("@demo/Static/FeatureGridDemo"),
  'pricing-table': () => import("@demo/Static/PricingTableDemo"),
};

export const componentMap = {
  ...backgrounds,
  ...carousel,
  ...scrollBased,
  ...staticComponents,
};
