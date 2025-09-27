import React, { useState } from "react";

const Contact = React.forwardRef((props, ref) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    try {
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);
      submitData.append("access_key", "89b07247-ac89-455a-ae54-89912038a87e");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        console.log("Error", data);
        setResult(`Error: ${data.message || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Error: Unable to submit form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#f3f4f6',
        color: '#111827'
      }}
      id="contact"
      ref={ref}
    >
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '80rem',
        width: '100%',
        margin: '0 auto',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        borderRadius: '1rem',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
        <div style={{
          width: '50%',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{
            fontSize: '1.875rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>SEND US YOUR QUERIES</h3>
          <p style={{
            color: '#4b5563',
            marginBottom: '2rem'
          }}>
            Wherever you&apos;re starting strategy, operations, or simply navigating new markets  our global experts are here to guide you with confidence.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ marginRight: '0.5rem' }}>&#9993;</span>
              <span>hello123@gmail.com</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ marginRight: '0.5rem' }}>&#128222;</span>
              <span>+123456789</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ marginRight: '0.5rem' }}>&#127968;</span>
              <span>london, United Kingdom</span>
            </li>
          </ul>
        </div>

        <div style={{
          width: '50%',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'white',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827',
                outline: 'none',
                transition: 'all 0.2s ease',
                opacity: isSubmitting ? 0.5 : 1
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'white',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827',
                outline: 'none',
                transition: 'all 0.2s ease',
                opacity: isSubmitting ? 0.5 : 1
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            <input type="hidden" name="replyto" value="email" />
            <textarea
              name="message"
              placeholder="Tell us about your project or inquiry..."
              rows={6}
              required
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'white',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827',
                outline: 'none',
                transition: 'all 0.2s ease',
                resize: 'vertical',
                minHeight: '120px',
                fontFamily: 'inherit',
                opacity: isSubmitting ? 0.5 : 1
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: '1rem',
                width: '100%',
                padding: '12px 24px',
                backgroundColor: '#111827',
                color: 'white',
                borderRadius: '9999px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.5 : 1
              }}
              onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#374151')}
              onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#111827')}
            >
              {isSubmitting ? "Sending..." : "Submit Here"}
            </button>
          </form>
          {result && (
            <div style={{
              marginTop: '1rem',
              fontSize: '14px',
              fontWeight: '500',
              color: result.includes("Error") ? '#dc2626' : '#059669'
            }}>
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
