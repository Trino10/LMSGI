import React from 'react'
import { Outlet } from 'react-router-dom'
import './Main.css'
export const Main = () => {
  return (
    <section>
      <h2>Estamos en la Main</h2>
      <hr/>
        <Outlet/>
    </section>
  )
}
