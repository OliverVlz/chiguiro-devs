// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'categorias', 'cronograma', 'contacto', 'inscripcion'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const SCROLL_DURATION = 200;

  return (
    <nav className={styles.navbar}>
      <ScrollLink to="inicio" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'inicio' ? styles.active : ''}`}>Inicio</ScrollLink>  
      <ScrollLink to="categorias" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'categorias' ? styles.active : ''}`}>Categorías</ScrollLink> 
      <ScrollLink to="cronograma" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'cronograma' ? styles.active : ''}`}>Cronograma</ScrollLink> 
      <ScrollLink to="contacto" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'contacto' ? styles.active : ''}`}>Contacto</ScrollLink> 
      <a href="https://www.canva.com/design/DAGIFHOapIs/sOxbU8yE8_oNPTyURHvu4Q/edit" className={`${styles.link} ${styles.inscripcionLink}`} target="_blank" rel="noopener noreferrer">Inscripción!!</a>
    </nav>
  );
};

export default Navbar;
