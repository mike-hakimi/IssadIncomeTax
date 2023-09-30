import React from 'react';
import HeroSection from '../Components/HeroSection.js';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Contact from '../Components/Contact.js';
import GoogleMap from '../Components/GoogleMap.js';


function Home(){
    return (
        <div>
      
        {/* Render the HeroSection component with data from homeObjOne */}
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjFour} />
         {/* Render the Contact component */}
        <Contact/>
        {/* Render the GoogleMap component */}
        <GoogleMap />
     
   
        
        
        
        </div>
    )
}

export default Home;