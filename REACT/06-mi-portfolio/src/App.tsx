import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './commons/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { ServiciosPage } from './pages/servicios/Servicios';
import { FormacionPage } from './pages/formacion/Formacion';
import { QsomosPage } from './pages/qsomos/Qsomos';
import { ContactoPage } from './pages/contacto/Contacto';
import { WebPage } from './pages/servicios/pages/Web';
import { FibraPage } from './pages/formacion/pages/Fibra';
import { CiscoPage } from './pages/formacion/pages/Cisco';
import { OraclePage } from './pages/formacion/pages/Oracle';
import { CloudPage } from './pages/servicios/pages/Cloud';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrdenadoresListCard from './pages/ordenadores/OrdenadoresListCard';





function App() {
  return (
    <>
      <div className="container">
        <header>
          <NavBar/>
        </header>
        
        <Routes>
          <Route path='/' element= { <Main/> }>
            <Route path='/servicios' element = { <ServiciosPage/> }>
              <Route path='/servicios/web' element = { <WebPage/> }/>
              <Route path='/servicios/cloud' element = { <CloudPage/> }/>
            </Route>


            <Route path='/formacion' element = { <FormacionPage/> } >
              <Route path='/formacion/fibra' element = { <FibraPage/> } />
              <Route path='/formacion/cisco' element = { <CiscoPage/> } />
              <Route path='/formacion/oracle' element = { <OraclePage/> } />
            </Route>

            <Route path='/ordenadores' element = { <OrdenadoresListCard/> } />
            <Route path='/qsomos' element = { <QsomosPage/> } />
            <Route path='/contacto' element = { <ContactoPage/> } />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
