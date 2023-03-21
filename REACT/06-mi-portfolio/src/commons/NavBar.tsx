import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { makeStyles } from '@mui/material';
import { Padding } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';


export const NavBar = () =>{
  // const useStyles = makeStyles ({
  //   miBoton:{
  //     border: 10,
  //     padding:10,
  //     borderColor:yellow
  //   }
  // })

  
  // const clases = makeStyles();
  
  return (
    <nav className='navppal'>
      <Link to = 'home'>
        <Button variant='outlined' startIcon={<HomeIcon/>}>
          Home
        </Button>
      </Link>
      <Link to = '/servicios'>
        <Button color='primary' variant='outlined' startIcon={<AddTaskRoundedIcon/>}>
          Servicios
        </Button>
      </Link>
      <Link to = '/formacion'>
        <Button variant='outlined' startIcon={<SchoolIcon/>}>
          Formación
        </Button>
      </Link>
      <Link to = '/ordenadores'>
        <Button variant='outlined' startIcon={<LaptopChromebookRoundedIcon/>}>
          Ordenadores
        </Button>
      </Link>
      <Link to = '/qsomos'>
        <Button variant='outlined' startIcon={<QuestionMarkRoundedIcon/>}>
          Conócenos
        </Button>
      </Link>
      <Link to = '/contacto'>
        <Button variant='outlined' startIcon={<LocalPhoneRoundedIcon/>}>
          Contacto
        </Button>
      </Link>
    </nav>
  )
} 
