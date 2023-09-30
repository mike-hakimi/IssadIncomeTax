import React from 'react';
import '../StyleComponents/HeroSection.css';
import Contact from './Contact';

import { Link } from 'react-router-dom';

// Define the HeroSection component with props
function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart
}) {
  return (
    <>
    {/* Conditional CSS class based on the 'lightBg' prop */}
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div> {/* Display the 'topLine' prop */}
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline} 
                   {/* Display the 'headline' prop */}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}    {/* Display the 'description' prop */}
                </p>
                
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' /> {/* Display the image */}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </>
  );
}

export default HeroSection;