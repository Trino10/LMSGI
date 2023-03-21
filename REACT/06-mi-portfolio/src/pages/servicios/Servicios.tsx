import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import './servicios.css'

export const ServiciosPage = () => {
  return (
    <>
        <section className='home'>
          <h2>Sección Servicios</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius ipsa similique quidem necessitatibus amet corporis sint quos iusto, deserunt minima illo cumque consequuntur omnis, assumenda quae doloribus, tempore quas?</p>
        </section>
        <NavBar />
        <section className='body'>
          <Outlet />
        </section>
    </>
  )
}
