import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import './Boomparis.css';

gsap.registerPlugin(CustomEase);

const App = () => {
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const videoContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const logoRef = useRef(null);
  const animOutRefs = useRef([]);
  const animInRef = useRef(null);
  const headerSpansRef = useRef([]);
  const coordinateSpansRef = useRef([]);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const customEase = CustomEase.create("custom", ".87,0,.13,1");
    
    gsap.set(videoContainerRef.current, {
      scale: 0,
      rotation: -20,
    });
    
    const tl = gsap.timeline();
    
    tl.to(heroRef.current, {
      clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
      duration: 1.5,
      ease: customEase,
      delay: 1,
    });
    
    tl.to(heroRef.current, {
      clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
      duration: 2,
      ease: customEase,
      onStart: () => {
        gsap.to(progressBarRef.current, {
          width: "100vw",
          duration: 2,
          ease: customEase,
        });
        
        gsap.to(counterRef.current, {
          innerHTML: 100,
          duration: 2,
          ease: customEase,
          snap: { innerHTML: 1 },
        });
      }
    }, "+=0.5");
    
    tl.to(heroRef.current, {
      clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: customEase,
      onStart: () => {
        gsap.to(videoContainerRef.current, {
          scale: 1,
          rotation: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: customEase,
        });
        
        gsap.to(progressBarRef.current, {
          opacity: 0,
          duration: 0.3,
        });
        
        gsap.to(logoRef.current, {
          left: "0%",
          transform: "translateX(0%)",
          duration: 1.25,
          ease: customEase,
          onStart: () => {
            gsap.to(animOutRefs.current, {
              y: "200%",
              duration: 1,
              stagger: -0.075,
              ease: customEase,
            });
            
            gsap.to(animInRef.current, {
              x: "-1100%",
              duration: 1,
              ease: customEase,
              delay: 0.25,
            });
          }
        });
      }
    });
    
    tl.to([...headerSpansRef.current, ...coordinateSpansRef.current], {
      y: "0%",
      duration: 1,
      stagger: 0.0125,
      ease: customEase,
    }, "-=0.25");
    return () => tl.kill();
  }, []);

  return (
    <div className="app">
      <div className="hero" ref={heroRef}>
        <div className="progress-bar" ref={progressBarRef}>
          <p>loading</p>
          <p>/<span ref={counterRef}>0</span></p>
        </div>
        
        <div className="video-container" ref={videoContainerRef}>
          <video autoPlay loop muted playsInline>
            <source src="/new.mp4" type="video/mp4" />
          </video>
        </div>
        
        <nav>
          <p>&#9679;</p>
          <p>&#9679;</p>
        </nav>
        
        <footer>
          <p>work</p>
          <p>services</p>
          <p>about</p>
          <p>contact</p>
        </footer>
        
        <div className="header">
          <h1><span ref={el => headerSpansRef.current[0] = el}>FULL PRODUCTION</span></h1>
          <h1><span ref={el => headerSpansRef.current[1] = el}>SERVICES STUDIO</span></h1>
          <h1><span ref={el => headerSpansRef.current[2] = el}>BASED IN PARIS</span></h1>
          
          <div 
            className="text-container" 
            ref={textContainerRef}
          >
            <div className="sliding-text">
              <span className="play-icon">▶</span>
              PLAY THE 2025 REEL
              <span className="heart">❤</span>
            </div>
          </div>
        </div>
        
        <div className="coordinates">
          <p><span ref={el => coordinateSpansRef.current[0] = el}>37.6934°</span></p>
          <p><span ref={el => coordinateSpansRef.current[1] = el}>97.3382°</span></p>
        </div>
      </div>
      
      <div className="logo" ref={logoRef}>
        <div className="char"><h1>C</h1></div>
        <div className="char anim-out" ref={el => animOutRefs.current[0] = el}><h1>l</h1></div>
        <div className="char anim-out" ref={el => animOutRefs.current[1] = el}><h1>a</h1></div>
        <div className="char anim-out" ref={el => animOutRefs.current[2] = el}><h1>s</h1></div>
        <div className="char anim-out" ref={el => animOutRefs.current[3] = el}><h1>h</h1></div>
        <div className="char anim-out" ref={el => animOutRefs.current[4] = el}><h1>o</h1></div>
        <div className="char anim-out" ref={el => animOutRefs.current[5] = el}><h1>n</h1></div>
        <div className="char anim-in" ref={animInRef}><h1>.</h1></div>
      </div>
    </div>
  );
};

export default App;