// src/pages/Contact.js
import React, { useState } from 'react';
import { CircleMenu, CircleMenuItem } from 'react-circular-menu';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import styles from './Contact.module.css';

const Contact = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = (label) => {
    console.log(`${label} clicked`);
    // Aquí puedes agregar la navegación o cualquier acción deseada
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado!');
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <h2>Contáctanos</h2>
      <p>Ponte en contacto con nosotros a través del siguiente formulario:</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        
        <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
          <div className={styles.animatedBackground}></div>
          <button type="submit" className={`${styles.submitButton} ${styles.animatedButton}`}>Enviar</button>
        </ScrollAnimation>
      </form>
      <div className={`${styles.circularMenuContainer} ${menuActive ? '' : styles.pulsing}`}>
        <CircleMenu
          startAngle={0}
          rotationAngle={135}
          itemSize={2}
          radius={6}  // Aumenta este valor si es necesario para la separación
          rotationAngleInclusive={false}
          className={styles.circularMenu}
          onMenuToggle={toggleMenu}
        >
          <CircleMenuItem tooltip="Home" onClick={() => handleClick('Home')}>
            <FaHome />
          </CircleMenuItem>
          <CircleMenuItem tooltip="About" onClick={() => handleClick('About')}>
            <FaInfoCircle />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Services" onClick={() => handleClick('Services')}>
            <FaServicestack />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Contact" onClick={() => handleClick('Contact')}>
            <FaEnvelope />
          </CircleMenuItem>
        </CircleMenu>
      </div>
      <hr />
    </section>
  );
};

export default Contact;
