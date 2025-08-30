import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section__title">Educação</h2>

        <div className="edu__item card">
          <h3 className="edu__course">Bacharelado em Ciência da Computação</h3>
          <p className="edu__school">Universidade Veiga de Almeida, RJ</p>
          <p className="edu__date">2023 – 2026 (matutino)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
