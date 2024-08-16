import React from 'react';
import styles from './OrganizersSponsors.module.css';

// Lista de patrocinadores con sus rutas relativas y enlaces específicos
const sponsors = [
  { 
    name: 'CARS Ingeniería', 
    src: '/Sponsors/CARS Ingeniería 4-3.png',
    link: 'https://cars-ingenieria.com/'
  },
  { 
    name: 'DakotaLab', 
    src: '/Sponsors/Marca - DakotaLab (vertical).png',
    link: 'https://www.dakotalab.org/'
  },
  { 
    name: 'Sasoftco', 
    src: '/Sponsors/sasoftco.png',
    link: 'https://sasoftco.com/'
  },
  { 
    name: 'Enciso Systems', 
    src: '/Sponsors/enciso-systems-logo-r-600.png',
    link: 'https://encisosystems.com/'
  },
  { 
    name: 'LogoSkytech', 
    src: '/Sponsors/LogoSkytech.jpeg',
    link: 'https://skytechsas.com/'
  },
  { 
    name: 'Ignicion Games', 
    src: '/Sponsors/Ignicion Games - Logo.png',
    link: 'https://igniciongames.com'
  },
  { 
    name: 'Lexa', 
    src: '/Sponsors/logolexa.png',
    link: 'https://lexatecnologia.com/es'
  },
  { 
    name: 'Smartech', 
    src: '/Sponsors/SMARTECH_LOGO-1.png',
    link: 'https://smartechcolombia.com.co/'
  }
];

// Lista de organizadores con sus rutas relativas
const organizers = [
  { name: 'Unillanos', src: '/Organizers/Unillanos.png' },
  { name: 'EYSI', src: '/Organizers/EYSI.png' },
  { name: 'IEEE', src: '/Organizers/IEEE-Photoroom.png' },
  { name: 'i-conbot', src: '/Organizers/i-CONBOT-1.png' }
];

const OrganizersSponsors = () => {

  const handleSponsorClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.container}>
      <h2>Organizadores</h2>
      <div className={styles.organizers}>
        {organizers.map((organizer, index) => (
          <img 
            key={index} 
            src={organizer.src} 
            alt={`${organizer.name} logo`} 
            className={styles.logoOrg} 
            loading='lazy'
          />
        ))}
      </div>
      <h2>Patrocinadores</h2>
      <div className={styles.sponsors}>
        {sponsors.map((sponsor, index) => (
          <img 
            key={index} 
            src={sponsor.src} 
            alt={`${sponsor.name} logo`} 
            className={`${styles.logoSponsors} ${sponsor.name === 'Sasoftco' ? styles.largerLogo : ''}`} 
            onClick={() => handleSponsorClick(sponsor.link)}
            style={{ cursor: 'pointer' }}
            loading='lazy'
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizersSponsors;
