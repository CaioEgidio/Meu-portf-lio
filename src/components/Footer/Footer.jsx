import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Caio Egidio — Todos os direitos reservados.</p>
        <p className="footer__credit">
          Feito com ❤️ em React + CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
