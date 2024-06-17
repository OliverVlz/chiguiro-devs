// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className={styles.contactInfo}>
          <p>Contacto: info@metabotsunillanos.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className={styles.otherLinks}>
          <a href="#inicio" className={styles.footerLink}>Inicio</a>
          <a href="#categorias" className={styles.footerLink}>Categorías</a>
          <a href="#cronograma" className={styles.footerLink}>Cronograma</a>
          <a href="#contacto" className={styles.footerLink}>Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
