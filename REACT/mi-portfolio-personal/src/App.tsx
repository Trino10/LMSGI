import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import { NavBar } from './header/NavBar';
import imagen from './img/tn.png';
import { Main } from './pages/main/Main';
import { Route, Routes } from 'react-router-dom';
import { ContactoPage } from './pages/contacto/Contacto';
import { InicioPage } from './pages/inicio/Inicio';
import { SobremiPage } from './pages/sobremi/Sobremi';
import { ProyectosPage } from './pages/proyectos/Proyectos';




function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>


      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<InicioPage />} />
          <Route path='/sobremi' element={<SobremiPage />} />
          <Route path='/proyectos' element={<ProyectosPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
