import React, { FC } from 'react'
import OrdenadoresListCard from '../OrdenadoresListCard'
import { IOrdenador } from './interfaces/iOrdenador'



//Componente que recibe un parametro de entrada
//1º declarar elñ tipo de interface de ese tipo de entrada

interface InputData {
    ordenador: IOrdenador
}
//+ parametros de entrada



//2º defino el parametro de entrada en el componente

const OrdenadorCard:FC <InputData> = ({ordenador}) => {
  return (
    <div className='card'>
      <ul>
        <li> { ordenador.nombre } </li>
        <li> { ordenador.marca } </li>
        <li> { ordenador.precio.real } </li>
        <li> { ordenador.caracteristicas.procesador } </li>
        <li> { ordenador.caracteristicas.ram } </li>
      </ul>
    </div>
  )
}

export default OrdenadorCard




