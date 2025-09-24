// import React from "react";
// import { AppContext } from "../App";
// import SectionHeader from "./SectionHeader/index";
// import AboutussImg from "../assets/images/Aboutuss.jpg";
// import WhyusImg from "../assets/images/whyus.jpg";
// import missionF from "../assets/images/missionF.jpg";

// export default function About() {
//   const { sectionRefs } = React.useContext(AppContext);

//   return (
//     <section
//       ref={(element) => (sectionRefs.current[2] = element)}
//       id="about"
//       className="about"
//     >
//       <div className="container">
//         {/* About Us Section */}
//         <SectionHeader>
//           <SectionHeader.Title>
//             ABOUT <span className="orange--word">US</span>
//           </SectionHeader.Title>
//         </SectionHeader>
        
//         <div className="about--content">
//           <div className="about--image-section">
//             <img src={AboutussImg} alt="About Us" className="about--main-image" />
//           </div>
//           <div className="about--text-section">
//             <p className="main-intro-paragraph" style={{
//               textAlign: 'center',
//               fontSize: '1.2rem',
//               fontWeight: '500',
//               lineHeight: '1.8',
//               margin: '0 0 2.5rem 0',
//               padding: '1.5rem',
//               background: 'linear-gradient(135deg, rgba(237, 86, 59, 0.05), rgba(255, 255, 255, 0.1))',
//               borderRadius: '12px',
//               border: '1px solid rgba(237, 86, 59, 0.1)',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
//             }}>
//               At <strong>Midlumes Consultancy Services Limited</strong>, we guide individuals, families, and professionals through the complex world of immigration and visa processes. With years of hands on experience and deep knowledge of international regulations, our mission is simple:{" "}
//               <em>To make your transition smooth, secure, and successful.</em>
//             </p>
            
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
//               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
//               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
//               irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
//               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
//               deserunt mollit anim id est laborum.
//             </p>
//             <p>
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
//               laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
//               architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
//               sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
//               voluptatem sequi nesciunt.
//             </p>
//           </div>
//         </div>

//         {/* Why Us Section */}
//         <div className="why-us--section">
//           <div className="why-us--content">
//             <div className="why-us--text-section">
//               <h2 className="section--title">
//                 WHY <span className="orange--word">US</span>
//               </h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
//                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
//                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <p>
//                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
//                 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
//                 culpa qui officia deserunt mollit anim id est laborum.
//               </p>
//               <p>
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
//                 laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
//                 architecto beatae vitae dicta sunt explicabo.
//               </p>
//             </div>
//             <div className="why-us--image-section">
//               <img src={WhyusImg} alt="Why Choose Us" className="why-us--image" />
//             </div>
//           </div>
//         </div>

//         {/* Our Vision Section */}
//         <div className="our-vision--section">
//           <div className="our-vision--content">
//             <div className="our-vision--image-section">
//               <img src={missionF} alt="Our Vision" className="our-vision--image" />
//             </div>
//             <div className="our-vision--text-section">
//               <h2 className="section--title">
//                 OUR <span className="orange--word">VISION</span>
//               </h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
//                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
//                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <p>
//                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
//                 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
//                 culpa qui officia deserunt mollit anim id est laborum.
//               </p>
//               <p>
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
//                 laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
//                 architecto beatae vitae dicta sunt explicabo.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }