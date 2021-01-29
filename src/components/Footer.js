import React from 'react';



const Footer = () => {

  return (
    <footer>
      {/* social */}
      <ul>
        <li>
          {/* Website */}
          <a aria-label="Olga's website" href="http://olgafil.com/" title="olgafil.com" target="_blank"><i className="fas fa-external-link-alt" aria-hidden="true"></i></a>
        </li>
        <li>
          {/* Twitter */}
          <a aria-label="Olga's Twitter" href="https://twitter.com/OlgaFilCodes" title="Twitter" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li>
          {/* Codepen */}
          <a aria-label="Olga's Codepen" href="https://codepen.io/OlgaFil" title="CodePen" target="_blank"><i className="fab fa-codepen" aria-hidden="true"></i></a>
        </li>
        <li>
          {/* GitHub */}
          <a aria-label="Olga's GitHub" href="https://github.com/Olcatsy" title="GitHub" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;