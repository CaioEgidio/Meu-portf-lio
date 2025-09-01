import React from "react";
import "./Certifications.css";
// Opcional: Adicione a animação como nas outras seções
import { motion } from "framer-motion";

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
        
        {/* Adicione a div com a classe "card" aqui */}
        <div className="card">
          <ul className="certs__list">
            <li>Alura – Imersão Python: Do Excel à Análise de Dados</li>
            <li>Alura – Imersão em Inteligência Artificial (2ª edição)</li>
            <li>Rocketseat – NLW IA</li>
            <li>Fisk – Inglês (leitura e escrita básica)</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
};

export default Certifications;
