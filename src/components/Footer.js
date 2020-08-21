import React from 'react';



const Footer = () => {

  return (
    <footer>
      {/* social */}
      <ul>
        <li>
          {/* Website */}
          <a href="http://olgafil.com/" aria-label="Olga's website" title="olgafil.com"><i className="fas fa-external-link-alt" aria-hdden></i></a>
        </li>
        <li>
          {/* Twitter */}
          <a href="https://twitter.com/OlgaFilCodes" aria-label="Olga's Twitter" title="Twitter"><i className="fab fa-twitter" aria-hidden></i></a>
        </li>
        <li>
          {/* Codepen */}
          <a href="https://codepen.io/OlgaFil" title="CodePen" aria-label="Olga's Codepen"><i className="fab fa-codepen" aria-hidden></i></a>
        </li>
        <li>
          {/* GitHub */}
          <a href="https://github.com/Olcatsy" aria-label="Olga's GitHub" title="GitHub"><i className="fab fa-github" aria-hidden></i></a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;