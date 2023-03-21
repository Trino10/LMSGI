import React from 'react'
import { ListGroup } from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className='submenu'>
        <Link to='web'>Servicios Web</Link>
        <Link to='seguridad'>Seguridad Informática</Link>
        <Link to='Mantenimiento'>Mantenimiento Informático</Link>
        <Link to='cloud'>Automatización en Cloud</Link>
    </nav>
  )
}
