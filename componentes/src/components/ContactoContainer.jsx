import React from 'react'
import ContactoComponent from './ContactoComponent'
import { Contacto } from '../model/Contacto'

function ContactoContainer() {
  const contacto = new Contacto("Agustin","Carrizo","agustin@gmail.com",true)
  return (
    <ContactoComponent contacto={contacto} />
  )
}

export default ContactoContainer
