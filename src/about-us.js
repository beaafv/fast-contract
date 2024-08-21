import React from "react";
import './about-us.css';
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 1300 && scrollPosition < 1380) { // Adjust the threshold as needed
              setIsVisible(false);
          } else if (scrollPosition > 1320) {
            setIsVisible2(false)
          }
            else {
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
      <h1 id="aboutus">Our Mission</h1>

      <div className="d-flex justify-content-center container">
        <div className={isVisible ? 'hidden' : 'card2 p-4 col-md-6 col-lg-8 col-12'}>
          <h3>Who we are</h3>
          We are a recruitment company established to meet the needs of businesses and professionals
          throughout the Netherlands, founded by individuals from diverse fields who combined their
          experience and vision to innovate the recruitment market.
        </div>

        <div className={isVisible ? 'hidden' : 'card1 p-4 col-md-6 col-lg-4 col-12'}>
          <h3>Connect</h3>
          At our company, we believe that success is directly linked to the talent and commitment of the
          people who are part of it. Therefore, our goal is to connect companies from various sectors
          with qualified professionals, helping both to achieve their objectives and maximize their
          potential.
        </div>
      </div>

      <div className={isVisible2 ? 'hidden' : 'd-flex justify-content-center container'}>
        <div className="card1 p-4 col-md-6 col-lg-4 col-12">
          <h3>Personalize</h3>
          Our mission is to provide personalized recruitment solutions that meet the specific needs of
          both parties. To do this, we identify the ideal candidates to fill each type of position according
          to their preferences and based on the desired profile by the company.
        </div>

        <div className={ isVisible2 ? 'hidden' : 'card2 p-4 col-md-6 col-lg-8 col-12'}>
          <h3>Transform</h3>
          At FastContract, we commit to being strategic partners in the growth and development of
          companies and in building successful careers. We are ready to transform challenges into
          opportunities. Contact us, and together we will take the next step towards success!
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
