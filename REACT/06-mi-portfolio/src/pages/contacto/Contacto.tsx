import { Grid, TextField } from '@mui/material'
import { border } from '@mui/system'
import React from 'react'

export const ContactoPage = () => {
  return (
    <form action="">
      <Grid container>
        <Grid item 
              xs={12} md={6} lg={3}       
              sx={{border: '0px solid red'}}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" placeholder='Nombre completo' />
        </Grid>
        <Grid item 
              xs={12} md={6} lg={3}       
              sx={{border: '0px solid red'}}>
          <TextField id="outlined" label="Apellidos" variant="outlined" />
        </Grid>
        <Grid item 
              xs={12} md={6} lg={3}       
              sx={{border: '0px solid red'}}>
          <TextField id="outlined" label="Dirección" variant="outlined" placeholder='C/' />
        </Grid>
        <Grid item 
              xs={12} md={6} lg={3}       
              sx={{border: '0px solid red'}}>
          <TextField
          id="standard-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        </Grid>
        <Grid item 
              xs={12} md={6} lg={3}       
              sx={{border: '0px solid red'}}></Grid>
          <TextField
            id="standard-number"
            label="Edad"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
      </Grid>
    </form>  
    // <>
    //   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    //   <TextField id="filled-basic" label="Filled" variant="filled" />
    //   <TextField id="standard-basic" label="Standard" variant="standard" />
    // </>
  )
}
