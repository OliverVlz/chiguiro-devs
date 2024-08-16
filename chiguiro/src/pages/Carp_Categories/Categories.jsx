// src/pages/Categories.js
import React from 'react';
import styles from './Categories.module.css';
import Card from './Card'; // Importamos el componente Card

const Categories = () => {
  return (
    <section id="categorias" className={styles.categoriesSection}>
      <div className={styles.titleContainer}>
        <h1>CATEGORÍAS</h1>
        <h2>Universidades - Avanzados - Entusiastas - Junior (Colegios)</h2>
      </div>
      
      <div className={styles.cardContainer}>
        <Card
          imgSrc="/Categories_Imagenes/SUMO1.png"
          constentHead="SUMO AUTÓNOMO"
          constentPara="Combate de robots autónomos en un Dhoyo. El objetivo en esta  competencia es encontrar y empujar al oponente fuera del área de combate. Gana el que saque al oponente o quede último dentro."
          downloadLink="https://drive.google.com/file/d/1F4MbzVQ4XCf1cca_OwIgzSJ__bvdYJDt/view?usp=sharing"
        />

        
        <Card
          imgSrc="/Categories_Imagenes/VELOCISTA1.png"
          constentHead="VELOCISTAS"
          constentPara="Robots velocistas compiten en una pista trazada por una línea, completando el recorrido en el menor tiempo. La pista incluye curvas cerradas, abiertas y rectas. Es una emocionante competencia."
          downloadLink="https://drive.google.com/file/d/1S_NdYALzIjQU-iSCdH8iweorIwhUUW8N/view?usp=sharing"
        />

        
        <Card
          imgSrc="/Categories_Imagenes/RALLY1.png"
          constentHead="RALLY"
          constentPara="Carrera de vehículos a control remoto en una pista de tierra. Los participantes maniobran a través de curvas, saltos y obstáculos. Gana quien complete el recorrido en el menor tiempo sin salirse."
          downloadLink="https://drive.google.com/file/d/124lxroq4-QnFVzkiTOw1w4D_iwDNpYJ8/view?usp=sharing"
        />

        <Card
          imgSrc="/Categories_Imagenes/SUMORC1.png"
          constentHead="SUMO RC"
          constentPara="Combate de robots en un Dhoyo, controlados por radio frecuencía. El objetivo es sacar al oponente del área de combate. Gana quien saque al oponente o quede último dentro del Dhoyo."
          downloadLink="https://drive.google.com/file/d/1fzcAsiFogt-p7vmWTp-D5tsQbQNWz5dI/view?usp=sharing"
        />
      </div>
 
      <div className={styles.titleContainer}>
        <h2>Solo Junior (Colegios)</h2>
      </div>


      <div className={styles.cardContainer}>
        <Card
          imgSrc="/Categories_Imagenes/FUTBOLRC1.png"
          constentHead="FUTBOL RC"
          constentPara="Competiciones de fútbol con robots radiocontrolados para niños de colegio. Los participantes usan habilidades y estrategias para ganar partidos. Una experiencia emocionante de tecnología y deporte."
          downloadLink="https://drive.google.com/file/d/18f96vTa04tlswd8NdkaEPAHFVyFWtJAt/view?usp=sharing"
        />
      </div>
      
    </section>
  );
};

export default Categories;
