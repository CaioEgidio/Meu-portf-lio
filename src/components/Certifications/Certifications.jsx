import React from "react";
import "./Certifications.css";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa"; // Ícone de prêmio/certificado

// Lista de certificações para facilitar a manutenção
const certificationsList = [
  "Alura – Imersão Python: Do Excel à Análise de Dados",
  "Alura – Imersão em Inteligência Artificial (2ª edição)",
  "Rocketseat – NLW IA",
  "Fisk – Inglês (leitura e escrita básica)",
];

// Variantes para a animação escalonada (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre cada item da lista
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certifications section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section__title">Cursos & Certificações</h2>

        <motion.ul
          className="certs__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certificationsList.map((cert, index) => (
            <motion.li key={index} className="cert__item" variants={itemVariants}>
              <FaAward className="cert__icon" />
              <span>{cert}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Certifications;
