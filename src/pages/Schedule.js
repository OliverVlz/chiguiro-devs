// src/pages/Schedule.js
import React, { useState } from 'react';
import styles from './Schedule.module.css';
import Button from './Carp_Categories/Button';

const Schedule = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { id: 1, label: 'REGISTRO' },
        { id: 2, label: 'Acto Inaugural' },
        { id: 3, label: 'Apertura de Pistas' },
        { id: 4, label: 'Inicio Competencia - Minisumo y Futbol Colegios' },
        { id: 5, label: 'Receso' },
        { id: 6, label: 'Inicio Competencia - Sumo RC, Futbol y Velocista' },
        { id: 7, label: 'Desplazamiento a la Pista de Rally'},
        { id: 8, label: 'Inicio Competencia - Rally RC'},
        { id: 9, label: 'Premiación'},
        { id: 10, label: 'Cierre'}
    ];

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
            </div>
            <Button label="Descargar Calendario" downloadLink={"/Cronograma METABOTS.pdf"} />
        </section>
    );
};

export default Schedule;