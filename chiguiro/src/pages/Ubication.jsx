// src/pages/Contact.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Ubication.module.css';

// Asegúrate de que los iconos de Leaflet se muestren correctamente
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const RecenterButton = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    const handleRecenter = () => {
      map.setView(position, 19);
    };

    const button = L.control({ position: 'topright' });

    button.onAdd = function () {
      const div = L.DomUtil.create('div', styles.recenterButtonContainer);
      div.innerHTML = `<button class="${styles.recenterButton}">Volver a centrar</button>`;
      div.querySelector('button').onclick = handleRecenter;
      return div;
    };

    button.addTo(map);

    return () => {
      button.remove();
    };
  }, [map, position]);

  return null;
};

const Ubication = () => {
  const position = [4.07502, -73.58423]; // Coordenadas del Auditorio Eduardo Carranza

  return (
    <section id="ubicacion" className={styles.ubicationSection}>
      <div className={styles.titleContainer}>
        <h1>UBICACIÓN</h1>
        <h3>Kilómetro 12 Vía a Puerto López, Vda. Barcelona, Villavicencio, Meta</h3>
      </div>
      <div className={styles.mapContainer}>
        <MapContainer center={position} zoom={19} className={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Auditorio Eduardo Carranza
            </Popup>
          </Marker>
          <RecenterButton position={position} />
        </MapContainer>
      </div>
    </section>
  );
};

export default Ubication;
