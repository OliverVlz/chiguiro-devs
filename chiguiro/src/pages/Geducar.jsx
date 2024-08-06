import React, { useState } from 'react';
import styles from './Geducar.module.css';

const Geducar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => window.open('https://geducar.unillanos.edu.co/evento-detalle/125/', '_blank')}
      >
        Registrarme en Geducar
      </button>
      <button className={styles.button} onClick={openModal}>
        *Leer después de pagar*
      </button>

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Generación de recibo de pago</h2>
            <p>
              Una vez realizada la inscripción en <a href="https://geducar.unillanos.edu.co/evento-detalle/125/" target="_blank" rel="noopener noreferrer">https://geducar.unillanos.edu.co</a> se debe enviar un correo a <a href="mailto:ginvestigacioneysi@unillanos.edu.co">ginvestigacioneysi@unillanos.edu.co</a> con los siguientes datos:
            </p>
            <ul>
              <li>Asunto: Generación recibo de pago trabajo ID (para el ID revisar en: <a href="https://geducar.unillanos.edu.co/evento-detalle/125/" target="_blank" rel="noopener noreferrer">Participante METAROBOTS 2024</a>)</li>
              <li>Nombres y apellidos.</li>
              <li>Número de cédula, lugar de expedición.</li>
              <li>Teléfono.</li>
              <li>Dirección.</li>
              <li>Ciudad.</li>
              <li>Correo electrónico.</li>
              <li>Rol con el cual participará en el evento: (Estudiantes Unillanos / Estudiantes otras instituciones / Egresados Unillanos / Profesionales y particulares).</li>
              <li>Institución a la cual representa.</li>
            </ul>
            <button className={styles.closeButton} onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Geducar;
