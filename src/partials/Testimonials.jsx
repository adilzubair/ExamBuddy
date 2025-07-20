import React, { useState, useEffect } from 'react';
import TestimonialImage from '../images/testimonial.jpg';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);

  const testimonials = [
    {
      quote: "ExamBuddy helped me focus on the most important topics for my finals. The AI analysis of previous year papers was spot on—I scored higher than ever before!",
      name: "Aditi Sharma",
      title: "Engineering Student",
      company: "IIT Delhi",
      image: TestimonialImage
    },
    {
      quote: "I uploaded my old question papers and ExamBuddy instantly highlighted the key areas to study. It saved me so much time and stress!",
      name: "Rahul Verma",
      title: "Medical Aspirant",
      company: "AIIMS Prep",
      image: TestimonialImage
    },
    {
      quote: "As a teacher, I recommend ExamBuddy to my students. The AI-powered insights help them prepare smarter and boost their confidence before exams.",
      name: "Dr. Meera Joshi",
      title: "Physics Professor",
      company: "Delhi University",
      image: TestimonialImage
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextTestimonial = () => {
    setDirection('right');
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);

  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setDirection('left');
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, 300);
  };

  const goToTestimonial = (index) => {
    if (index === activeTestimonial) return;
    setIsTransitioning(true);
    setDirection(index > activeTestimonial ? 'right' : 'left');
    setTimeout(() => {
      setActiveTestimonial(index);
    }, 300);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-platinum-200 to-white opacity-70"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32 animate-float hidden md:block" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd" opacity="0.8">
            <circle cx="1630" cy="128" r="128" filter="url(#glow)" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="testimonial-particle-1"></div>
        <div className="testimonial-particle-2"></div>
        <div className="testimonial-particle-3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-600 bg-opacity-10 transform transition-all duration-500 hover:scale-105 hover:shadow-glow-blue">
              <span className="text-sm font-medium text-blue-600 font-['Lato']">Client Success Stories</span>
            </div>
            <h2 className="h2 mb-4 font-['Space_Grotesk'] text-gray-900 relative inline-block" data-aos="fade-down">
              Trusted by Property Managers Across the MENA Region
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-neon-400 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-900 font-['Lato']" data-aos="zoom-y-out">
              Hear from property owners and facility managers who have transformed their operations and improved efficiency with Propease.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="hidden sm:block">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-glow-blue hover:scale-110 transition duration-300 z-20 focus:outline-none group" onClick={prevTestimonial} aria-label="Previous testimonial">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition duration-300 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-glow-blue hover:scale-110 transition duration-300 z-20 focus:outline-none group" onClick={nextTestimonial} aria-label="Next testimonial">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className={`bg-white rounded-xl p-6 sm:p-8 shadow-glass border border-gray-100 backdrop-filter backdrop-blur-sm transition-all duration-500 hover:shadow-modern transform ${
              isTransitioning 
                ? direction === 'right' 
                  ? 'translate-x-3 opacity-0' 
                  : '-translate-x-3 opacity-0' 
                : 'translate-x-0 opacity-100'
            }`} data-aos="fade-up">
              <div className="absolute top-0 left-0 -mt-4 -ml-4 w-16 h-16 bg-neon-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-0 -mb-4 -mr-4 w-16 h-16 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse-slow"></div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:mr-8 mb-4 md:mb-0 flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-neon-400 animate-spin-slow"></div>
                  <img className="rounded-full w-20 h-20 object-cover shadow-lg border-2 border-white relative z-10" src={testimonials[activeTestimonial].image} width="80" height="80" alt="Testimonial" />
                  <div className="absolute inset-0 rounded-full bg-blue-600 blur-xl opacity-30 animate-pulse-slow"></div>
                </div>
                <div className="text-center md:text-left">
                  <blockquote className="text-lg text-gray-700 font-['Lato'] italic mb-4">"{testimonials[activeTestimonial].quote}"</blockquote>
                  <p className="text-base font-semibold text-gray-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeTestimonial].title} — {testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-300`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
