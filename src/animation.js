// Animation.js
import React, { useState, useEffect } from 'react';
import './animation.css';
import landingPage from './rocket.png'

const Animation = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 120) { // Adjust the threshold as needed
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <div className="container-animation cover-container d-flex ">

        <div className='d-flex flex-column justify-content-center'>
          <div class="d-flex flex-row p-2">
              <div className='d-flex flex-column image-title p-4 '>

                <h1 className={isVisible ? 'title m-4' : 'title hidden'}>
                <p>Connecting</p>
                <p>Talent</p>
                <p>Quickly</p></h1>
                <p className={isVisible ? 'lead' : 'title hidden'}>
                <a href="#process" className="btn btn-lg btn-secondary mt-4">Learn more</a>
                </p>
              </div>


        </div>
      </div>
      <img src={landingPage} alt="men" className={isVisible ? 'img-men' : 'image-hidden'} />
    </div>

    );
};

export default Animation;
