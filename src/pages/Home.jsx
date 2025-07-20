import React, { useRef } from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';


function Home() {
  const newsletterRef = useRef(null);
  const featuresBlocksRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome 
          onEarlyAccessClick={() => newsletterRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onLearnMoreClick={() => featuresBlocksRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
        <FeaturesHome />
        <FeaturesBlocks ref={featuresBlocksRef} />
        <Newsletter ref={newsletterRef} />

      </main>

      

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;