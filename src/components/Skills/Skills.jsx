import React from "react";
import "./Skills.css";
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaUsers, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

// 1. Definir as "variantes" da animação para o container e para os itens
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adiciona um atraso de 0.2s entre cada card
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Começa 20px abaixo e invisível
  visible: {
    y: 0,
    opacity: 1, // Move para a posição original e fica visível
    transition: {
      duration: 0.6, // Duração da animação de cada card
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>

        {/* 2. Aplicar as variantes ao container dos cards */}
        <motion.div 
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 3. Aplicar a variante de item a cada card individualmente */}
          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaCode style={{ marginRight: '8px' }} /> Linguagens</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaLaptopCode style={{ marginRight: '8px' }} /> Web Development</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>Node.js</li>
              <li>APIs REST</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaDatabase style={{ marginRight: '8px' }} /> Banco de Dados</h3>
            <ul>
              <li>MySQL</li>
              <li>SQL Server (básico)</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaTools style={{ marginRight: '8px' }} /> Ferramentas</h3>
            <ul>
              <li>Git/GitHub</li>
              <li>Linux</li>
              <li>Excel Avançado</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaUsers style={{ marginRight: '8px' }} /> Metodologias</h3>
            <ul>
              <li>Agile</li>
              <li>Scrum (básico)</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaHandshake style={{ marginRight: '8px' }} /> Soft Skills</h3>
            <ul>
              <li>Resolução de problemas</li>
              <li>Trabalho em equipe</li>
              <li>Comunicação clara</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
