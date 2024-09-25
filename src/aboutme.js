import React from 'react';
import './aboutme.css';
import cv from './cv.svg';
import hiring from './hiring.svg';
import interview from './interview.svg';
import { useTranslation } from 'react-i18next';


function AboutMe(){

    const { t } = useTranslation();

    return (
      <div className='d-flex flex-column cover-container vh-100 justify-content-evenly'>
        <h1 className='text-white' id="process">{t('The process')}</h1>
        <div className="container-1 container">
          <div className="aboutMe-text mb-4">
            <div className='row justify-content-evenly mt-4'>
              <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                <img src={hiring} alt="hiring" className="img-fluid" />
                <p className='text-white'>{t('Send us your CV in the contact form page')}</p>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                <img src={interview} alt="interview" className="img-fluid" />
                <p className='text-white'>{t('Interview with a member of the team')}</p>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                <img src={cv} alt="cv" className="img-fluid" />
                <p className='text-white'>{t('If selected we will present you a contract')}</p>
              </div>
            </div>
          </div>
          <a href="#form" className="btn btn-lg btn-secondary mt-4">{t('Get Started')}</a>
        </div>
      </div>
    );
  };



  export default AboutMe;
