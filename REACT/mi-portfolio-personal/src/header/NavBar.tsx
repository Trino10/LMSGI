// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import './header.css'



// export const NavBar = () => {
//   return (
//     <>
//       <nav className='navppal'>
//         <Link to='inicio'>Inicio</Link>
//         <Link to='sobremi'>Sobre mí</Link>
//         <Link to='proyectos'>Proyectos</Link>
//         <Link to='contacto'>Contacto</Link>
//       </nav>
//     </>
//   )
// }


import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import imagen from '../img/tn.png'
import letras from '../img/tn-r.png'
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='principal'>
      <div className='divlogo'>
        <figure>
          <img src={imagen} className="logoTrino" alt="" />
          {/* <img src={letras} className="logoLetras" alt="" /> */}
        </figure>
        <label htmlFor="toggle">
          <FaBars />
        </label>
      </div>
      <input type="checkbox" name="" id="toggle" checked={isOpen} onChange={toggleMenu} />

      <div className="menu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sobremi">Sobre mí</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
