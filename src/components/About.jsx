
import React from "react";
import { AppContext } from "../App";
import AboutussImg from "../assets/images/Aboutuss.jpg";
import WhyusImg from "../assets/images/whyus.jpg";
import missionF from "../assets/images/missionF.jpg";

export default function About() {
  const { sectionRefs } = React.useContext(AppContext);

  return (
    <section
      ref={(element) => (sectionRefs.current[2] = element)}
      id="about"
      className="about"
    >
      <div className="container">
        <div className="section--header">
          <h2>
            ABOUT <span className="orange--word">MIDLUMES</span>
          </h2>
          <p>
            At <strong>Midlumes Consultancy Services Limited</strong>, we are your trusted partners in navigating 
            the complex landscape of international opportunities. With years of expertise and deep knowledge 
            of global regulations, we transform aspirations into achievements.
          </p>
        </div>

        <div className="about--content">
          <div className="about--image-section">
            <img src={AboutussImg} alt="About Midlumes Consultancy" className="about--main-image" />
          </div>
          <div className="about--text-section">
            <p>
              <strong>Your journey to success begins with the right guidance.</strong> We specialize in 
              comprehensive immigration consultancy, educational pathway planning, and career development services 
              that open doors to global opportunities.
            </p>
            <p>
              Our expert team combines industry knowledge with personalized attention to ensure every client 
              receives tailored solutions. From visa guidance to professional training, we&rsquo;re committed to 
              making your international dreams a reality.
            </p>
            <p>
              We understand that each journey is unique, which is why our approach focuses on building 
              long-term relationships and delivering results that exceed expectations. Your success is our mission.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-us--section">
          <div className="why-us--content">
            <div className="why-us--text-section">
              <h2 className="section--title">
                WHY CHOOSE <span className="orange--word">US</span>
              </h2>
              <p>
                <strong>Proven Expertise:</strong> Our team brings years of experience in immigration law, 
                education consultancy, and international business development. We stay current with changing 
                regulations and market trends to provide you with the most accurate guidance.
              </p>
              <p>
                <strong>Personalized Approach:</strong> We believe every client&rsquo;s journey is unique. Our 
                consultants take time to understand your specific goals, challenges, and circumstances to 
                create customized strategies that work for you.
              </p>
              <p>
                <strong>End-to-End Support:</strong> From initial consultation to successful completion of 
                your goals, we provide comprehensive support every step of the way. Our commitment doesn&rsquo;t 
                end when you achieve your immediate objectives &ndash; we&rsquo;re here for your long-term success.
              </p>
              
              <div className="about--services-list">
                <li>Expert visa and immigration guidance</li>
                <li>University and course selection assistance</li>
                <li>Professional skills development training</li>
                <li>Market-ready career preparation</li>
                <li>Ongoing support and follow-up services</li>
              </div>
            </div>
            <div className="why-us--image-section">
              <img src={WhyusImg} alt="Why Choose Midlumes" className="why-us--image" />
            </div>
          </div>
        </div>

        {/* Our Mission & Vision Section */}
        <div className="our-vision--section">
          <div className="our-vision--content">
            <div className="our-vision--image-section">
              <img src={missionF} alt="Our Mission and Vision" className="our-vision--image" />
            </div>
            <div className="our-vision--text-section">
              <h2 className="section--title">
                OUR <span className="orange--word">MISSION</span>
              </h2>
              <p>
                <strong>Empowering Global Success:</strong> To be the bridge that connects ambitions with 
                achievements, providing world-class consultancy services that transform lives and create 
                opportunities for success in the global marketplace.
              </p>
              <p>
                <strong>Innovation in Service:</strong> We continuously evolve our services to meet the 
                changing needs of our clients, incorporating the latest industry insights and technological 
                advances to deliver superior results.
              </p>
              <p>
                <strong>Building Futures:</strong> Our vision extends beyond immediate goals &ndash; we&rsquo;re committed 
                to helping individuals and businesses build sustainable, long-term success in their chosen 
                destinations and career paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
