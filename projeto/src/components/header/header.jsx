import styles from "./header.module.css";
import React, { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a onClick={() => setIsModalOpen(true)}>Sobre Mim</a>
            </li>
            <li>
              <a href="https://github.com/jotaMilani">Projetos</a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/?lang=pt_BR">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Sobre Mim</h2>
            <p>
              Olá, sou o João Milani, tenho 16 anos. Atualmente estou cursando meu 3º ano do ensino médio e o 2° ano de curso técnico em desenvolvimento de sistemas no SENAI.
            </p>
            <button onClick={() => setIsModalOpen(false)} id={styles.Fechar}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
