import React, { useState, useEffect, useRef } from 'react';
import styles from './Button_home_group.module.css'; // Importar el archivo de estilos

const Buttons = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showText, setShowText] = useState(false);
  const menuRef = useRef(null);
  const textRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowText(false); // Cerrar el otro elemento si está abierto
  };

  const toggleText = () => {
    setShowText(!showText);
    setShowMenu(false); // Cerrar el otro elemento si está abierto
  };

  const closeMenus = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
    if (textRef.current && !textRef.current.contains(event.target)) {
      setShowText(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenus);
    return () => {
      document.removeEventListener('mousedown', closeMenus);
    };
  }, []);

  const handleItemClick = (url) => {
    window.open(url, '_blank');
    setShowMenu(false); // Cerrar el menú después de hacer clic en un ítem
  };

  return (
    <div className={styles['buttons-container']}>
      <div className={styles['button-wrapper']} ref={menuRef}>
        <button className={styles['menu-button']} onClick={() => handleItemClick('https://www.youtube.com')}>
          Inscripción
        </button>
      </div>

      <div className={styles['button-wrapper']} ref={textRef}>
        <button className={styles['text-button']} onClick={toggleText}>
          Detalles
        </button>
      </div>
    </div>
  );
};

export default Buttons;