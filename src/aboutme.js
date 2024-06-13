import React from 'react';
import './aboutme.css';
import cv from './cv.svg';
import hiring from './hiring.svg';
import interview from './interview.svg';


function AboutMe(){

    return (
      <div className='d-flex flex-column cover-container vh-100 justify-content-evenly'>
        <h1 className='text-white' id="process">The process</h1>
        <div className="container-1 container">
          <div className="aboutMe-text mb-4">
            <div className='row justify-content-evenly mt-4'>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <img src={hiring} alt="hiring" className="img-fluid" />
                <p className='text-white'>Send us your CV in the contact form page</p>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <img src={interview} alt="interview" className="img-fluid" />
                <p className='text-white'>Interview with a member of the team</p>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <img src={cv} alt="cv" className="img-fluid" />
                <p className='text-white'>Contract lorem ipsum</p>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-lg btn-secondary mt-4">Get Started</a>
        </div>
      </div>
    );
  }

  export default AboutMe;
