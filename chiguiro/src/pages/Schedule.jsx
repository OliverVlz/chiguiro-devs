import React, { useState, useEffect, useRef } from "react";
import styles from "./Schedule.module.css";
import Button from "./Carp_Categories/Button";
import Countdown from "../components/countdown";
import axios from "axios";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [scheduleData, setScheduleData] = useState([]);
  const targetDat_1 = new Date(2024, 9, 25, 7, 0, 0);
  const [currentOption, setCurrentOption] = useState("option1");
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
      const url =
        "https://sheet.best/api/sheets/4dd8895a-1789-4f01-96ce-8de37448b7db";
      try {
        const response = await axios.get(url);
        const data = response.data;
        const schedule = data.reduce((acc, row) => {
          acc[row.ID] = row;
          return acc;
        }, {});
        setScheduleData(schedule);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchScheduleData();
  }, []);

  const tabs = {
    option1: [
      {
        id: 1,
        label: (
          <div>
            <p>Registro</p>
            <p>{scheduleData[1]?.HORA || "7:00 - 8:30 am"}</p>
          </div>
        ),
        content: (
          <div>
            <h1>Registro</h1>
            <h2>Registro - Ingreso al Coliseo Universidad de los Llanos</h2>
            <h3>7:00 - 8:30 am</h3>
            <p>
              ¡Bienvenidos! Los participantes deben ingresar y registrarse en el
              Coliseo de la Universidad de los Llanos. Por favor, asegúrese de
              llegar a tiempo para completar el proceso de registro y recibir su
              kit de bienvenida. **El cronograma es susceptible a cambios, por
              lo que se recomienda que los participantes estén disponibles
              durante todo el día.**
            </p>
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div>
            <p>Acto Inaugural</p>
            <p> 8:30 - 9:30 am</p>
          </div>
        ),
        content: (
          <div>
            <h1>Acto Inaugural</h1>
            <h3>8:30 - 9:30 am</h3>
            <p>
              La ceremonia inaugural será un evento emocionante donde se
              presentarán los detalles del día y se dará la bienvenida oficial a
              todos los asistentes. Disfrutaremos de discursos motivadores y una
              presentación especial.
            </p>
          </div>
        ),
      },
      {
        id: 3,
        label: (
          <div>
            <p>Apertura de Pistas</p>
            <p> 9:30 - 10:30 am </p>
          </div>
        ),
        content: (
          <div>
            <h1>Apertura de Pistas para Pruebas</h1>
            <h3>9:30 - 10:30 am</h3>
            <p>
              Después de la ceremonia inaugural, las pistas estarán abiertas
              para que los participantes puedan familiarizarse con el área de
              competencia y realizar pruebas libres. Es una excelente
              oportunidad para ajustar los últimos detalles antes del inicio
              oficial de las competencias.
            </p>
          </div>
        ),
      },
      {
        id: 4,
        label: (
          <div>
            <p>Minisumo - Futbol</p>
            <p> 11:00 - 12:30 am </p>
          </div>
        ),
        content: (
          <div>
            <h1>Inicio Competencia - Minisumo y Futbol Colegios</h1>
            <h3>11:00 - 12:30 am</h3>
            <p>
              La competencia se desarrollará en varias fases para determinar los
              ganadores de las categorías Minisumo y Futbol Colegios. Las fases
              incluyen:
            </p>
            <ul>
              <li>Eliminatorias de Grupo</li>
              <li>Clasificatoria a Octavos de Final</li>
              <li>Clasificatoria a Cuartos de Final</li>
              <li>Semifinales</li>
              <li>Finales</li>
            </ul>
          </div>
        ),
      },
      {
        id: 5,
        label: (
          <div>
            <p>Receso</p>
            <p> 1:00 - 2:00 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Receso</h1>
            <h3>1:00 - 2:00 pm</h3>
            <p>
              Tiempo para descansar, recargar energías y disfrutar de un
              almuerzo. Los participantes pueden relajarse y prepararse para las
              próximas competencias. **Recuerde estar disponible para los
              eventos de la tarde.**
            </p>
          </div>
        ),
      },
      {
        id: 6,
        label: (
          <div>
            <p>Sumo RC - Velocista</p>
            <p> 2:30 - 3:30 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Inicio Competencia - Sumo RC, Sumo Autónomo y Velocista</h1>
            <h3>2:30 - 3:30 pm</h3>
            <p>
              Las competencias de Sumo RC, Sumo Autónomo y Velocista darán
              inicio. Se desarrollarán en varias fases:
            </p>
            <ul>
              <li>Eliminatorias de Grupo</li>
              <li>Clasificatoria a Octavos de Final</li>
              <li>Clasificatoria a Cuartos de Final</li>
              <li>Semifinales</li>
              <li>Finales</li>
            </ul>
          </div>
        ),
      },
      {
        id: 7,
        label: (
          <div>
            <p>Desplazamiento</p>
            <p> 3:50 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Desplazamiento a la Pista de Rally - Bunker</h1>
            <h3>3:50 pm</h3>
            <p>
              Los participantes y el público se trasladarán a la pista de Rally,
              ubicada en el Bunker. Es importante seguir las indicaciones para
              un desplazamiento ordenado y seguro.
            </p>
          </div>
        ),
      },
      {
        id: 8,
        label: (
          <div>
            <p>Rally RC</p>
            <p> 4:00 - 5:30 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Inicio Competencia - Rally RC</h1>
            <h3>4:00 - 5:30 pm</h3>
            <p>
              Comienza la emocionante competencia de Rally RC, con las
              siguientes fases:
            </p>
            <ul>
              <li>Eliminatorias de Grupo</li>
              <li>Clasificatoria a Octavos de Final</li>
              <li>Clasificatoria a Cuartos de Final</li>
              <li>Semifinales</li>
              <li>Finales</li>
            </ul>
          </div>
        ),
      },
      {
        id: 9,
        label: (
          <div>
            <p>Premiación</p>
            <p> 5:40 - 6:30 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Premiación - Todas las Categorías</h1>
            <h3>5:40 - 6:30 pm</h3>
            <p>
              Se llevará a cabo la ceremonia de premiación para todas las
              categorías. Los ganadores recibirán sus trofeos y medallas en
              reconocimiento a su esfuerzo y desempeño en las competencias.
            </p>
          </div>
        ),
      },
      {
        id: 10,
        label: (
          <div>
            <p>Cierre</p>
            <p> 6:30 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Cierre - Coliseo Universidad de los Llanos</h1>
            <h3>6:30 pm</h3>
            <p>
              El evento culminará con un acto de clausura en el Coliseo de la
              Universidad de los Llanos. Agradecemos a todos los participantes,
              organizadores y público por hacer de este evento un éxito.
            </p>
          </div>
        ),
      },
    ],

    option2: [
      {
        id: 1,
        label: (
          <div>
            <p>Registro</p>
            <p>{scheduleData[1]?.HORA || "9:00 - 9:30 am"}</p>
          </div>
        ),
        content: (
          <div>
            <h1>Registro</h1>
            <h2>Registro</h2>
            <h3>9:00 - 9:30 am</h3>
            <p>
              ¡Bienvenidos! Los participantes deben de ingresar y registrarse.
              Por favor, asegúrese de llegar a tiempo para completar el proceso
              de registro y recibir su kit de bienvenida.
            </p>
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div>
            <p>Acto Inaugural</p>
            <p>10:30 - 11:30 am</p>
          </div>
        ),
        content: (
          <div>
            <h1>Acto Inaugural</h1>
            <h3>10:30 - 11:30 am</h3>
            <p>
              La ceremonia inaugural será un evento emocionante donde se
              presentarán los detalles del día y se dará la bienvenida oficial a
              todos los asistentes. Disfrutaremos de discursos motivadores y una
              presentación especial.
            </p>
          </div>
        ),
      },
      {
        id: 3,
        label: (
          <div>
            <p>Apertura de Pistas</p>
            <p> 11:30 - 12:30 am </p>
          </div>
        ),
        content: (
          <div>
            <h1>Apertura de Pistas para Pruebas</h1>
            <h3>11:30 - 12:30 am</h3>
            <p>
              Después de la ceremonia inaugural, las pistas de FUTBOL RC estarán
              abiertas para que los participantes puedan familiarizarse con el
              área de competencia y realizar pruebas libres. Es una excelente
              oportunidad para ajustar los últimos detalles antes del inicio
              oficial de las competencias.
            </p>
            {/* <img src="/Pistas-remove.webp" alt="Pistas" className={styles.images} />    */}
          </div>
        ),
      },
      {
        id: 4,
        label: (
          <div>
            <p>Futbol Colegios</p>
            <p> 12:30 - 2:30 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Inicio Competencia - Futbol Colegios</h1>
            <h3>12:30 - 2:30 pm </h3>
            <p>
              La competencia se desarrollará en varias fases para determinar los
              ganadores de Futbol Colegios. Las fases son las siguientes:
            </p>
            <ul>
              <li>Eliminatorias de Grupo</li>
              <li>Clasificatoria a Octavos de Final</li>
              <li>Clasificatoria a Cuartos de Final</li>
              <li>Semifinales</li>
              <li>Finales</li>
            </ul>
            <img
              src="/Categories_Imagenes/FUTBOLRC1.png"
              alt="Sumo, Futbol"
              className={styles.images}
            />
          </div>
        ),
      },
      {
        id: 5,
        label: (
          <div>
            <p>Premiación</p>
            <p> 2:50 - 3:30 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Premiación</h1>
            <h3>2:50 - 3:30 pm</h3>
            <p>
              Se llevará a cabo la ceremonia de premiación para Futbol Colegios.
              Los ganadores recibirán sus trofeos y medallas en reconocimiento a
              su esfuerzo y desempeño en las competencias.
            </p>
          </div>
        ),
      },
      {
        id: 6,
        label: (
          <div>
            <p>Cierre</p>
            <p> 3:40 pm </p>
          </div>
        ),
        content: (
          <div>
            <h1>Cierre</h1>
            <h3>3:40 pm</h3>
            <p>
              El evento culminará con un acto de clausura. Agradecemos a todos
              los participantes, organizadores y público por hacer de este
              evento un éxito.
            </p>
          </div>
        ),
      },
    ],
  };

  const numberOfTabs = tabs[currentOption].length;

  useEffect(() => {
    document.documentElement.style.setProperty("--tab-count", numberOfTabs);

    const tabsContainer = document.querySelector(`.${styles.tabs}`);
    if (numberOfTabs === 10) {
      tabsContainer.classList.add(styles.option1);
    } else {
      tabsContainer.classList.remove(styles.option1);
    }
  }, [currentOption, numberOfTabs]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -70; // Offset to adjust for fixed headers, etc.
        const yPosition =
          contentRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }, 0);
  };

  const handleTabSwitch = (option) => {
    setCurrentOption(option);
    setActiveTab(1); // Reset active tab when switching options
  };

  const TabContent = ({ activeTab, tabs, contentRef }) => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab);
    return (
      <div ref={contentRef} className={styles.tabContent}>
        {activeTabData?.content}
      </div>
    );
  };

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
          <p>El cronograma de la competencia es susceptible a cambios y sera informado una vez finalice la etapa de inscripción.</p>
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

      <div className={styles.popup}>
        <div className={styles.tabs}>
          {tabs[currentOption].map((tab, index) => (
            <React.Fragment key={tab.id}>
              <input
                type="radio"
                id={`tab${tab.id}`}
                name="tab"
                checked={activeTab === tab.id}
                onChange={() => handleTabChange(tab.id)}
                style={{ "--tab-index": index + 1 }}
              />
              <label htmlFor={`tab${tab.id}`}>{tab.label}</label>
            </React.Fragment>
          ))}
          <div
            className={styles.marker}
            style={{
              left: `${(activeTab - 1) * (100 / numberOfTabs)}%`,
              width: `${100 / numberOfTabs}%`,
            }}
          >
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
          </div>
        </div>
        <TabContent
          activeTab={activeTab}
          tabs={tabs[currentOption]}
          contentRef={contentRef}
        />
      </div>
    </section>
  );
};

export default Schedule;
