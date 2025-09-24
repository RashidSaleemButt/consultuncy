import React from "react";
import gymVideo from "../assets/images/gym-video.mp4";

import { AppContext } from "../App";

export default function Home() {
  const { homeRef, setHomeVisibility, sectionRefs } =
    React.useContext(AppContext);
  React.useEffect(() => {
    const options = {
      rootMargin: "-80px",
    };
    const navObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisibility(entry.isIntersecting);
    }, options);
    navObserver.observe(homeRef.current);
  }, []);

  function homeRefsMerged(element) {
    homeRef.current = element;
    sectionRefs.current[0] = element;
  }

  return (
    <section ref={homeRefsMerged} id="home" className="home">
      <video autoPlay loop muted src={gymVideo} className="home--video"></video>
      
      <div className="container">
        <div className="home--caption">
          <h6>Professional Consultancy Services</h6>
          
          <h2 style={{fontWeight: 'bold'}}>
            YOUR WORLDWIDE CAREER PARTNER
          </h2>

          <div className="hero--cta">
            <p className="hero--description" style={{color: '#ffffff', fontWeight: '600', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'}}>
              Navigate Your Career, Accelerate Your Business
            </p>
            
            <div className="hero--buttons">
              <a href="#bookings" className="main--button">
                Book Consultation
              </a>
              <a href="#services" className="secondary--button">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
