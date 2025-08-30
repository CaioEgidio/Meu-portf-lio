import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section__title">Cursos & Certificações</h2>
        <ul className="certs__list">
          <li>Alura – Imersão Python: Do Excel à Análise de Dados</li>
          <li>Alura – Imersão em Inteligência Artificial (2ª edição)</li>
          <li>Rocketseat – NLW IA</li>
          <li>Fisk – Inglês (leitura e escrita básica)</li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
