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
          constentPara="Combate entre dos robots autónomos que 
                        se realiza sobre un Dhoyo, consiste en encontrar de 
                        manera autónoma al oponente y empujarlo hasta lograr
                        sacarlo del área de combate, el contrincante que
                        logre sacar a su oponente del Dhoyo, o en su 
                        caso el último en salir del Dhoyo será el ganador del
                        encuentro. Esta competencia es la más llamativa y
                        con el mayor número de participantes."
          downloadLink="/Categories_pdf/MiniSumoAutonomo.pdf"
        />

        
        <Card
          imgSrc="/Categories_Imagenes/VELOCISTA1.png"
          constentHead="VELOCISTAS"
          constentPara="¡Prepárate para la emoción con nuestros robots velocistas! Estos robots, similares a la F1 en pruebas de clasificación, 
                        corren en una pista trazada por una línea, buscando completar el recorrido en el menor tiempo posible. Las pistas incluyen curvas cerradas y abiertas y largas rectas, todo un reto emocionante. 
                        ¡No te pierdas este espectáculo lleno de adrenalina y velocidad!  "
          downloadLink="/Categories_pdf/Velocistas.pdf"
        />

        
        <Card
          imgSrc="/Categories_Imagenes/RALLY1.png"
          constentHead="RALLY"
          constentPara="Carrera entre vehículos a
                        control remoto que se lleva a cabo en una pequeña pista de tierra. Los participantes deben maniobrar sus carros RC a través de curvas cerradas,
                        saltos y obstáculos, demostrando habilidades de control y velocidad. El objetivo es completar el recorrido
                        en el menor tiempo posible sin salirse de la
                        pista. El competidor que logre cruzar la línea de meta primero
                        será el ganador de la carrera."
          downloadLink="/Categories_pdf/MiniSumoAutonomo.pdf"
        />

        <Card
          imgSrc="/Categories_Imagenes/SUMORC1.png"
          constentHead="SUMO RC"
          constentPara="Combate entre dos robots que se realiza sobre
                        un Dhoyo. Consiste en manejar el robot por medio de un 
                        radio-control y sacar al oponente del área de combate,
                        el contrincante que logre sacar a su oponente del Dhoyo,
                        o en su caso el último 
                        en salir del Dhoyo será el ganador del encuentro."
          downloadLink="/Categories_pdf/MiniSumoRC.pdf"
        />
      </div>
 
      <div className={styles.titleContainer}>
        <h2>Solo Junior (Colegios)</h2>
      </div>


      <div className={styles.cardContainer}>
        <Card
          imgSrc="/Categories_Imagenes/FUTBOLRC1.png"
          constentHead="FUTBOL RC"
          constentPara="¡Bienvenidos al emocionante mundo del fútbol RC! Aquí, tus habilidades y estrategias
                        se fusionan para dar vida a robots que juegan al fútbol de manera radiocontrolada. 
                        Esta categoría es exclusiva para niños de colegio, quienes compiten en partidos llenos de 
                        acción, donde la precisión y la táctica son clave para ganar. 
                        ¡No te pierdas la oportunidad de ser parte de este fascinante espectáculo de tecnología y deporte!"
          downloadLink="/Categories_pdf/FutbolRC.pdf"
        />
      </div>
      
    </section>
  );
};

export default Categories;
