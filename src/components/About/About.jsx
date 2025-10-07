import React from "react";
import "./About.css";
import { motion } from "framer-motion"; // 1. Importe o motion

const About = () => {
  return (
    // 2. Substitua a tag <section> por <motion.section>
    <motion.section 
      id="about" 
      className="about section"
      // 3. Adicione as propriedades de animação
      initial={{ opacity: 0, y: 50 }} // Estado inicial (invisível e 50px abaixo)
      whileInView={{ opacity: 1, y: 0 }} // Anima para (visível e na posição original)
      viewport={{ once: true, amount: 0.5 }} // A animação ocorre uma vez quando 50% da seção estiver visível
      transition={{ duration: 0.8 }} // Duração da animação
    >
      <div className="container">
        <h2 className="section__title">Sobre Mim</h2>
        <p className="about__text">
         Desenvolvedor e estudante do 6º período de Ciência da Computação com grande interesse em 
         desenvolvimento Back-end, Ciência de Dados e Inteligência Artificial. 
         Busco uma oportunidade de estágio para aplicar meus conhecimentos, contribuindo para
         o desenvolvimento de soluções tecnológicas inovadoras e evoluindo em um ambiente dinâmico e colaborativo.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
