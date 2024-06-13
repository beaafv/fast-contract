// Animation.js
import React, { useState, useEffect } from 'react';
import './animation.css';

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
      <h1 className={isVisible ? 'title' : 'title hidden'}>Connecting talent quickly</h1>
      <p className={isVisible ? 'lead' : 'title hidden'}>
        <a href="https://legacy.reactjs.org/docs/create-a-new-react-app.html#create-react-appttps://www.codeconda.com/" className="btn btn-lg btn-secondary mt-4">Learn more</a>
      </p>
      </div>
    </div>
    );
};

export default Animation;
