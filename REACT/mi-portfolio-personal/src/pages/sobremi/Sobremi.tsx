import React from 'react'
import html5 from '../../img/html5.png'
import css3 from '../../img/css-3.png'
import figma from '../../img/figma.png'
import atom from '../../img/atom.png'
import bootstrap from '../../img/bootstrap.png'
import nsk from '../../img/nsk.png'
import './sobremi.css'
import { CircularProgress, LinearProgress } from '@mui/material'

export const SobremiPage = () => {
  return (
    <>
      <section className='info'>
        <h2>Mi nombre es Trino Navarro</h2>
        <p>Soy estudiante de grado superior en ASIR y este es mi portfolio personal, espero que te guste, aquí te dejo algunas de mis cualidades, un saludo!</p>
      </section>
      <h1 className='habilidades'>HABILIDADES</h1>
      <section>
        <article className='skills'>
          <span>SKILLS</span>
          <img src={html5} alt="" />
          <img src={css3} alt="" />
          <img src={figma} alt="" />
          <img src={atom} alt="" className='logoreact' />
          <img src={bootstrap} alt="" />
          <CircularProgress variant="determinate" value={80} />
          <CircularProgress variant="determinate" value={60} />
          <CircularProgress variant="determinate" value={70} />
          <CircularProgress variant="determinate" value={30} />
          <CircularProgress variant="determinate" value={50} />
        </article>
      </section>
      
      
    </>
  )
}
