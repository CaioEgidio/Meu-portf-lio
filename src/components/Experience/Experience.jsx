import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section__title">Experiência Profissional</h2>

        <div className="exp__item card">
          <h3 className="exp__role"> Setor Financeiro</h3>
          <p className="exp__company">Anestbaby Serviços Médicos Cia</p>
          <p className="exp__date">Maio 2023 – Julho 2024</p>

          <ul className="exp__list">
            <li>Organizei e analisei dados financeiros usando Excel.</li>
            <li>Criei relatórios gerenciais que melhoraram a tomada de decisão.</li>
            <li>Estruturei processos administrativos que reduziram erros de repasse de dados.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
