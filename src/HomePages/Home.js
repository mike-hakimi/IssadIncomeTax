import React from 'react';
import HeroSection from '../Components/HeroSection.js';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Contact from '../Components/Contact.js';
import GoogleMap from '../Components/GoogleMap.js';


function Home(){
    return (
        <div>
      
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjFour} />
        
        <Contact/>
        <GoogleMap />
     
   
        
        
        
        </div>
    )
}

export default Home;