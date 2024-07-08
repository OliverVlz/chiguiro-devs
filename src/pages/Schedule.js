// src/pages/Schedule.js
import React from 'react';
import jsPDF from 'jspdf';
import styles from './Schedule.module.css';

const Schedule = () => {
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Cronograma de actividades', 10, 10);
        doc.save('schedule.pdf');
    };

    return (
        <section id="cronograma" className={styles.scheduleSection}>
            <div className={styles.calendarsContainer}>
                <div className={styles.miniCalendar}>
                    <h3>Calendario Mensual</h3>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=America%2FBogota&bgcolor=%23f94340&mode=MONTH&showTitle=0&showCalendars=0&showTz=0&showPrint=0&showTabs=0&src=Mzg4N2Y2NmE5MDUzY2JjODNmNzJmMDQ3OGEzOTZlODNlNGUzMWIwZWFmYzgzZGU0NzdlZDkxNjM3M2M1NGNmOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000"
                        style={{ border: 'solid 1px #777' }}
                        width="200"
                        height="200"
                        
                    ></iframe>
                </div>
                <div className={styles.largeCalendar}>
                    <h3>Calendario Semanal</h3>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FBogota&bgcolor=%23f94340&mode=AGENDA&showTitle=0&showCalendars=0&showTz=0&showPrint=0&src=Mzg4N2Y2NmE5MDUzY2JjODNmNzJmMDQ3OGEzOTZlODNlNGUzMWIwZWFmYzgzZGU0NzdlZDkxNjM3M2M1NGNmOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000&dates=20240702/20240702"
                        style={{ border: 'solid 1px #777' }}
                        width="600"
                        height="400"
                    ></iframe>
                </div>
            </div>
            <button onClick={downloadPDF}>Descargar PDF</button>
        </section>
    );
};

export default Schedule;
