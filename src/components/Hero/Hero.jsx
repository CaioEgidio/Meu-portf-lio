import React, { useEffect, useRef } from "react";
import "./Hero.css";
import avatar from "../../assets/avatar.jpg";
// 1. Importe 'motion' e 'animate' da framer-motion
import { motion, animate } from "framer-motion";

// 2. Crie um componente para o contador animado
const Counter = ({ from, to }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2, // Duração da animação em segundos
      onUpdate(value) {
        // Arredonda o valor e atualiza o texto
        node.textContent = Math.round(value);
      }
    });

    // Limpa a animação quando o componente é desmontado
    return () => controls.stop();
  }, [from, to]);

  // O 'ref' conecta a lógica da animação a este elemento span
  return <span ref={nodeRef} />;
};


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <motion.div 
          className="hero__left"
          // Animação de fade-in para o conteúdo da esquerda
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            {/* 3. Use o componente Counter para cada estatística */}
            <li>
              <span className="stat__num">
                <Counter from={0} to={6} /> 
              </span>
              <span className="stat__label">Semestres</span>
            </li>
            <li>
              <span className="stat__num">
                <Counter from={0} to={1} />
              </span>
              <span className="stat__label">Estágio</span>
            </li>
            <li>
              <span className="stat__num">
                <Counter from={0} to={1} />+
              </span>
              <span className="stat__label">Projetos</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
            className="hero__right"
            // Animação de fade-in para a imagem da direita
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="avatar__wrap">
            <img src={avatar} alt="Foto de Caio" className="avatar" />
            <svg className="avatar__ring" viewBox="0 0 200 200" aria-hidden>
              <circle cx="100" cy="100" r="85" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
