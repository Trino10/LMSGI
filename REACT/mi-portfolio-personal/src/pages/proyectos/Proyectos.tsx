import React from 'react'
import './proyectos.css'
import caronte from '../../img/main/caronte.png'
import airdnb from '../../img/main/airdnb.png'


export const ProyectosPage = () => {
  return (
    <>
      <h2>Aquí muestro algunos de los proyectos en los que he trabajado</h2>
      <section className='proyects'>
        <article>
          <figure>
            <img src={caronte} alt="" />
          </figure>
          <h3>Proyecto Caronte</h3>
        </article>

        <article>
          <figure>
            <img src={airdnb} alt="" />
          </figure>
          <h3>Proyecto Airdnb</h3>
        </article>
      </section>
    </>
  )
}
