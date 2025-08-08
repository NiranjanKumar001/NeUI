import code from '@content/ScrollBased/RevealAnimation/RevealAnimation.jsx?raw';
import css from '@content/ScrollBased/RevealAnimation/RevealAnimation.css?raw';

export const revealAnimation = {
  installation: `npm i framer-motion`,
  usage: `import RevealAnimation from './RevealAnimation';

// Basic usage
<RevealAnimation>
  <div>Content to reveal</div>
</RevealAnimation>

// With custom settings
<RevealAnimation 
  direction="up"
  delay={0.2}
  duration={0.6}
  triggerOnce={true}
>
  <div>Animated content</div>
</RevealAnimation>`,
  code,
  css
}
