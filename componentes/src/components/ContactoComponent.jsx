import React from 'react'
import PropTypes from 'prop-types'
import {Contacto} from '../model/Contacto.js'

//Componente B
function ContactoComponent({contacto}) {
  return (
    <>
      <h2>Nombre: {contacto.nombre} {contacto.apellido}</h2>
      <h2>Email: {contacto.email}</h2>
      <h2>Estado: {contacto.conectado ? "En linea" : "No disponible"}</h2>
      
    </>

  )
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent
