import React from 'react';
import '../css/footer.css'

const Footer = () => {
  const redesSociales = [
    { name: 'Facebook', url: 'https://www.facebook.com/tu-restaurante' },
    { name: 'Twitter', url: 'https://twitter.com/tu-restaurante' },
    { name: 'Instagram', url: 'https://www.instagram.com/tu-restaurante' },
  ];

  return (
    <footer className="footer">
      <p>Síguenos en redes sociales:</p>
      <ul className="redes-css">
        {redesSociales.map((redesSociales, index) => (
          <li key={index}>
            <a href={redesSociales.url} target="_blank" rel="noopener noreferrer">
              {redesSociales.name}
            </a>
          </li>
        ))}
      </ul>
      <p>&copy; {new Date().getFullYear()} El Rincon del Sabor. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;