// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css'; // Importa los estilos del módulo CSS
import logo from '../assets/LogoCircle.png'; // Ajusta el path según la ubicación de tu logo
// import Button_home_inscripcion from '../components/Button_home_inscripcion';
// import Button_home_detalles from '../components/Button_home_detalles';
import Buttons from '../components/Button_home_group';

const Home = () => {
  return (
    <section id="inicio" className={styles.homeSection}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo Metabots" className={styles.logo} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>METAROBOTS</h1>
          <h2 className={styles.subTitle}>UNILLANOS</h2>
          <div className={styles.line}></div>
          <p className={styles.description}>Primera competencia Nacional de Robótica</p>
          <p className={styles.description1}>Unillanos 2024</p>
          <div className={styles.button_home}>
            <Buttons />
          </div>
        </div>
      </div>
      <div className={styles.text_box}>
        <p>¡Bienvenidos al Primer Concurso de Robótica de la Universidad de los Llanos! 
        </p>
        <p>Explora el mundo de la tecnología y la innovación con nuestro emocionante evento de robótica. Organizado por la Universidad de los Llanos junto con nuestros talentosos estudiantes. 
        </p>
        <p>No te lo pierdas! ¡Sé parte del futuro hoy!
        </p>
      </div>
    </section>
  );
};

export default Home;
