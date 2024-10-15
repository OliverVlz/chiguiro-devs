import React from 'react';
import styles from './AwardsFutbol.module.css';

const AwardsFutbol = () => {
  return (
    <section id="premiación" className={styles.awardsSection}>
      
      <div className={`${styles.column} ${styles.textContent}`}>
        <div className={styles.titleContainer}>
            <h3>FUTBOL RC</h3>
            <h4>1er Lugar: Hasta 500,000 pesos</h4>
            <p>El primer lugar de cada categoría se llevará un impresionante bono de hasta 500.000 pesos. 
                Este premio reconoce la excelencia, el esfuerzo y la dedicación de los campeones en FUTBOL RC.</p>
            <p>El valor exacto del premio en efectivo y la cantidad de de los mismos están sujetos al número de inscritos por categoría y será informado una vez finalice la etapa de inscripción.</p>
        </div>    
            
        <hr />  
      </div>
      
      <div className={`${styles.column} ${styles.imageContainer}`}>
        <img src="/Categories_Imagenes/Trofeo-01.png" alt="Premios" className={styles.stylizedImage} />
      </div>
     

    </section>
  );
}; 

export default AwardsFutbol;
