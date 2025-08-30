import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title">Contato</h2>
        <p className="contact__desc">
          Vamos conversar! Entre em contato pelos canais abaixo:
        </p>
        <ul className="contact__list">
          <li>
            📧 <a href="mailto:caio.egidio11.cm@gmail.com">caio.egidio11.cm@gmail.com</a>
          </li>
          <li>
            📱 <a href="tel:+5521986831113">+55 (21) 98683-1113</a>
          </li>
          <li>
            💼 <a href="https://www.linkedin.com/in/caio-egidio-7481aa281" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            💻 <a href="https://github.com/CaioEgidio" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
