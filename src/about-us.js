import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import './about-us.css';

const AboutUs = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 1300 && scrollPosition < 1380) {
        setIsVisible(false);
      } else if (scrollPosition > 1320) {
        setIsVisible2(false);
      } else {
        setIsVisible(true);
        setIsVisible2(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="d-flex flex-column p-4 about">
      <h1 id="aboutus">{t('aboutUs.mission')}</h1>

      <div className="d-flex justify-content-center container">
        <div className={isVisible ? 'hidden' : 'card2 p-4 col-md-6 col-lg-8 col-12'}>
          <h3>{t('aboutUs.whoWeAre')}</h3>
          {t('aboutUs.whoWeAreText')}
        </div>

        <div className={isVisible ? 'hidden' : 'card1 p-4 col-md-6 col-lg-4 col-12'}>
          <h3>{t('aboutUs.connect')}</h3>
          {t('aboutUs.connectText')}
        </div>
      </div>

      <div className={isVisible2 ? 'hidden' : 'd-flex justify-content-center container'}>
        <div className="card1 p-4 col-md-6 col-lg-4 col-12">
          <h3>{t('aboutUs.personalize')}</h3>
          {t('aboutUs.personalizeText')}
        </div>

        <div className={isVisible2 ? 'hidden' : 'card2 p-4 col-md-6 col-lg-8 col-12'}>
          <h3>{t('aboutUs.transform')}</h3>
          {t('aboutUs.transformText')}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
