// src/pages/Contact.js
import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',   // Añadir campo de teléfono
    Message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElement = e.target;
    const formData = new FormData(formElement);

    fetch('https://script.google.com/macros/s/AKfycbxwxacCrduF__LnqG0OJoIGSm-TDY-dTZiPSA2TZvTVBK9TzPs_qlTffB1eWPoQEzkFJg/exec', {
      method: 'POST',
      body: formData
    })
    .then((res) => res.text())  // Leemos la respuesta como texto
    .then((text) => {
      console.log('Server response:', text);  // Registro de la respuesta del servidor
      try {
        const data = JSON.parse(text);  // Intentamos parsear la respuesta como JSON
        console.log('Parsed response:', data);
        if (data.status === "success") {
          alert(data.message);
          setFormData({ Name: '', Email: '', Phone: '', Message: '' }); // Reiniciar el formulario incluyendo el campo de teléfono
        } else {
          alert('Error: ' + data.message);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        alert('Your message was successfully sent to the Google Sheets database!');  // Fallback en caso de que no sea JSON
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error al enviar el formulario');
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <h2>Contáctanos</h2>
      <p>Ponte en contacto con nosotros a través del siguiente formulario:</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="Name">Nombre:</label>
        <input 
          type="text" 
          id="Name" 
          name="Name" 
          value={formData.Name}
          onChange={handleChange}
          required 
        />
        
        <label htmlFor="Email">Correo Electrónico:</label>
        <input 
          type="email" 
          id="Email" 
          name="Email" 
          value={formData.Email}
          onChange={handleChange}
          required 
        />
        
        <label htmlFor="Phone">Número de Teléfono:</label> {/* Nuevo campo */}
        <input 
          type="tel" 
          id="Phone" 
          name="Phone" 
          value={formData.Phone}
          onChange={handleChange}
          required 
        />
        
        <label htmlFor="Message">Mensaje:</label>
        <textarea 
          id="Message" 
          name="Message" 
          value={formData.Message}
          onChange={handleChange}
          required 
        />
        
        <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
          <button type="submit" className={`${styles.submitButton} ${styles.animatedButton}`}>Enviar</button>
        </ScrollAnimation>
      </form>
    </section>
  );
};

export default Contact;
