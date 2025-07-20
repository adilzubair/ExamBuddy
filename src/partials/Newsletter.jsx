import React, { useState, forwardRef } from 'react';

const Newsletter = forwardRef((props, ref) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  // const [loading, setLoading] = useState(false); // Optional: for loading state
  // const [errorMessage, setErrorMessage] = useState(''); // Optional: for error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // setLoading(true); // Optional: if you add a loading state
      // setErrorMessage(''); // Optional: Clear previous error messages
      try {
        const response = await fetch('http://localhost:3001/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: email, // User's email
            from: 'help.exambuddy@gmail.com', // Verified sender for ExamBuddy
            subject: 'Thank you for showing interest in ExamBuddy!',
            html: `<p>Thank you for your interest! We'll contact you soon with updates about ExamBuddy.</p><p>Subscriber Email: ${email}</p>`,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          const errorData = await response.json(); // Try to get error message from backend
          console.error('Failed to send email:', response.statusText, errorData);
          // Optional: setErrorMessage(errorData.error || 'Failed to subscribe. Please try again.');
          // setTimeout(() => setErrorMessage(''), 5000); 
        }
      } catch (error) {
        console.error('Error submitting email:', error);
        // Optional: setErrorMessage('An error occurred. Please try again.');
        // setTimeout(() => setErrorMessage(''), 5000);
      } finally {
        // setLoading(false); // Optional: if you add a loading state
      }
    }
  };

  return (
    <section ref={ref} id="newsletter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div 
            className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl py-10 px-6 sm:px-8 md:py-16 md:px-12 shadow-modern overflow-hidden transform transition-all duration-500 hover:shadow-glow-blue" 
            data-aos="zoom-y-out"
          >

            {/* Modern background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated glow elements */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-neon-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
              <div className="absolute left-1/2 top-1/4 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
              
              {/* Interactive particles that respond to cursor */}
              <div className="particle-newsletter-1"></div>
              <div className="particle-newsletter-2"></div>
              <div className="particle-newsletter-3"></div>
              
              <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                  <defs>
                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                      <stop stopColor="#DFDFDF" offset="0%" />
                      <stop stopColor="#4C4C4C" offset="44.317%" />
                      <stop stopColor="#333" offset="100%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#FFF">
                      <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                      <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                      <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                      <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                    </g>
                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl relative z-10">
                <div 
                  className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-600 bg-opacity-20 backdrop-filter backdrop-blur-xs transform transition-all duration-500 hover:scale-105"
                >
                  <span className="text-sm font-medium text-blue-400 font-['Lato'] relative animate-pulse-gentle">
                    Early Access
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-400 rounded-full animate-ping"></span>
                  </span>
                </div>
                <h3 className="h3 text-white mb-4 font-['Space_Grotesk'] relative">
                  Get Early Access to ExamBuddy
                  <span className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-neon-400 rounded-full lg:block hidden"></span>
                </h3>
                <p className="text-gray-300 text-lg mb-8 font-['Lato']">Be among the first students to experience AI-powered exam preparation. Sign up for early access and exclusive updates.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <div 
                      className={`relative flex-grow mb-3 sm:mb-0 sm:mr-2 transition-all duration-300 ${focused ? 'transform -translate-y-1' : ''}`}
                    >
                      <input 
                        type="email" 
                        className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-neon-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-['Lato'] transition-all duration-300 focus:ring-2 focus:ring-neon-400 focus:ring-opacity-50 focus:outline-none" 
                        placeholder="Your email…" 
                        aria-label="Your email…"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                      />
                      <div className={`absolute inset-0 bg-blue-600 bg-opacity-5 rounded-xl pointer-events-none transition-all duration-300 ${focused ? 'shadow-glow-blue' : ''}`}></div>
                      
                      {/* Email validation indicator */}
                      {email && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {email.includes('@') ? (
                            <svg className="w-5 h-5 text-neon-400 animate-pulse-gentle" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-neon-400 hover:to-neon-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 focus:scale-95 rounded-xl shadow-lg hover:shadow-neon font-['Lato'] relative overflow-hidden group"
                    >
                      <span className="relative z-10 text-white">Join Waitlist</span>
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neon-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                    </button>
                  </div>
                  
                  {/* Success message with animation */}
                  <div 
                    className={`text-sm text-neon-400 mt-3 flex items-center justify-center lg:justify-start transition-all duration-500 transform ${submitted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 absolute'}`}
                  >
                    <svg className="w-4 h-4 mr-2 animate-pulse-gentle" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Thanks for subscribing! We'll be in touch soon about ExamBuddy.</span>
                  </div>
                  
                  <div className={`mt-4 flex items-center justify-center lg:justify-start transition-opacity duration-300 ${submitted ? 'opacity-50' : 'opacity-100'}`}>
                    <svg className="w-4 h-4 text-neon-400 mr-2 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-sm text-gray-400 font-['Lato']">Priority access for students. No obligation.</p>
                  </div>
                </form>
              </div>

              {/* Decorative image for larger screens */}
              <div className="relative mt-8 lg:mt-0 lg:ml-8 hidden md:block">
                <div 
                  className="relative w-64 h-64 bg-gray-800 bg-opacity-50 rounded-2xl backdrop-filter backdrop-blur-sm border border-gray-700 border-opacity-30 p-3 shadow-modern transform rotate-3 group hover:rotate-0 transition-all duration-700 hover:shadow-glow"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-neon-400 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-neon-400 rounded-full opacity-70 animate-pulse-slow"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-600 rounded-full opacity-70 animate-float"></div>
                  <div className="h-full flex flex-col justify-center items-center text-white relative">
                    <svg 
                      className="w-12 h-12 mb-3 text-neon-400 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span 
                      className="text-sm font-medium font-['Lato'] text-center relative group-hover:text-neon-400 transition-colors duration-300"
                    >
                      Early access members get 30% off for six months
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-neon-400 group-hover:w-full transition-all duration-500"></span>
                    </span>
                    
                    {/* Animated number counter */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-ping"></div>
                      <div className="absolute inset-0.5 bg-gray-900 rounded-full"></div>
                      <span className="relative text-xs font-bold text-neon-400">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Newsletter;
