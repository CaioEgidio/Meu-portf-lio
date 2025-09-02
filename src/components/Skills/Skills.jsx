import React from "react";
import "./Skills.css";
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaUsers, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

// As variantes de animação permanecem as mesmas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* O tamanho do ícone foi aumentado para 1.5em */}
          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaCode size="1.5em" /> Linguagens</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaLaptopCode size="1.5em" /> Web Development</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>Node.js</li>
              <li>APIs REST</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaDatabase size="1.5em" /> Banco de Dados</h3>
            <ul>
              <li>MySQL</li>
              <li>SQL Server (básico)</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaTools size="1.5em" /> Ferramentas</h3>
            <ul>
              <li>Git/GitHub</li>
              <li>Linux</li>
              <li>Excel Avançado</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaUsers size="1.5em" /> Metodologias</h3>
            <ul>
              <li>Agile</li>
              <li>Scrum (básico)</li>
            </ul>
          </motion.div>

          <motion.div className="skills__group" variants={itemVariants}>
            <h3><FaHandshake size="1.5em" /> Soft Skills</h3>
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
