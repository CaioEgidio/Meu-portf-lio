import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

// 1. Definir as variantes para a animação escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre a animação de cada ícone
      delayChildren: 0.3, // Um pequeno atraso antes da primeira animação começar
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title">Contato</h2>
        <p className="contact__desc">
          Vamos conversar! Sinta-se à vontade para se conectar comigo através
          dos canais abaixo.
        </p>
        
        {/* 2. Aplicar as variantes ao container dos ícones */}
        <motion.div 
          className="contact__links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* 3. Transformar cada <a> em <motion.a> e aplicar as variantes de item */}
          <motion.a 
            href="mailto:caio.egidio11.cm@gmail.com" 
            className="contact__icon-link"
            aria-label="Enviar um e-mail"
            variants={itemVariants}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a 
            href="tel:+5521986831113" 
            className="contact__icon-link"
            aria-label="Ligar para meu telefone"
            variants={itemVariants}
          >
            <FaPhone />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/caio-egidio-7481aa281" 
            target="_blank" 
            rel="noreferrer"
            className="contact__icon-link"
            aria-label="Visitar meu perfil no LinkedIn"
            variants={itemVariants}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="https://github.com/CaioEgidio" 
            target="_blank" 
            rel="noreferrer"
            className="contact__icon-link"
            aria-label="Visitar meu perfil no GitHub"
            variants={itemVariants}
          >
            <FaGithub />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
