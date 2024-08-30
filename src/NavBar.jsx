import React, { useState } from "react";
import "../src/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <a href="#inicio">Início</a>
        </li>
        <li className="navbar-item">
          <a href="#quem-sou">Quem Sou</a>
        </li>
        <li className="navbar-item">
          <a href="#furo-humanizado">Furo Humanizado</a>
        </li>
        <li className="navbar-item">
          <a href="#material">Material</a>
        </li>
        <li className="navbar-item">
          <a href="#galeria">Galeria</a>
        </li>
        <li className="navbar-item">
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
