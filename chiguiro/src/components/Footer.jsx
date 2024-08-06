// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/UnillanosOficial" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/unillanos_?lang=es" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/unillanos_/?hl=es" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className={styles.contactInfo}>
          <p>Contacto: ginvestigacioneysi@unillanos.edu.co</p>
          <p>Whatsapp: +57 313 442 6721</p>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;