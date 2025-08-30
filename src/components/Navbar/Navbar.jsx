import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="brand">Caio<span className="brand--dot">.</span></a>

        <nav className="nav">
          <a href="#home" className="nav__link">Home</a>
          <a href="#about" className="nav__link">Sobre</a>
          <a href="#projects" className="nav__link">Projetos</a>
          <a href="#contact" className="nav__cta">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
