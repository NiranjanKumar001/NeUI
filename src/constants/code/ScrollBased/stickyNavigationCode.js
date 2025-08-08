import code from '@content/ScrollBased/StickyNavigation/StickyNavigation.jsx?raw';
import css from '@content/ScrollBased/StickyNavigation/StickyNavigation.css?raw';

export const stickyNavigation = {
  installation: `npm i framer-motion`,
  usage: `import StickyNavigation from './StickyNavigation';

// Basic usage
<StickyNavigation menuItems={navItems} />

// With custom settings
<StickyNavigation 
  menuItems={navItems}
  logo={logoComponent}
  theme="dark"
  showBackground={true}
  offset={100}
/>`,
  code,
  css
}
