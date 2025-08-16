import { useEffect, useState } from "react";

import Hero from "../components/landing/Hero/Hero";

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className="landing-wrapper">
      <title>NotDecided - Animated UI Components For React</title>

      {isMobile && (
        <div className="mobile-hero-background-container">
          {/* <img
            src={heroImage}
            alt="Hero background"
            className="mobile-hero-background-image"
          /> */}
        </div>
      )}
      <Hero />

    </section>
  );
};

export default LandingPage;
