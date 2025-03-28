import React, { useState } from 'react';
import headerData from '../../data/headerData';
import '../../styles/Header.css';

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
      <aside className="menu white-bg">
        <div className="main-content menu-content">
          {/* Logo com link e comportamento ao clicar */}
          <h1 onClick={toggleMenu}>
            <a href="#home">{headerData.CWS}</a>
          </h1>
          {/* Navegação */}
          <nav>
            <ul
              onClick={() =>
                (document.getElementById('close-menu').checked = false)
              }
            >
              {headerData.menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      {/* Espaçamento para o menu */}
      <div className="menu-spacing"></div>
    </>
  );
};

export default Content;
