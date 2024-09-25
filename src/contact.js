import React from 'react';
import './form.css';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center cover-container justify-content-center" id="form">
      <form className="container d-flex flex-column align-items-center no-gap" action="https://getform.io/f/raeqpjna" method="POST" encType="multipart/form-data">
        <h3 className="text-white mb-4">{t('Find out more')}</h3>
        <div className="mb-3 col-md-8">
          <input type="text" className="form-control" name="user_name" placeholder={t('Name')} />
        </div>
        <div className="mb-3 col-md-8">
          <input type="email" className="form-control" name="user_email" placeholder={t('Email')} />
        </div>
        <div className="mb-3 col-md-8">
          <label htmlFor="job" className='text-white'>{t('Choose your working area:')}</label>
          <select className="form-select" name="job" id="job">
            <option value="Nursing">{t('Nursing')}</option>
            <option value="Medicine">{t('Medicine')}</option>
            <option value="Engineering">{t('Engineering')}</option>
            <option value="others">{t('Others')}</option>
          </select>
        </div>
        <div className="mb-3 col-md-8">
          <input type="file" className="form-control" name="resume" />
        </div>
        <button type="submit" className='btn btn-lg btn-secondary mt-2 col-md-6'>{t('Send')}</button>
      </form>
    </div>
  );
};

export default ContactUs;
