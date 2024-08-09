import React from 'react';
import styles from './AwardsFutbol.module.css';

const AwardsFutbol = () => {
  return (
    <section id="premiación" className={styles.awardsSection}>
      
      <div className={`${styles.column} ${styles.textContent}`}>
        <div className={styles.titleContainer}>
            <h3>FUTBOLRC</h3>
            <h4>1er Lugar: 500,000 pesos</h4>
            <p>El primer lugar de cada categoría se llevará un impresionante bono de 500.000 pesos. 
                Este premio reconoce la excelencia, el esfuerzo y la dedicación de los campeones en FUTBOLRC.</p>
            <h4>2do Lugar: 200,000 pesos</h4>
            <p>El segundo lugar de cada categoría recibirá un generoso bono de 200.000 pesos.
               Este premio celebra el talento y la determinación de los subcampeones en cada disciplina.</p>
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
