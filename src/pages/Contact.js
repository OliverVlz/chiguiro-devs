// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import styles from './Contact.module.css';

const formatPhoneNumber = (phone) => {
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.length > 10) {
    cleaned = cleaned.slice(0, 10);
  }
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(+57) ${match[1]} ${match[2]} ${match[3]}`;
  }

  return `(+57) ${cleaned}`;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: ''
  });

  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      Phone: formatPhoneNumber('')
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const phoneDigits = formData.Phone.replace(/\D/g, '');
    if (phoneDigits.length !== 12) {
      setPhoneError('El número de teléfono debe contener exactamente 10 dígitos.');
      setIsLoading(false);
      return;
    }

    if (!formData.Email.includes('.com') && !formData.Email.includes('.co')) {
      setEmailError('El correo electrónico debe contener ".com" o ".co".');
      setIsLoading(false);
      return;
    }

    if (formData.Name.length < 4) {
      setNameError('El nombre debe tener al menos 4 caracteres.');
      setIsLoading(false);
      return;
    }

    setPhoneError('');
    setEmailError('');
    setNameError('');

    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    fetch('https://script.google.com/macros/s/AKfycbxwxacCrduF__LnqG0OJoIGSm-TDY-dTZiPSA2TZvTVBK9TzPs_qlTffB1eWPoQEzkFJg/exec', {
      method: 'POST',
      body: formDataToSend
    })
    .then((res) => res.text())
    .then((text) => {
      try {
        const data = JSON.parse(text);
        if (data.status === "success") {
          setSuccessMessage("Formulario enviado correctamente :) Nos pondremos en contacto pronto!!");
          setFormData({ Name: '', Email: '', Phone: formatPhoneNumber(''), Message: '' });
          setMessageLength(0);
          setTimeout(() => setSuccessMessage(''), 5000);
        } else {
          alert('Error: ' + data.message);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        alert('Error de envio del formulario, intentalo de nuevo :(');
      }
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error al enviar el formulario');
      setIsLoading(false);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Phone') {
      let cleanedValue = value.replace(/[^0-9]/g, '');
      if (cleanedValue.startsWith('57')) {
        cleanedValue = cleanedValue.substring(2);
      }
      const formattedPhone = formatPhoneNumber(cleanedValue);
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedPhone
      }));
    } else if (name === 'Name') {
      const cleanedValue = value.replace(/[0-9]/g, '');
      setFormData(prevState => ({
        ...prevState,
        [name]: cleanedValue
      }));
    } else if (name === 'Message') {
      if (value.length <= 200) {
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
        setMessageLength(value.length);
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <div className={styles.titleContainer}>
        <h2>Contáctanos</h2>
        <p>Ponte en contacto con nosotros a través del siguiente formulario:</p>
      </div>
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
        {nameError && <p className={styles.error}>{nameError}</p>}
        
        <label htmlFor="Email">Correo Electrónico:</label>
        <input 
          type="email" 
          id="Email" 
          name="Email" 
          value={formData.Email}
          onChange={handleChange}
          required 
        />
        {emailError && <p className={styles.error}>{emailError}</p>}
        
        <label htmlFor="Phone">Número de Teléfono:</label>
        <input 
          type="tel" 
          id="Phone" 
          name="Phone" 
          value={formData.Phone}
          onChange={handleChange}
          required 
        />
        {phoneError && <p className={styles.error}>{phoneError}</p>}
        
        <label htmlFor="Message">Mensaje:</label>
        <textarea 
          id="Message" 
          name="Message" 
          value={formData.Message}
          onChange={handleChange}
          required 
        />
        <p>{messageLength}/200</p>
        
        <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
          <button type="submit" className={`${styles.submitButton}`} disabled={isLoading}>
            Enviar
          </button>
        </ScrollAnimation>
        {isLoading && <div className={styles.loader}>Cargando...</div>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
