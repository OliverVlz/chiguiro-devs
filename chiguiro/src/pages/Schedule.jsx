import React, { useState, useEffect } from "react";
import styles from "./Schedule.module.css";
import Button from "./Carp_Categories/Button";
import Countdown from "../components/countdown";
import axios from "axios";

const Schedule = () => {
  const targetDat_1 = new Date(2024, 9, 25, 7, 0, 0);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchScheduleData = async () => {
      const url =
        "https://sheet.best/api/sheets/4dd8895a-1789-4f01-96ce-8de37448b7db";
      try {
        const response = await axios.get(url);
        setScheduleData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchScheduleData();
  }, []);

  return (
    <section id="cronograma" className={styles.scheduleSection}>
      <div className={styles.titleContainer}>
        <h1>CRONOGRAMA</h1>
      </div>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownExplanation}>
          <h2>Tiempo restante para el inicio del evento</h2>
        </div>
        <div className={styles.countdownWrapper}>
          <Countdown targetDate={targetDat_1} />
        </div>
        <div className={styles.countdownExplanation}>
          <h2>
            <span className={styles.optionTexto}>
              <>
                Competencia <span className={styles.highlight}>Viernes</span> 25
                de Octubre de 2024
              </>
            </span>
          </h2>
          <p>El cronograma de la competencia ha cambiado!! A continuación el nuevo cronograma</p>
        </div>
      </div>

      <div className={styles.tabSwitcher}>
        <div className={styles.boton}>
          <a
            href={
              "https://drive.google.com/file/d/1m5xLTg43UM30AwpG9qQyE6gfIEgwXoQN/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button label={"Descargar Calendario General 25 Octubre"} />
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/Organizers/cronograma.png"
          alt="Descripción de la imagen"
          className={styles.simpleImage}
        />
      </div>
    </section>
  );
};

export default Schedule;
