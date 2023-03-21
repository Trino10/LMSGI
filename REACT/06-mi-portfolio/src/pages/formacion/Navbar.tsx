import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='submenu'>
        <Link to='fibra'>Fusion de fibra</Link>
        <Link to='oracle'>Sysadmin Oracle</Link>
        <Link to='cisco'>Sysadmin Cisco</Link>
    </nav>
  )
}
