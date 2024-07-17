import React from "react";
import "./Card.css"; // Importamos el archivo CSS para estilos
import Button from "./Button"; // Importamos el componente Button

export default function Card({
  imgSrc,
  constentHead,
  constentPara,
  downloadLink,
  color // Esta propiedad es opcional y no se usa en el código proporcionado
}) {
  return (
    <div className="card">
      <div className="card__header">
        <img src={imgSrc} alt="Imagen de la tarjeta" />
      </div>
      <div className="card__body">
        <h1 className="card__body__head">{constentHead}</h1>
        <p className="card__body__content">{constentPara}</p>
        
        <div className="card__button-container">
          <Button label="Descargar Reglamento" downloadLink={downloadLink} />
        </div>

      </div>
      <div className="card__footer">
      </div>
    </div>
  );
}
