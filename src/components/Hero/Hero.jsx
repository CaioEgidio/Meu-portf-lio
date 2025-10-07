import React, { useEffect, useRef } from "react";
import "./Hero.css";
import avatar from "../../assets/avatar.jpg";
import { motion, animate } from "framer-motion";


const Counter = ({ from, to }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        node.textContent = Math.round(value);
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
};

const Hero = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Array para armazenar os IDs dos timeouts
    const timeoutIds = [];
    
    // Reseta o texto no início para lidar com o StrictMode do React
    if (text1Ref.current) text1Ref.current.textContent = "";
    if (text2Ref.current) text2Ref.current.textContent = "";
    if (cursorRef.current) cursorRef.current.style.display = 'inline';


    const text1 = "Olá, sou ";
    const text2 = "Caio Egidio";
    let i = 0;
    let j = 0;

    const typeText1 = () => {
      if (i < text1.length) {
        if (text1Ref.current) text1Ref.current.textContent += text1.charAt(i);
        i++;
        const id = setTimeout(typeText1, 100);
        timeoutIds.push(id);
      } else {
        const id = setTimeout(typeText2, 250);
        timeoutIds.push(id);
      }
    };

    const typeText2 = () => {
      if (j < text2.length) {
        if (text2Ref.current) text2Ref.current.textContent += text2.charAt(j);
        j++;
        const id = setTimeout(typeText2, 120);
        timeoutIds.push(id);
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'none';
        }
      }
    };

    // Inicia a animação
    typeText1();

    // Função de limpeza: será executada quando o componente for desmontado
    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []); // O array vazio garante que o efeito rode apenas uma vez

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero__role">Software Developer</p>
          <h1 className="hero__title">
            <span ref={text1Ref}></span>
            <span ref={text2Ref} className="hero__name"></span>
            <span ref={cursorRef} className="typing-cursor">|</span>
          </h1>
          <p className="hero__desc">
            Desenvolvedor Back-end em Python e estudante de Ciência da Computação.
          </p>

          <div className="hero__actions">
             <a className="btn btn--primary" href="/curriculo.pdf" download="Curriculo_Caio_Egidio.pdf">Download CV</a>
          </div>

          <ul className="hero__stats">
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
              <span className="stat__label">Experiências</span>
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
