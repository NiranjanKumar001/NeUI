import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './Rejouice.css';

gsap.registerPlugin(ScrollTrigger);

function Rejouice() {
  const mainRef = useRef(null);
  const locoScrollRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderTextRef = useRef(null);
  const titleRef = useRef(null);
  const videoPageRef = useRef(null);
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 1024;
      setIsMobile(isMobileDevice);
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const breakText = (element, spacing) => {
      if (!element) return;
      const text = element.textContent;
      const splitText = text.split(spacing);
      const clutter = splitText.map(char => `<span>${char}</span>`).join('');
      element.innerHTML = clutter;
    };

    if (loaderTextRef.current) {
      breakText(loaderTextRef.current, ' ');
    }
    if (titleRef.current) {
      breakText(titleRef.current, '');
    }

    const loadingAnimation = () => {
      const tl = gsap.timeline();
      
      tl.to(".loader h3 span", {
        opacity: 1,
        duration: 1,
        stagger: 0.3
      })
      .to(".loader h3", {
        opacity: 0,
        duration: 0.5,
      })
      .to(".loader", {
        y: "100%",
        display: "none",
        duration: 1,
        ease: "expo.out",
      })
      .from(".title-name h1 span", {
        y: "-100%",
        duration: 1.5,
        stagger: 0.05,
        ease: "expo.out",
      }, "<");
    };

    const initLocomotiveScroll = () => {
      locoScrollRef.current = new LocomotiveScroll({
        el: mainRef.current,
        smooth: true
      });

      locoScrollRef.current.on("scroll", ScrollTrigger.update);
      
      ScrollTrigger.scrollerProxy(mainRef.current, {
        scrollTop(value) {
          return arguments.length 
            ? locoScrollRef.current.scrollTo(value, 0, 0) 
            : locoScrollRef.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: mainRef.current.style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.addEventListener("refresh", () => locoScrollRef.current.update());
      ScrollTrigger.refresh();
    };

    const initNavigationAnimations = () => {
      const smallLine = (hoverItem, hoverUnderline) => {
        const item = document.querySelector(hoverItem);
        const underline = document.querySelector(hoverUnderline);
        
        if (item && underline) {
          item.addEventListener("mouseenter", () => {
            gsap.to(underline, {
              x: 0,
              duration: 0.5,
              ease: "expo.out"
            });
          });
          
          item.addEventListener("mouseleave", () => {
            gsap.to(underline, {
              x: "100%",
              duration: 0.5,
              ease: "expo.out",
              onComplete: () => {
                gsap.set(".homeline", { x: "-100%" });
              }
            });
          });
        }
      };

      const arrowAnimation = (firstArrow, word, secondArrow, wordDisplacement) => {
        const talk = document.querySelector(word);
        const first = document.querySelector(firstArrow);
        const second = document.querySelector(secondArrow);
        
        if (talk && first && second) {
          talk.addEventListener("mouseenter", () => {
            gsap.to(first, {
              x: 0,
              y: "-100%"
            });
            gsap.to(word, {
              x: 0,
            });
            gsap.to(second, {
              x: 0,
              y: 0
            });
          });
          
          talk.addEventListener("mouseleave", () => {
            gsap.to(second, {
              x: "-100%",
              y: "100%"
            });
            gsap.to(word, {
              x: `${wordDisplacement}%`,
            });
            gsap.to(first, {
              x: "-100%",
              y: 0
            });
          });
        }
      };

      smallLine("#home", "#homeline");
      smallLine("#work", "#wordline"); 
      smallLine("#about", "#aboutline");
      smallLine("#services", "#serviceline");
      smallLine("#contact", "#contactline");
      smallLine("#talk", "#talkline");
      arrowAnimation("#first", "#talk", "#second", -25);
    };

    const initVideoInteractions = () => {
      const page = videoPageRef.current;
      const cursor = cursorRef.current;

      if (!page || !cursor) return;

      const handleMouseMove = (e) => {
        const rect = page.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(cursor, {
          x: x,
          y: y,
          duration: 1.5,
          ease: "power4.out"
        });
      };

      const handleMouseEnter = () => {
        gsap.to(cursor, {
          opacity: 1,
          duration: 0.5
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.5
        });
      };

      page.addEventListener("mousemove", handleMouseMove);
      page.addEventListener("mouseenter", handleMouseEnter);
      page.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        page.removeEventListener("mousemove", handleMouseMove);
        page.removeEventListener("mouseenter", handleMouseEnter);
        page.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    loadingAnimation();
    setTimeout(() => {
      initLocomotiveScroll();
      if (!isMobile) {
        initNavigationAnimations();
      }
      initVideoInteractions();
    }, 100);

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isMobile, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      <div className="loader" ref={loaderRef}>
        <h3 ref={loaderTextRef}>Tomorrow&apos;s Brands, Today™️</h3>
      </div>
      
      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="nav">
          <div className="nav-left">
            <h3>The Growth Accelerator</h3>
          </div>
          <div className="home-underline">
            <div className="homeline homeline1" id="homeline"></div>
          </div>
          <div className="home-underline word-underline">
            <div className="homeline wordline" id="wordline"></div>
          </div>
          <div className="home-underline about-underline">
            <div className="homeline aboutline" id="aboutline"></div>
          </div>
          <div className="home-underline service-underline">
            <div className="homeline serviceline" id="serviceline"></div>
          </div>
          <div className="home-underline contact-underline">
            <div className="homeline contactline" id="contactline"></div>
          </div>
          <div className="home-underline talk-underline">
            <div className="homeline talkline" id="talkline"></div>
          </div>
          <div className="nav-centre">
            <ul>
              <li id="home">Home</li>
              <li id="work">Work</li>
              <li id="about">About</li>
              <li id="services">Services</li>
              <li id="contact">Contact</li>
            </ul>
          </div>
          <div className="nav-right">
            <i id="second" className="ri-arrow-right-up-line"></i>
            <h3 id="talk">Let&apos;s Talk</h3>
            <i id="first" className="ri-arrow-right-up-line"></i>
          </div>
        </div>
      )}
      
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="mobile-nav">
          <div className="mobile-nav-left">
            <h3>The Growth Accelerator</h3>
          </div>
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <div className="slide-toggle">
              <span className="menu-text">Menu</span>
              <span className="close-text">Close</span>
            </div>
          </div>
          
          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-content">
              <div className="mobile-nav-header">
                <div className="mobile-nav-left">
                  <h3>The Growth Accelerator</h3>
                </div>
              </div>
              <div className="mobile-menu-center">
                <div className="mobile-lets-talk-top">
                  <span>Let&apos;s talk ↗</span>
                </div>
                <div className="mobile-menu-links">
                  <div className="mobile-nav-item">
                    <span>Home</span>
                  </div>
                  <div className="mobile-nav-item">
                    <span>Work</span>
                  </div>
                  <div className="mobile-nav-item">
                    <span>About</span>
                  </div>
                  <div className="mobile-nav-item">
                    <span>Services</span>
                  </div>
                  <div className="mobile-nav-item">
                    <span>Contact</span>
                  </div>
                </div>
                <div className="mobile-menu-footer">
                  <div className="mobile-social-links">
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="main" ref={mainRef} data-scroll data-scroll-speed="2">
        <div className="title-page" data-scroll>
          <div className="title-name" data-scroll data-scroll-speed="-4">
            <h1 ref={titleRef}>rejouice</h1>
          </div>
          <div className="title-bottom" data-scroll data-scroll-speed="0">
            <div className="bottom-text">
              <h3>Strategy, Design, and Performance</h3>
              <h3>Two Engagement Models:Cash or Equity</h3>
            </div>
            <i className="ri-arrow-down-line"></i>
          </div>
        </div>
        <div className="video-page" data-scroll data-scroll-speed="-4" ref={videoPageRef}>
          <div className="mainvideo">
            <video autoPlay loop muted src="/videos/reel-short.mp4"></video>
          </div>
          <div data-scroll className="page-content">
            <h1>ShowReel</h1>
            <div className="play-reel" ref={cursorRef}>
              <h3>Play Reel</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rejouice;
