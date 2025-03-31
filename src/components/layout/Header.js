import React, { useState } from 'react';
import headerData from '../../data/headerData';
import '../../styles/global/Base.css';
import '../../styles/global/Components.css';
import '../../styles/components/Header.css';

const Content = () => {
  const [inMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!setIsMenuOpen);
  };
  return (
    <>
      {/* Checkbox para controlar o estado do menu */}
      <input
        id="close-menu"
        type="checkbox"
        className="close-menu"
        role="button"
        aria-label="Close menu"
        checked={inMenuOpen}
        onChange={toggleMenu}
      />
      {/* Label para o botão de fechar o menu */}
      <label
        className="close-menu-label"
        htmlFor="close-menu"
        title="close menu"
      ></label>
      {/* Menu */}
      <aside className="menu">
        <div className="menu-content">
          {/* Logo com link e comportamento ao clicar */}
          <h1 onClick={toggleMenu}>
            <a href="#perfil">{headerData.CWS}</a>
          </h1>
          {/* Navegação */}
          <nav>
            <ul
              onClick={() =>
                (document.getElementById('close-menu').checked = false)
              }
            >
              {headerData.menuSections.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Content;
