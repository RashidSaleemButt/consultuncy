
// import React from "react";
// import { AppContext } from "../App";
// import SectionHeader from "./SectionHeader/index";


// export default function Services() {
//   const { sectionRefs } = React.useContext(AppContext);

//   return (
//     <section
//       ref={(element) => (sectionRefs.current[1] = element)}
//       id="services"
//       className="services"
//     >
//       <div className="container">
//         <SectionHeader>
//           <SectionHeader.Title>
//             SERVICES <span className="orange--word">WE PROVIDE</span>
//           </SectionHeader.Title>
//           <SectionHeader.Desc>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
//             incidunt blanditiis autem at alias earum nobis ad eos doloremque
//             quod totam, culpa sapiente quam harum provident dolores aliquid
//             voluptatum dolor.
//           </SectionHeader.Desc>
//         </SectionHeader>
//         <div className="services--card-container">
          
//           <div className="services--card">
           
//             <div className="services--card-content">
//               <div className="card--title">Technology Solutions</div>
//               <div className="card--desc">
//                 Web Development (Business, E-commerce, Personal), Mobile App Development (Android, iOS, Cross-platform) — empowering brands with sleek design, smart tech, and global reach.
//               </div>
//             </div>
//           </div>
          
          
           
      
    
//     </section>
//   );
// }

import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";

// Import images
import passportImg from "../assets/images/passport.jpg";
import courseoutImg from "../assets/images/courseout.jpg";
import skillsImg from "../assets/images/skills.jpg";
import specialImg from "../assets/images/special.jpg";
import educationIconImg from "../assets/images/education-icon.png";
import skillImg from "../assets/images/skill.jpg";
import missionImg from "../assets/images/mission.jpg";

export default function Services() {
  const { sectionRefs } = React.useContext(AppContext);

  return (
    <section
      ref={el => (sectionRefs.current[1] = el)}
      id="services"
      className="services"
    >
      <div className="container">
        {/* Header Section (Intro) */}
        <div className="section--header">
          <h2>Our Services</h2>
          <p>
            We provide consultancy, technology, and professional solutions to help individuals and businesses succeed in the UK and beyond.
          </p>
          <div className="services--main-btn" style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: 24}}>
            <a href="#bookings" className="main--button">Book a Consultation</a>
            <a href="#packages" className="main--button" style={{background: 'var(--lightTheme-secondary-Color)', color: 'var(--lightTheme-white)'}}>View Packages</a>
          </div>
        </div>

        {/* Services Programs Section */}
        <div className="services-programs">
          <div className="service-program">
            <img src={passportImg} alt="Visa Guidance"/>
            <div className="service-caption">
              <div className="caption-content">
                <h3>VISA GUIDANCE</h3>
                <p>UK/Europe/Canada pathways</p>
              </div>
            </div>
          </div>
          <div className="service-program">
            <img src={courseoutImg} alt="Course Shortlisting"/>
            <div className="service-caption">
              <div className="caption-content">
                <h3>COURSE SHORTLISTING</h3>
                <p>University & training programs</p>
              </div>
            </div>
          </div>
          <div className="service-program">
            <img src={skillsImg} alt="Market Ready Training"/>
            <div className="service-caption">
              <div className="caption-content">
                <h3>MARKET READY TRAINING</h3>
                <p>UK job market preparation</p>
              </div>
            </div>
          </div>
          <div className="service-program">
            <img src={specialImg} alt="Specialist Training"/>
            <div className="service-caption">
              <div className="caption-content">
                <h3>SPECIALIST TRAINING</h3>
                <p>Business Analysis & Project Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Services Section */}
        <div className="services-detailed-section">
          <div className="services-detailed-container">
            {/* Left Side - Content */}
            <div className="services-content">
              <div className="services--name">Education Consultancy & Career Services</div>
              
              <div className="services-grid">
                <div className="service-detail-card">
                  <div className="service-icon">🛂</div>
                  <h4>Visa Guidance</h4>
                  <p>WORLDWIDE pathways</p>
                  <small>Support with understanding options (not legal advice)</small>
                </div>
                
                <div className="service-detail-card">
                  <div className="service-icon">📚</div>
                  <h4>Course Shortlisting</h4>
                  <p>University programs & professional training guidance</p>
                </div>
                
                <div className="service-detail-card">
                  <div className="service-icon">💼</div>
                  <h4>Market-Ready Training</h4>
                  <p>Soft skills & industry-focused sessions for UK job market</p>
                </div>
                
                <div className="service-detail-card">
                  <div className="service-icon">🎯</div>
                  <h4>Specialist Training</h4>
                  <ul className="specialist-list">
                    <li>Business Analysis</li>
                    <li>Scrum Master & Agile Implementation</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
              
              <div className="services--preview-btn">
                <a href="#bookings" className="main--button">Get UK Job Ready → Book a Session</a>
              </div>
            </div>
            
            {/* Right Side - Visual Elements */}
            <div className="services-visual">
              <div className="services-highlight-images">
                <img src={educationIconImg} alt="Education Icon" className="highlight-image" />
                <img src={skillImg} alt="Career Journey" className="highlight-image" />
                <img src={missionImg} alt="Our Mission" className="highlight-image" />
              </div>
              <div className="services-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Successful Consultations</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}