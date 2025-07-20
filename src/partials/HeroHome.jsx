import React, { useState, useEffect, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroHome = ({ onEarlyAccessClick, onLearnMoreClick }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);
  
  // Array of features to cycle through
  const features = [
    "AI Topic Analysis",
    "Upload Previous Year Papers",
    "Personalized Study Insights",
    "Exam Success Tools"
  ];
  
  // Cycle through features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-platinum-200 to-white pointer-events-none" aria-hidden="true"></div>
      
      {/* Animated shapes - hidden on smaller screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none animate-float hidden md:block" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFFFFF" offset="0%" />
              <stop stopColor="#DEDEDE" offset="77.402%" />
              <stop stopColor="#DEDEDE" offset="100%" />
            </linearGradient>
            <filter id="blur-effect" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
            </filter>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" className="opacity-50" />
            <circle cx="155" cy="443" r="64" className="opacity-70" />
            <circle cx="600" cy="250" r="100" className="opacity-20" filter="url(#blur-effect)" />
          </g>
        </svg>
      </div>

      {/* Floating particles for added visual interest - visible on all screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle-1 animate-particle-1"></div>
        <div className="particle-2 animate-particle-2"></div>
        <div className="particle-3 animate-particle-3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-24 pb-10 md:pt-40 md:pb-20">          
          {/* Section header */}          
          <div className="text-center pb-8 md:pb-16">            
            <div 
              className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600 bg-opacity-10 backdrop-filter backdrop-blur-xs transform transition-all duration-700 hover:scale-105 hover:shadow-glow-blue" 
              data-aos="fade-down"
            >
              <span className="text-sm font-semibold text-blue-600 font-['Lato'] animate-pulse-gentle">Now in Early Access</span>
            </div>
            <h1 
              className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Space_Grotesk'] leading-tighter tracking-tighter mb-4 text-gray-900" 
              data-aos="zoom-y-out"
            >
              {/* Gradient design restored, yellow bg removed */}
              <span
                className="text-blue-600 md:bg-clip-text md:text-transparent md:bg-gradient-to-r md:from-blue-600 md:to-neon-400 md:animate-gradient"
              >
                ExamBuddy
              </span> - <span className="text-black">AI-Powered Exam Preparation</span>
            </h1>
            <div className="max-w-3xl mx-auto">              
              <p 
                className="relative z-10 text-lg sm:text-xl font-['Lato'] text-gray-900 mb-2 px-4 sm:px-0" 
                data-aos="zoom-y-out" 
                data-aos-delay="150"
              >
                Upload previous year question papers and let ExamBuddy's AI reveal the most important topics for your next test. Study smarter, not harder!
              </p>
              
              {/* Animated features cycling */}
              <div className="h-8 mb-6 overflow-hidden">
                <div className="flex justify-center items-center">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                    <p 
                      className="text-lg font-medium text-gray-800 animate-fade-in-up"
                      key={featureIndex}
                      style={{color: '#333'}} // Adding inline style as additional fallback
                    >
                      {features[featureIndex]}
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0" 
                data-aos="zoom-y-out" 
                data-aos-delay="300"
              >
                <div>
                  <a 
                    className="btn text-white bg-blue-600 hover:bg-neon-400 hover:text-gray-900 w-full mb-0 sm:w-auto sm:mb-0 font-['Lato'] transform transition-all duration-300 hover:scale-105 hover:shadow-neon rounded-lg group relative overflow-hidden"
                    href="#"
                    onClick={e => { e.preventDefault(); navigate('/upload'); }}
                  >
                    <span className="relative z-10 text-white">Early Access</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-neon-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </a>
                </div>                
                <div className="sm:ml-4">
                  <a className="btn text-gray-900 bg-white border border-gray-300 hover:border-neon-400 hover:shadow-neon w-full sm:w-auto font-['Lato'] transition-all duration-300 transform hover:scale-105 rounded-lg relative group"
                    href="#0"
                    onClick={e => { e.preventDefault(); onLearnMoreClick && onLearnMoreClick(); }}
                  >
                    <span className="relative z-10">Learn more</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-neon-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>          

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center w-full max-w-3xl">
                {/* Glass morphism container for the hero image */}
                <div className="relative rounded-xl shadow-modern bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 p-2 animate-float transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-glow">
                  {/* Decorative elements - visible on all screens but smaller on mobile */}
                  <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-neon-400 rounded-full filter blur-xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-neon-400 to-blue-600 rounded-full filter blur-xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
                  
                  {/* Interactive dots */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-600 rounded-full animate-pulse-gentle"></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-400 rounded-full animate-pulse-slow"></div>
                </div>
                
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto opacity-80 hidden sm:block"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#DEDEDE" offset="77.402%" />
                      <stop stopColor="#DEDEDE" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#DEDEDE" offset="48.57%" />
                      <stop stopColor="#DEDEDE" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                      <stop stopColor="#1736F5" offset="0%" />
                      <stop stopColor="#39FF14" offset="50%" />
                      <stop stopColor="#1736F5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
