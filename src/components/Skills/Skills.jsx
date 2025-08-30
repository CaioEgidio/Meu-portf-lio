import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>

        <div className="skills__grid">
          <div className="skills__group">
            <h3>Linguagens</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3>Web Development</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>Node.js</li>
              <li>APIs REST</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3>Banco de Dados</h3>
            <ul>
              <li>MySQL</li>
              <li>SQL Server (básico)</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3>Ferramentas</h3>
            <ul>
              <li>Git/GitHub</li>
              <li>Linux</li>
              <li>Excel Avançado</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3>Metodologias</h3>
            <ul>
              <li>Agile</li>
              <li>Scrum (básico)</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3>Soft Skills</h3>
            <ul>
              <li>Resolução de problemas</li>
              <li>Trabalho em equipe</li>
              <li>Comunicação clara</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
