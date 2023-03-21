import React from 'react'
import './contacto.css'
export const ContactoPage = () => {
  return (
    <>
      <form className="form">
        <span className="title">¡Contacta conmigo!</span>
        <p className="description">Escribeme tu número de teléfono si prefieres que te llame yo o escribeme cualquier duda</p>
        <div>
          <input placeholder="E-mail..." type="email" name="email" id="correo"/>
          <input placeholder="Nombre..." type="text" name="name" id="nombre"/>
          <input placeholder="Telefono..." type="text" name="tlf" id="telefono"/>
          <input placeholder="Comentario..." type="text" name="coment" id="comentario"/>
            <button type="submit">Enviar</button>
        </div>
      </form>
    </>

  )
}
