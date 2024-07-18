// src/pages/Schedule.js
import React, { useState } from 'react';
import styles from './Schedule.module.css';
import Button from './Carp_Categories/Button';

const Schedule = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1, label: (
                <div>
                    <p>Registro</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        7:00 - 8:30 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Registro</h1>
                    <h3>Registro - Ingreso al Coliseo Universidad de los Llanos</h3>
                    <h3>7:00 - 8:30 am</h3>
                    <p>¡Bienvenidos! Los participantes deben ingresar y registrarse en el Coliseo de la Universidad de los Llanos. Por favor, asegúrese de llegar a tiempo para completar el proceso de registro y recibir su kit de bienvenida.</p>
                </div>
            )
        },
        {
            id: 2, label: (
                <div>
                    <p>Acto Inaugural</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        8:30 - 9:30 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Acto Inaugural</h1>
                    <h3>8:30 - 9:30 am</h3>
                    <p>La ceremonia inaugural será un evento emocionante donde se presentarán los detalles del día y se dará la bienvenida oficial a todos los asistentes. Disfrutaremos de discursos motivadores y una presentación especial.</p>
                </div>
            )
        },
        {
            id: 3, label: (
                <div>
                    <p>Apertura de Pistas</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        9:30 - 10:30 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Apertura de Pistas para Pruebas</h1>
                    <h3>9:30 - 10:30 am</h3>
                    <p>Después de la ceremonia inaugural, las pistas estarán abiertas para que los participantes puedan familiarizarse con el área de competencia y realizar pruebas libres. Es una excelente oportunidad para ajustar los últimos detalles antes del inicio oficial de las competencias.</p>
                </div>
            )
        },
        {
            id: 4, label: (
                <div>
                    <p>Minisumo - Futbol</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        11:00 - 12:30 am
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Inicio Competencia - Minsumo y Futbol Colegios</h1>
                    <h3>11:00 - 12:30 am</h3>   
                    <p>La competencia se desarrollará en varias fases para determinar los ganadores de las categorías Minisumo y Futbol Colegios. Las fases son las siguientes:</p>
                    <ul>
                        <li>Eliminatorias de Grupo</li>
                        <li>Clasificatoria a Octavos de Final</li>
                        <li>Clasificatoria a Cuartos de Final</li>
                        <li>Semifinales</li>
                        <li>Finales</li>
                        
                    </ul>
                </div>
            )
        },
        {
            id: 5, label: (
                <div>
                    <p>Receso</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        1:00 - 2:00 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Receso</h1>
                    <h3>1:00 - 2:00 pm</h3>
                    <p>Tiempo para descansar, recargar energías y disfrutar de un almuerzo. Los participantes pueden relajarse y prepararse para las próximas competencias.</p>
                </div>
            )
        },
        {
            id: 6, label: (
                <div>
                    <p>SumoRC - Futbol - Velocista</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        2:30 - 3:30 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Inicio Competencia - Sumo RC, Futbol y Velocista</h1>
                    <h3>2:30 - 3:30 pm</h3>   
                    <p>Las competencias de Sumo RC, Futbol y Velocista darán inicio. Al igual que en la mañana, se desarrollarán en varias fases:</p>
                    <ul>
                        <li>Eliminatorias de Grupo</li>
                        <li>Clasificatoria a Octavos de Final</li>
                        <li>Clasificatoria a Cuartos de Final</li>
                        <li>Semifinales</li>
                        <li>Finales</li>
                    </ul>
                </div>
            )
        },
        {
            id: 7, label: (
                <div>
                    <p>Desplazamiento</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        3:50 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Desplazamiento a la Pista de Rally - Bunker</h1>
                    <h3>3:50 pm</h3>
                    <p>Los participantes y el público se trasladarán a la pista de Rally, ubicada en el Bunker. Es importante seguir las indicaciones para un desplazamiento ordenado y seguro.</p>
                </div>
            )
        },
        {
            id: 8, label: (
                <div>
                    <p>Rally RC</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        4:00 - 5:30 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Inicio Competencia - Rally RC</h1>
                    <h3>4:00 - 5:30 pm</h3>   
                    <p>Comienza la emocionante competencia de Rally RC, con las siguientes fases:</p>
                    <ul>
                        <li>Eliminatorias de Grupo</li>
                        <li>Clasificatoria a Octavos de Final</li>
                        <li>Clasificatoria a Cuartos de Final</li>
                        <li>Semifinales</li>
                        <li>Finales</li>
                    </ul>
                </div>
            )
        },
        {
            id: 9, label: (
                <div>
                    <p>Premiación</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        5:40 - 6:30 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Premiación - Todas las Categorías</h1>
                    <h3>5:40 - 6:30 pm</h3>
                    <p>Se llevará a cabo la ceremonia de premiación para todas las categorías. Los ganadores recibirán sus trofeos y medallas en reconocimiento a su esfuerzo y desempeño en las competencias.</p>
                </div>
            )
        },
        {
            id: 10, label: (
                <div>
                    <p>Cierre</p>
                    <p style={{
                        color: 'red',
                        fontSize: '0.8em',
                        margin: 0,
                        padding: 0
                    }}>
                        6:30 pm
                    </p>
                </div>
            ),
            content: (
                <div>
                    <h1>Cierre - Coliseo Universidad de los Llanos</h1>
                    <h3>6:30 pm</h3>
                    <p>El evento culminará con un acto de clausura en el Coliseo de la Universidad de los Llanos. Agradecemos a todos los participantes, organizadores y público por hacer de este evento un éxito.</p>
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