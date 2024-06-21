// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css'; // Importa los estilos del módulo CSS
import logo from '../assets/LogoCircle.png'; // Ajusta el path según la ubicación de tu logo

const Home = () => {
  return (
    <section id="inicio" className={styles.homeSection}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo Metabots" className={styles.logo} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>METABOTS</h1>
          <h2 className={styles.subTitle}>UNILLANOS</h2>
          <div className={styles.line}></div>
          <h3 className={styles.description}>Primera competencia Nacional de Robótica Unillanos 2024</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;

