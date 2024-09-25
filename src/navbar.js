import React from 'react';
import './navbar.css';
import LanguageSwitcher from './language.js';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-wrapper">
        <nav aria-label="Menu principal" className="menu sticky-top">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#process" className="nav-link">{t('Process')}</a>
            </li>
            <li className="nav-item">
              <a href="#aboutus" className="nav-link">{t('About us')}</a>
            </li>
            <li className="nav-item">
              <a href="#form" className="nav-link">{t('Contact us')}</a>
            </li>
            <li className='nav-item'>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
