import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'categorias', 'cronograma', 'ubicacion', 'contacto', 'inscripcion'];
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        &#9776;
      </div>
      <div className={`${styles.links} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
        <ScrollLink to="inicio" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'inicio' ? styles.active : ''}`} onClick={toggleMobileMenu}>Inicio</ScrollLink>  
        <ScrollLink to="categorias" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'categorias' ? styles.active : ''}`} onClick={toggleMobileMenu}>Categorías</ScrollLink> 
        <ScrollLink to="cronograma" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'cronograma' ? styles.active : ''}`} onClick={toggleMobileMenu}>Cronograma</ScrollLink> 
        <ScrollLink to="ubicacion" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'ubicacion' ? styles.active : ''}`} onClick={toggleMobileMenu}>Ubicación</ScrollLink>
        <ScrollLink to="contacto" smooth={true} duration={SCROLL_DURATION} className={`${styles.link} ${activeSection === 'contacto' ? styles.active : ''}`} onClick={toggleMobileMenu}>Contacto</ScrollLink> 
        <a href="https://shorturl.at/TVI7Y" className={`${styles.link} ${styles.inscripcionLink}`} target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Pre-Inscripción!!</a>
      </div>
    </nav>
  );
};

export default Navbar;
