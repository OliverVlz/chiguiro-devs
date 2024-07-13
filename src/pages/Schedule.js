// src/pages/Schedule.js
import React, { useState } from 'react';
import styles from './Schedule.module.css';
import Button from './Carp_Categories/Button';

const Schedule = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1, label: 'REGISTRO',
            content: (
                <div>
                    <h3>Ingreso al Coliseo de la Universidad de los llanos (Unillanos)</h3>
                    <img src="/MAPA_CAMPUS_BARCELONA.webp" alt="Trofeo" className={styles.campus} />
                </div>
            )
        },
        {
            id: 2, label: 'Acto Inaugural',
            content: (
                <div>
                    <h3>Presentaciones y palabras de bienvenida</h3>
                </div>
            )
        },
        {
            id: 3, label: 'Apertura de Pistas',
            content: (
                <div>
                    <h3>Pistas disponibles para pruebas</h3>
                </div>
            )
        },
        {
            id: 4, label: 'Minisumo y Futbol-Col',
            content: (
                <div>
                    <h3>Inicio de Competencia Categorias Minisumo y Futbol Colegios</h3>
                    <ul>
                        <li>Eliminatorias de grupo</li>
                        <li>Clasificatoria a Octavos de Final</li>
                        <li>Clasificatoria a Cuartos de Final</li>
                        <li>Semifinales</li>
                        <li>Finales</li>
                    </ul>
                </div>
            )
        },
        {
            id: 5, label: 'Receso',
            content: (
                <div>
                    <h3>Receso para Almuerzo</h3>
                </div>
            )
        },
        {
            id: 6, label: 'SumoRC, Futbol y Velocista',
            content: (
                <div>
                    <h3>Inicio de Competencia Categorias Minisumo RC, Futbol y Velocista</h3>
                    <ul>
                        <li>Eliminatorias de grupo</li>
                        <li>Clasificatoria a Octavos de Final</li>
                        <li>Clasificatoria a Cuartos de Final</li>
                        <li>Semifinales</li>
                        <li>Finales</li>
                    </ul>
                </div>
            )
        },
        {
            id: 7, label: 'Desplazamiento',
            content: (
                <div>
                    <h3>Desplazamiento a la pista de Rally RC ubicada en el BUNKER</h3>
                </div>
            )
        },
        {
            id: 8, label: 'Rally RC',
            content: (
                <div>
                    <h3>Inicio de Competencia Categorias Rally RC</h3>
                    <ul>
                        <li>Eliminatorias de grupo</li>
                        <li>Clasificatoria a Octavos de Final</li>
                        <li>Clasificatoria a Cuartos de Final</li>
                        <li>Semifinales</li>
                        <li>Finales</li>
                    </ul>
                </div>
            )
        },
        {
            id: 9, label: 'Premiación',
            content: (
                <div>
                    <h3>Premiaciones de la Categorias</h3>
                    <img src="/Categories_Imagenes/Trofeo-01.png" alt="Trofeo" className={styles.trophy} />
                </div>
            )
        },
        {
            id: 10, label: 'Cierre',
            content: (
                <div>
                    <h3>Cierre del Evento</h3>
                </div>
            )
        }
    ];

    const TabContent = ({ activeTab, tabs }) => {
        const activeTabData = tabs.find(tab => tab.id === activeTab);
        return (
            <div className={styles.tabContent}>
                {typeof activeTabData?.content === 'string'
                    ? <p>{activeTabData.content}</p>
                    : activeTabData?.content}
            </div>
        );
    };

    return (
        <section id="cronograma" className={styles.scheduleSection}>
            <div>
                <h1>Cronograma</h1>
            </div>
            <div className={styles.popup}>
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <React.Fragment key={tab.id}>
                            <input
                                type="radio"
                                id={`tab${tab.id}`}
                                name="tab"
                                checked={activeTab === tab.id}
                                onChange={() => setActiveTab(tab.id)}
                            />
                            <label htmlFor={`tab${tab.id}`}>{tab.label}</label>
                        </React.Fragment>
                    ))}
                    <div className={styles.marker}>
                        <div className={styles.top}></div>
                        <div className={styles.bottom}></div>
                    </div>
                </div>
                <TabContent activeTab={activeTab} tabs={tabs} />
            </div>
            <div className={styles.boton}>
                <Button label="Descargar Calendario" downloadLink={"/Cronograma METABOTS.pdf"} />
            </div>

        </section>
    );
};

export default Schedule;