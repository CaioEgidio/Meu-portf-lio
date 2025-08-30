import React from "react";
import "./Hero.css";
import avatar from "../../assets/avatar.jpg"; // coloque a sua foto aqui

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__left">
          <p className="hero__role">Software Developer</p>
          <h1 className="hero__title">
            Olá, sou <span className="hero__name">Caio Egidio</span>
          </h1>
          <p className="hero__desc">
            Estudante de Ciência da Computação. Faço front-end com React e
            também trabalho com Python, Node.js e análise de dados.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">Ver projetos</a>
            <a className="btn btn--outline" href="#contact">Contato</a>
          </div>

          <ul className="hero__stats">
            <li><span className="stat__num">6</span><span className="stat__label">Semestres</span></li>
            <li><span className="stat__num">1</span><span className="stat__label">Estágio</span></li>
            <li><span className="stat__num">1+</span><span className="stat__label">Projetos</span></li>
          </ul>
        </div>

        <div className="hero__right">
          <div className="avatar__wrap">
            <img src={avatar} alt="Foto de Caio" className="avatar" />
            <svg className="avatar__ring" viewBox="0 0 200 200" aria-hidden>
              <circle cx="100" cy="100" r="85" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
