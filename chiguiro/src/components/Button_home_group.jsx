import React, { useState, useEffect, useRef } from "react";
import styles from "./Button_home_group.module.css"; // Importar el archivo de estilos

const Buttons = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showText, setShowText] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Estado para el modal

  const menuRef = useRef(null);
  const textRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowText(false);
  };

  const toggleText = () => {
    setShowText(!showText);
    setShowMenu(false);
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
    document.addEventListener("mousedown", closeMenus);
    return () => {
      document.removeEventListener("mousedown", closeMenus);
    };
  }, []);

  const handleItemClick = (url) => {
    window.open(url, "_blank");
    setShowMenu(false);
  };

  // Funciones para abrir y cerrar el modal
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles["buttons-container"]}>
      <div className={styles["button-wrapper"]} ref={menuRef}>
        <button
          className={styles["menu-button"]}
          onClick={() =>
            window.open("https://forms.gle/9shq4czv8t65yyrp9", "_blank")
          }
        >
          Inscripción
        </button>
      </div>

      <div className={styles["button-wrapper"]} ref={textRef}>
        <button className={styles["text-button"]} onClick={openModal}>
          Detalles
        </button>
        <span className={styles["notification-dot"]}>!</span>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Fechas Importantes</h2>
            <p>
              A continuacion se presentan las fechas limites importantes para el
              evento, dichas fechas son suceptibles a cambios en caso de algún
              imprevisto. Por favor contactarse con nosotros en caso de
              cualquier inquietud mediante el formualrio de contacto presente al
              final de esta pagina web.
            </p>
            <ul>
              <li>
              Última fecha para inscribirse -<a>18 de Octubre de 2024</a>
              </li>
              <li>
                Concurso general (Todas las categorias) -
                <a>25 de Octubre de 2024</a>
              </li>
            </ul>
            <button className={styles.closeButton} onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buttons;
