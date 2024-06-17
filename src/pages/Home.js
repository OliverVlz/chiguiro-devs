// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id="inicio" className={styles.homeSection}>
      <h1>METABOTS</h1>
      <h1>UNILLANOS</h1>
      <h2>Primera competencia Nacional de Robotica Unillanos 2024</h2>
      <hr />
      <h2>Ubicación</h2>
      <p>**Mapa e información de como llegar**</p>
      <hr />
    </section>
  );
};

export default Home;
