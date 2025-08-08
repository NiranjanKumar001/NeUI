import code from '@content/Static/PricingTable/PricingTable.jsx?raw';
import css from '@content/Static/PricingTable/PricingTable.css?raw';

export const pricingTable = {
  installation: `npm i react`,
  usage: `import PricingTable from './PricingTable';

// Basic usage
<PricingTable plans={pricingPlans} />

// With custom settings
<PricingTable 
  plans={pricingPlans}
  highlightPlan="pro"
  billing="monthly"
  showFeatures={true}
  theme="light"
/>`,
  code,
  css
}
