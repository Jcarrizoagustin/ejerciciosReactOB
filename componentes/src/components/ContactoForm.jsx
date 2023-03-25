import React, { useState } from 'react'
import '../styles/ContactoForm.css'
import {Contacto} from '../model/Contacto'

function ContactoForm({add}) {
  const initialValue = {
    nombre:'',
    apellido:'',
    email:'',
    contectado:false
  }
  const [contacto,setContacto] = useState(initialValue)

  function handleChange(e){
    setContacto({...contacto,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    let contact = new Contacto(contacto.nombre,contacto.apellido,contacto.email,false);
    add(contact)
  }

  return (
    <div onSubmit={handleSubmit} className="form">
      <form>
        <h2>Agregar Contacto</h2>
        <div className='imput-container'>
          <label htmlFor="nombre">Nombre:</label>
          <input onChange={handleChange} type="text" id='nombre' name='nombre'/>
        </div>
        <div className='imput-container'>
          <label htmlFor="apellido">Apellido:</label>
          <input onChange={handleChange} type="text" id='apellido' name='apellido'/>
        </div>
        <div className='imput-container'>
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} type="email" id='email' name='email'/>
        </div>
        <button className='button' type='submit'>Agregar</button>
      </form>
    </div>
  )
}

export default ContactoForm