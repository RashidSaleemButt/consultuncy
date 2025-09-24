
import React, { useState } from 'react';
import { AppContext } from '../App';
import '../bookings.css';

const Bookings = React.forwardRef((props, ref) => {
  const { sectionRefs } = React.useContext(AppContext);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Example services, replace with your actual services
  const services = [
    'Career Consultation',
    'Visa Guidance',
    'Business Setup',
    'Education Planning',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(e.target);
    formData.append("access_key", "89b07247-ac89-455a-ae54-89912038a87e"); // Replace with your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Booking submitted successfully! We'll contact you within 24 hours to schedule your consultation.");
        e.target.reset();
      } else {
        setResult("Submission failed. Please try again.");
      }
    } catch (err) {
      setResult("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section
      className="bookings flex items-center justify-center min-h-screen p-4 md:p-8 bg-gray-100 text-zinc-900 transition-colors duration-300"
      id="bookings"
      ref={(element) => {
        if (sectionRefs && sectionRefs.current) {
          sectionRefs.current[4] = element;
        }
        if (ref) {
          if (typeof ref === 'function') {
            ref(element);
          } else {
            ref.current = element;
          }
        }
      }}
    >
      <div className="relative flex flex-col lg:flex-row max-w-6xl w-full mx-auto shadow-lg rounded-2xl overflow-hidden p-6 md:p-0 bg-white transition-colors duration-300">
        {/* Information Column */}
        <div className="bookings-col lg:w-2/5 p-6 flex flex-col justify-center space-y-6">
          <h3 className="text-3xl font-semibold uppercase">Book Your Consultant Here</h3>
          <p className="text-gray-700">
            Launch your dream career—book your expert consultant and take the first powerful step towards success.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <span className="booking-icon text-xl">📋</span>
              <span className="text-orange-600 font-semibold text-lg">Professional Career Guidance</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="booking-icon text-xl">🛂</span>
              <span className="text-orange-600 font-semibold text-lg">Visa & Immigration Support</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="booking-icon text-xl">🏢</span>
              <span className="text-orange-600 font-semibold text-lg">Business Setup Consultation</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="booking-icon text-xl">🎓</span>
              <span className="text-orange-600 font-semibold text-lg">Education Planning</span>
            </li>
          </ul>
          
          {/* Additional Information */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold mb-3">What to Expect:</h4>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>• Initial consultation call within 24 hours</li>
              <li>• Personalized action plan tailored to your goals</li>
              <li>• Expert guidance from industry professionals</li>
              <li>• Follow-up support throughout your journey</li>
            </ul>
          </div>
        </div>

        {/* Form Column */}
        <div className="bookings-form-col lg:w-3/5 p-6 flex flex-col justify-center">
          {result && (
            <div className={`mb-4 p-4 rounded-lg font-medium ${result.includes('submitted') 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'}`}>
              {result}
            </div>
          )}
          
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 pb-2 placeholder-gray-500"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 pb-2 placeholder-gray-500"
            />
            
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number * (e.g., +1234567890)"
              required
              pattern="[\+]?[0-9\s\-\(\)]{8,15}"
              title="Please enter a valid phone number (8-15 digits, can include +, spaces, -, (, ))"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 pb-2 placeholder-gray-500"
            />
            
            <select
              name="service"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 pb-2"
            >
              <option value="" className="bg-white">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-white">{service}</option>
              ))}
            </select>
            
            <textarea
              name="details"
              placeholder="Tell us about your goals and current situation... (optional)"
              rows={4}
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 pb-2 placeholder-gray-500 resize-none"
            />
            
            <div className="pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload CV (optional)
              </label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zinc-50 file:text-zinc-700 hover:file:bg-zinc-100"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-3 px-6 bg-zinc-900 text-white rounded-full font-semibold transition-colors duration-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

Bookings.displayName = "Bookings";
export default Bookings;
