import React from 'react';
import { useTranslation } from 'react-i18next';
import './form.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <li className='nav-item dropdown' >
      <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle='dropdown' aria-expanded="false">
      En
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item"href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage('nl'); }}>
            Nl
          </a>
        </li>
        <li>
          <a className="dropdown-item"href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage('en'); }}>
            En
          </a>
        </li>
      </ul>
    </li>
  );
};

export default LanguageSwitcher;
