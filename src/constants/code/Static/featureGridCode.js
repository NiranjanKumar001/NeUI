import code from '@content/Static/FeatureGrid/FeatureGrid.jsx?raw';
import css from '@content/Static/FeatureGrid/FeatureGrid.css?raw';

export const featureGrid = {
  installation: `npm i react`,
  usage: `import FeatureGrid from './FeatureGrid';

// Basic usage
<FeatureGrid features={featuresArray} />

// With custom settings
<FeatureGrid 
  features={featuresArray}
  columns={3}
  spacing="large"
  showIcons={true}
  theme="dark"
/>`,
  code,
  css
}
