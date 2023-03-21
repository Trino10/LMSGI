import React from 'react'
import './inicio.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import mifoto from '../../img/micara.jpeg'
export const InicioPage = () => {
  return (
    <>
      <section className='personal'>
        <figure className='foto'></figure>
        <h1 className='minombre'>Trino Navarro</h1>
        <h3 className='oficio'>Desarrollador front-end</h3>
        <nav className='sociales'>
          <a href="#"><GitHubIcon /></a>
          <a href="#"><InstagramIcon/></a>
          <a href="#"><TwitterIcon/></a>
          <a href="#"><LinkedInIcon/></a>
        </nav>
      </section>
    </>
  )
}
