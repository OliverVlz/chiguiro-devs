import React from "react";
import styles from "./OrganizersSponsors.module.css";

// Lista de patrocinadores con sus rutas relativas y enlaces específicos
const sponsors = [
  {
    name: "CARS Ingeniería",
    src: "/Sponsors/CARS Ingeniería 4-3.webp",
    link: "https://cars-ingenieria.com/",
  },
  {
    name: "DakotaLab",
    src: "/Sponsors/Marca - DakotaLab (vertical).webp",
    link: "https://www.dakotalab.org/",
  },
  {
    name: "Sasoftco",
    src: "/Sponsors/sasoftco.webp",
    link: "https://sasoftco.com/",
  },
  {
    name: "Enciso Systems",
    src: "/Sponsors/enciso-systems-logo-r-600.webp",
    link: "https://encisosystems.com/",
  },
  {
    name: "LogoSkytech",
    src: "/Sponsors/LogoSkytech.webp",
    link: "https://skytechsas.com/",
  },
  {
    name: "Ignicion Games",
    src: "/Sponsors/Ignicion Games - Logo.webp",
    link: "https://igniciongames.com",
  },
  {
    name: "Lexa",
    src: "/Sponsors/logolexa.webp",
    link: "https://lexatecnologia.com/es",
  },
  {
    name: "Smartech",
    src: "/Sponsors/SMARTECH_LOGO-1.webp",
    link: "https://smartechcolombia.com.co/",
  },
];

// Lista de organizadores con sus rutas relativas
const organizers = [
  { name: "Unillanos", src: "/Organizers/Unillanos.webp" },
  { name: "EYSI", src: "/Organizers/EYSI.webp" },
  { name: "IEEE", src: "/Organizers/IEEE-Photoroom.webp" },
  { name: "i-conbot", src: "/Organizers/i-CONBOT-1.webp" },
];

const OrganizersSponsors = () => {
  const handleSponsorClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
            className={`${styles.logoSponsors} ${
              sponsor.name === "Sasoftco" ? styles.largerLogo : ""
            }`}
            onClick={() => handleSponsorClick(sponsor.link)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizersSponsors;
