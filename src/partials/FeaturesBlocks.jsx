import React, { forwardRef } from 'react';

const FeaturesBlocks = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="relative">
      {/* Modern gradient background */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gradient-to-b from-platinum-200 to-white pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gradient-to-b from-gray-900 to-gray-600 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-600 bg-opacity-10">
              <span className="text-sm font-medium text-blue-600 font-['Lato']">Simple Process</span>
            </div>
            <h2 className="h2 mb-4 font-['Space_Grotesk'] text-gray-900">How ExamBuddy Works</h2>
            <p className="text-xl text-gray-900 font-['Lato']">ExamBuddy makes exam preparation easy: upload your previous year question papers, let our AI analyze them, and get a personalized list of the most important topics to focus on for your next test.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-glass border border-gray-100 transition-all duration-300 hover:shadow-modern hover:-translate-y-1 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 bg-opacity-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:bg-opacity-20">
                <svg className="w-10 h-10" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <g strokeWidth="2">
                      <path className="stroke-current text-neon-400" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                      <path className="stroke-current text-neon-400" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                      <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                    </g>
                  </g>
                </svg>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-neon-400 rounded-bl-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-neon-400 to-blue-600 rounded-tr-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <h4 className="text-xl font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-2 text-gray-900 transition-all duration-300 group-hover:text-blue-600">ExamBuddy Integration</h4>
              <p className="text-gray-900 font-['Lato'] text-center">Seamlessly integrate with ExamBuddy to access a vast repository of previous year papers and AI-powered topic analysis.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-glass border border-gray-100 transition-all duration-300 hover:shadow-modern hover:-translate-y-1 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 bg-opacity-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:bg-opacity-20">
                <svg className="w-10 h-10" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <g strokeWidth="2" transform="translate(19.429 20.571)">
                      <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                      <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                      <path className="stroke-current text-neon-400" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-neon-400 rounded-bl-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-neon-400 to-blue-600 rounded-tr-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <h4 className="text-xl font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-2 text-gray-900 transition-all duration-300 group-hover:text-blue-600">Previous Year Papers</h4>
              <p className="text-gray-900 font-['Lato'] text-center">Access and manage all your previous year papers in one convenient location.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-glass border border-gray-100 transition-all duration-300 hover:shadow-modern hover:-translate-y-1 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 bg-opacity-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:bg-opacity-20">
                <svg className="w-10 h-10" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <g strokeLinecap="square" strokeWidth="2">
                      <path className="stroke-current text-neon-400" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                      <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                    </g>
                  </g>
                </svg>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-neon-400 rounded-bl-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-neon-400 to-blue-600 rounded-tr-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <h4 className="text-xl font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-2 text-gray-900 transition-all duration-300 group-hover:text-blue-600">AI-Powered Topic Analysis</h4>
              <p className="text-gray-900 font-['Lato'] text-center">Leverage AI to analyze and summarize topics from your previous year papers for efficient revision.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-glass border border-gray-100 transition-all duration-300 hover:shadow-modern hover:-translate-y-1 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 bg-opacity-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:bg-opacity-20">
                <svg className="w-10 h-10" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <g transform="translate(22.857 19.429)" strokeWidth="2">
                      <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                      <path className="stroke-current text-white" d="M16 12.571h8" />
                      <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                      <circle className="stroke-current text-neon-400" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                    </g>
                  </g>
                </svg>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-neon-400 rounded-bl-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-neon-400 to-blue-600 rounded-tr-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <h4 className="text-xl font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-2 text-gray-900 transition-all duration-300 group-hover:text-blue-600">Performance Analytics</h4>
              <p className="text-gray-900 font-['Lato'] text-center">Get insights into your performance trends over time and identify areas for improvement.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-glass border border-gray-100 transition-all duration-300 hover:shadow-modern hover:-translate-y-1 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 bg-opacity-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:bg-opacity-20">
                <svg className="w-10 h-10" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <g strokeLinecap="square" strokeWidth="2">
                      <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                      <path className="stroke-current text-neon-400" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                    </g>
                  </g>
                </svg>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-neon-400 rounded-bl-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-neon-400 to-blue-600 rounded-tr-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <h4 className="text-xl font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-2 text-gray-900 transition-all duration-300 group-hover:text-blue-600">Resource Management</h4>
              <p className="text-gray-900 font-['Lato'] text-center">Organize and manage all your study resources, notes, and references efficiently.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-glass border border-gray-100 transition-all duration-300 hover:shadow-modern hover:-translate-y-1 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 bg-opacity-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:bg-opacity-20">
                <svg className="w-10 h-10" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <g strokeWidth="2">
                      <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                      <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                      <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                      <path className="stroke-current text-neon-400" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                    </g>
                  </g>
                </svg>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-neon-400 rounded-bl-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-neon-400 to-blue-600 rounded-tr-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <h4 className="text-xl font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-2 text-gray-900 transition-all duration-300 group-hover:text-blue-600">Collaborative Tools</h4>
              <p className="text-gray-900 font-['Lato'] text-center">Collaborate with peers and educators in real-time for enhanced learning experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturesBlocks;
