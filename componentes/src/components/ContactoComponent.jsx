import React from 'react'
import PropTypes from 'prop-types'
import {Contacto} from '../model/Contacto.js'
import '../styles/ContactoComponent.css'

//Componente B


function ContactoComponent({contacto,changeStatus,deleteContact}) {

  function toggleButton(valor){
    return valor ? <i onClick={() => changeStatus(contacto)} className="bi bi-toggle-on toggle"></i> : <i onClick={() => changeStatus(contacto)} className="bi bi-toggle-off toggle"></i>
  }

  return (
    <div className='contacto-container'>
      <h2 className='text'>Nombre: {contacto.nombre} {contacto.apellido} <i onClick={() => deleteContact(contacto)} className="bi bi-trash-fill toggle trash"></i></h2>
      <h2 className='text'>Email: {contacto.email}</h2>
      <h2 className='text'>Estado: {contacto.conectado ? "En linea" : "No disponible"} {toggleButton(contacto.conectado)}</h2>
    </div>

  )
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent
