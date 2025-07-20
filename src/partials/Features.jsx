import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  return (
    <section className="relative">

      {/* Section background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-platinum-200 to-platinum-200 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gradient-to-b from-gray-200 to-gray-400 transform -translate-y-1/2"></div>
      
      {/* Decorative blurred circles */}
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-neon-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-600 bg-opacity-10">
              <span className="text-sm font-medium text-blue-600 font-['Lato']">Powerful Features</span>
            </div>
            <h1 className="h2 mb-4 font-['Space_Grotesk'] text-gray-900">Comprehensive Exam Preparation Solutions</h1>
            <p className="text-xl text-gray-900 font-['Lato']">ExamBuddy offers a complete suite of tools designed to help students excel in their exams, providing access to previous year papers and AI-powered topic analysis for effective study planning.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 font-['Space_Grotesk'] text-gray-900">Powerful Suite of Exam Preparation Tools</h3>
                
              </div>              
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded-xl border transition duration-300 ease-in-out mb-4 ${tab !== 1 
                    ? 'bg-white shadow-glass border-gray-100 hover:shadow-modern hover:-translate-y-1' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-transparent shadow-lg'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-1">Previous Year Papers</div>
                    <div className={`${tab !== 1 ? 'text-gray-900' : 'text-white'} font-['Lato']`}>Access a vast repository of previous year exam papers to practice and prepare effectively, familiarizing yourself with the exam format and question types.</div>
                  </div>
                  <div className={`flex justify-center items-center w-10 h-10 rounded-full shadow-lg flex-shrink-0 ml-3 ${tab !== 1 ? 'bg-blue-600 bg-opacity-10' : 'bg-white'}`}>
                    <svg className={`w-5 h-5 ${tab !== 1 ? 'fill-current text-blue-600' : 'fill-current text-blue-600'}`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>                
                <a
                  className={`flex items-center text-lg p-5 rounded-xl border transition duration-300 ease-in-out mb-4 ${tab !== 2 
                    ? 'bg-white shadow-glass border-gray-100 hover:shadow-modern hover:-translate-y-1' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-transparent shadow-lg'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-1">AI-Powered Topic Analysis</div>
                    <div className={`${tab !== 2 ? 'text-gray-900' : 'text-white'} font-['Lato']`}>Leverage AI technology to analyze important topics and concepts, helping you focus your studies on high-yield areas for maximum exam impact.</div>
                  </div>
                  <div className={`flex justify-center items-center w-10 h-10 rounded-full shadow-lg flex-shrink-0 ml-3 ${tab !== 2 ? 'bg-blue-600 bg-opacity-10' : 'bg-white'}`}>
                    <svg className={`w-5 h-5 ${tab !== 2 ? 'fill-current text-blue-600' : 'fill-current text-blue-600'}`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>                
                <a
                  className={`flex items-center text-lg p-5 rounded-xl border transition duration-300 ease-in-out mb-4 ${tab !== 3 
                    ? 'bg-white shadow-glass border-gray-100 hover:shadow-modern hover:-translate-y-1' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-transparent shadow-lg'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold font-['Space_Grotesk'] leading-snug tracking-tight mb-1">Performance Analytics</div>
                    <div className={`${tab !== 3 ? 'text-gray-900' : 'text-white'} font-['Lato']`}>Gain insights into your preparation progress and performance with detailed analytics, helping you identify strengths and areas for improvement.</div>
                  </div>
                  <div className={`flex justify-center items-center w-10 h-10 rounded-full shadow-lg flex-shrink-0 ml-3 ${tab !== 3 ? 'bg-blue-600 bg-opacity-10' : 'bg-white'}`}>
                    <svg className={`w-5 h-5 ${tab !== 3 ? 'fill-current text-blue-600' : 'fill-current text-blue-600'}`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">                {/* Item 1 */}                
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="relative p-2 bg-white rounded-xl shadow-glass overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-r from-blue-600 to-neon-400 rounded-full opacity-20 blur-xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-neon-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
                      <img className="md:max-w-none mx-auto rounded-lg transition-transform duration-700 hover:scale-105" src={FeaturesBg} width="500" height="462" alt="Previous year papers access" />
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-neon-400 text-white px-3 py-1 text-xs rounded-lg shadow-lg font-medium">Previous Year Papers</div>
                    </div>
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>{/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="relative p-2 bg-white rounded-xl shadow-glass overflow-hidden">
                      <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-r from-neon-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
                      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-blue-600 to-neon-400 rounded-full opacity-20 blur-xl"></div>
                      <img className="md:max-w-none mx-auto rounded-lg transition-transform duration-700 hover:scale-105" src={FeaturesBg} width="500" height="462" alt="AI-powered topic analysis" />
                      <div className="absolute bottom-2 right-2 bg-blue-600 bg-opacity-90 text-white px-3 py-1 text-xs rounded-lg shadow-lg font-medium">AI Topic Analysis</div>
                    </div>
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="relative p-2 bg-white rounded-xl shadow-glass overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-r from-blue-600 to-neon-400 rounded-full opacity-20 blur-xl"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-neon-400 to-blue-600 rounded-full opacity-10 blur-xl"></div>
                      <img className="md:max-w-none mx-auto rounded-lg transition-transform duration-700 hover:scale-105" src={FeaturesBg} width="500" height="462" alt="Performance analytics dashboard" />
                      <div className="absolute bottom-2 left-2 bg-neon-400 bg-opacity-90 text-gray-900 px-3 py-1 text-xs rounded-lg shadow-lg font-medium">Performance Analytics</div>
                    </div>
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
