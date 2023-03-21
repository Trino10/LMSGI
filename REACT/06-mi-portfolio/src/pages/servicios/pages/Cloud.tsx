import React from 'react'
import { Accordion, Image, Table } from 'react-bootstrap'



const soluciones = [
  {
    name: 'azure',
    empresa: 'Microsoft',
    logo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AMicrosoft_Azure_Logo.svg&psig=AOvVaw1EUsAvRcEryJ0KcpX397ps&ust=1676722654249000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDN--LEnP0CFQAAAAAdAAAAABAE',
    Nivel: 'Básico'
  },

  {
    name: 'azure',
    empresa: 'Microsoft',
    logo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AMicrosoft_Azure_Logo.svg&psig=AOvVaw1EUsAvRcEryJ0KcpX397ps&ust=1676722654249000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDN--LEnP0CFQAAAAAdAAAAABAE',
    Nivel: 'Básico'
  },

  {
    name: 'azure',
    empresa: 'Microsoft',
    logo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AMicrosoft_Azure_Logo.svg&psig=AOvVaw1EUsAvRcEryJ0KcpX397ps&ust=1676722654249000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDN--LEnP0CFQAAAAAdAAAAABAE',
    Nivel: 'Básico'
  },

  {
    name: 'azure',
    empresa: 'Microsoft',
    logo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AMicrosoft_Azure_Logo.svg&psig=AOvVaw1EUsAvRcEryJ0KcpX397ps&ust=1676722654249000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDN--LEnP0CFQAAAAAdAAAAABAE',
    Nivel: 'Básico'
  },
  


]





export const CloudPage = () => {
  return (
    <>
      <h2>Soluciones de Cloud Computing</h2>
      <hr/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ut vitae, maxime fugiat reiciendis, sequi consequuntur exercitationem earum iusto quod a, nihil eius tempore soluta totam sunt! Saepe, neque aspernatur!</p>
    
      <Table striped>
        <thead>
          <th>Logo</th>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Nivel</th>
        </thead>
        <tbody>
          {
            soluciones.map ( ( solucion ) => (
              <tr>
                <td> <Image src={ solucion.logo }/>  </td>
                <td> { solucion.name } </td>
                <td> { solucion.empresa } </td>
                <td> { solucion.Nivel } </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}
