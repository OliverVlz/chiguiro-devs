import React from 'react';
import styles from './OrganizersSponsors.module.css';

// Lista de patrocinadores con sus rutas relativas
const sponsors = [
  { name: 'CARS Ingeniería', src: '/Sponsors/CARS Ingeniería 4-3.png' },
  { name: 'DakotaLab', src: '/Sponsors/Marca - DakotaLab (vertical).png' },
  { name: 'Mesa de trabajo', src: '/Sponsors/sasoftco.png' },
  { name: 'Enciso Systems', src: '/Sponsors/enciso-systems-logo-r-600.png' },
  { name: 'LogoSkytech', src: '/Sponsors/LogoSkytech.jpeg' },
  { name: 'Ignicion Games', src: '/Sponsors/Ignicion Games - Logo.png' }
];

// Lista de organizadores con sus rutas relativas
const organizers = [
  { name: 'Unillanos', src: '/Organizers/Unillanos.png' },
  { name: 'EYSI', src: '/Organizers/EYSI.png' },
  { name: 'IEEE', src: '/Organizers/IEEE-Photoroom.png' },
  { name: 'i-conbot', src: '/Organizers/i-CONBOT-1.png' }
];

const OrganizersSponsors = () => {
  return (
    <div className={styles.container}>
      <h2>Organizadores</h2>
      <div className={styles.organizers}>
        {organizers.map((organizer, index) => (
          <img key={index} src={organizer.src} alt={`${organizer.name} logo`} className={styles.logo} />
        ))}
      </div>
      <h2>Patrocinadores</h2>
      <div className={styles.sponsors}>
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor.src} alt={`${sponsor.name} logo`} className={`${styles.logo} ${sponsor.name === 'Mesa de trabajo' ? styles.largerLogo : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default OrganizersSponsors;
