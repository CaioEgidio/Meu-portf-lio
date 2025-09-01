import React from "react";
import "./Experience.css";
// Lembre-se de adicionar o "motion" se for animar esta seção
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="experience section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section__title">Experiência Profissional</h2>

        <div className="experience__timeline">
          <div className="timeline__item">
            <div className="exp__item card">
              <h3 className="exp__role">Setor Financeiro</h3>
              <p className="exp__company">Anestbaby Serviços Médicos Cia</p>
              <p className="exp__date">Maio 2023 – Julho 2024</p>
              <ul className="exp__list">
                <li>Organizei e analisei dados financeiros usando Excel.</li>
                <li>Criei relatórios gerenciais que melhoraram a tomada de decisão.</li>
                <li>Estruturei processos administrativos que reduziram erros de repasse de dados.</li>
              </ul>
            </div>
          </div>
          {/* Adicione mais <div className="timeline__item">...</div> para outras experiências */}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;