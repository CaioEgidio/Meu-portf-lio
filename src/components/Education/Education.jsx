import React from "react";
import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa"; // Ícone de formatura

const Education = () => {
  return (
    <motion.section
      id="education"
      className="education section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section__title">Educação</h2>

        <div className="edu__item card">
          <div className="edu__icon">
            <FaGraduationCap />
          </div>
          <div className="edu__content">
            <h3 className="edu__course">Bacharelado em Ciência da Computação</h3>
            <p className="edu__school">Universidade Veiga de Almeida, RJ</p>
            <p className="edu__date">2023 – 2026 (matutino)</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
