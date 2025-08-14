import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useStars } from '../../../hooks/useStars';
import star from '../../../assets/common/star.svg';
import './DisplayHeader.css';

const DisplayHeader = ({ activeItem }) => {
  const navRef = useRef(null);
  const starCountRef = useRef(null);
  const stars = useStars();

  useEffect(() => {
    if (stars && starCountRef.current) {
      gsap.fromTo(starCountRef.current,
        {
          scale: 0,
          width: 0,
          opacity: 0
        },
        {
          scale: 1,
          width: "100px",
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1)"
        }
      );
    }
  }, [stars]);
  return (
    <header className="header">
      <div className='header-container'>
        <Link to="/" className="logo">
          <h1>Not decided</h1>
        </Link>

        <div className="nav-cta-group">
          <nav className="landing-nav-items" ref={navRef}>
            <Link className={`nav-link ${activeItem === 'home' && 'active-link'}`} to="/">Home</Link>
          </nav>

          <button className="cta-button" onClick={() => window.open('https://github.com/NiranjanKumar001/NeUI', '_blank')}>
            Star on Github
            <span ref={starCountRef} style={{ opacity: 0 }}>
              <img src={star} alt="Star Icon" />
              {stars}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DisplayHeader;