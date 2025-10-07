import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Shorts-Summary",
    description:
      "Projeto de aplicação web do curdo NLW IA da Rocketseat, que gera resumos automáticos de vídeos curtos do YouTube.",
    tech: "Node.js, HTML, CSS, JavaScript",
    link: "https://github.com/CaioEgidio/Shorts-Summary",
  },
  {
    id: 2,
    title: "Portfólio Pessoal",
    description:
      "Este site que você está navegando, feito com React, JS e CSS puro.",
    tech: "React, Vite, CSS",
    link: "#",
  },
];

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="projects section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section__title">Projetos</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <div key={p.id} className="project__card card">
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <p className="project__tech">{p.tech}</p>
              <a
                href={p.link}
                className="project__link"
                target="_blank"
                rel="noreferrer"
              >
                Ver Projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
