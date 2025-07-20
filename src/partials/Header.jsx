import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  
  
  // Function to scroll to newsletter section
  const scrollToNewsletter = (e) => {
    e.preventDefault();
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      const rect = newsletterSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementY = rect.top + scrollTop;
      const offset = window.innerHeight / 2 - rect.height / 2;
      window.scrollTo({
        top: elementY - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-md shadow-glass' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Text Logo */}
            <Link to="/" className="flex items-center" aria-label="ExamBuddy">
              <span className="text-3xl font-extrabold text-blue-700 tracking-tight font-['Space_Grotesk'] transition-all duration-300 hover:scale-105">ExamBuddy</span>
            </Link>
          </div>

          {/* Navigation button - always visible, responsive sizing */}
          <div className="flex">
            <a 
              href="#newsletter" 
              onClick={scrollToNewsletter}
              className="btn-sm text-white bg-blue-600 hover:bg-neon-400 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-neon text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <span className="text-white">Get AI Exam Insights</span>
              <svg className="w-2 h-2 sm:w-3 sm:h-3 fill-current text-white flex-shrink-0 ml-1 sm:ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
              </svg>                  
            </a>
          </div>

        </div>
        
        {/* Mobile navigation removed */}
      </div>
    </header>
  );
}

export default Header;
