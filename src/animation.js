import React, { useState, useEffect } from 'react';
import './animation.css';
import landingPage from './rocket1.png';
import { useTranslation } from 'react-i18next';

const Animation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation(); 

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
    <div className="container-animation cover-container d-flex">
      <div className='d-flex flex-column justify-content-center'>
        <div className='d-flex flex-row p-2'>
          <div className='d-flex flex-column image-title p-4'>
            <h1 className={isVisible ? 'title m-4' : 'title hidden'}>
              <p>{t('Connecting')}</p>
              <p>{t('Talent')}</p>
              <p>{t('Quickly')}</p>
            </h1>
            <p className={isVisible ? 'lead' : 'title hidden'}>
              <a href="#process" className="btn btn-lg btn-secondary mt-4">{t('Learn more')}</a>
            </p>
          </div>
        </div>
      </div>
      <img src={landingPage} alt="rocket" className={isVisible ? 'img-men' : 'image-hidden'} />
    </div>
  );
};

export default Animation;
