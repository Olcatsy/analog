import React from 'react';



const Footer = ({ }) => {

  return (
    <footer>
      {/* social */}
      <ul>
        <li>
          {/* Website */}
          <a href="http://olgafil.com/"><i className="fas fa-external-link-alt" aria-label="Olga's website"></i></a>
        </li>
        <li>
          {/* Twitter */}
          <a href="https://twitter.com/OlgaFilCodes"><i className="fab fa-twitter" aria-label="Olga's Twitter"></i></a>
        </li>
        <li>
          {/* Codepen */}
          <a href="https://codepen.io/OlgaFil"><i className="fab fa-codepen" aria-label="Olga's Codepen"></i></a>
        </li>
        <li>
          {/* GitHub */}
          <a href="https://github.com/Olcatsy"><i className="fab fa-github" aria-label="Olga's GitHub"></i></a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;