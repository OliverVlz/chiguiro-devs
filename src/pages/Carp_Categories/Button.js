import React from 'react';
import './Button.css';

const Button = ({ label, downloadLink, filled, secondary }) => (
  <a 
    href={downloadLink} 
    download 
    className={`download-btn ${secondary ? 'download-btn--secondary' : ''} ${filled ? 'download-btn--filled' : ''}`}
  >
    {label}
    <span/>
    <span/>
    <span/>
    <span/>
    <b aria-hidden="true">{label}</b>
    <b aria-hidden="true">{label}</b>
    <b aria-hidden="true">{label}</b>
    <b aria-hidden="true">{label}</b>
  </a>
);

export default Button;
