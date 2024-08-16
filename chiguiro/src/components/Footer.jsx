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
        <p>Correo: <a href="mailto:ginvestigacioneysi@unillanos.edu.co" style={{ color: 'white' }} >ginvestigacioneysi@unillanos.edu.co</a></p>
          <p>
            Whatsapp: 
            <a href="https://wa.me/573102719501?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20concurso%20METAROBOTS%202024" target="_blank" style={{ color: 'white' }}>
              +57 310 2719501
            </a>
          </p>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;