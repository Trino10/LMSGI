import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'


export const FormacionPage = () => {
  return (
    <>
        <section className='home'>
          <h2>Sección Formación</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius ipsa similique quidem necessitatibus amet corporis sint quos iusto, deserunt minima illo cumque consequuntur omnis, assumenda quae doloribus, tempore quas?</p>
        </section>
          <Navbar/>
        <section className='body'>
          <Outlet/>
        </section>
    </>
  )
}
