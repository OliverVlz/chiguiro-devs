// src/components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#inicio" className={styles.link}>Inicio</a> | 
      <a href="#categorias" className={styles.link}>Categorías</a> | 
      <a href="#cronograma" className={styles.link}>Cronograma</a> | 
      <a href="#contacto" className={styles.link}>Contacto</a> | 
      <a href="LINK_inscripcion" className={styles.link}>Inscripción!!</a>
    </nav>
  );
};

export default Navbar;
