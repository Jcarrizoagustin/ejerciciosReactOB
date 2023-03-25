import React, { useState } from 'react'
import ContactoComponent from './ContactoComponent'
import { Contacto } from '../model/Contacto'
import '../styles/ContactoContainer.css'
import ContactoForm from './ContactoForm'

function ContactoContainer() {
  

  const contacto = new Contacto("Agustin","Carrizo","agustin@gmail.com",true)
  const contacto2 = new Contacto("Franco","Di Neno","franco@gmail.com",false)



  const [list,setList] = useState([contacto,contacto2])

  function agregarContacto(contacto){
    setList([...list,contacto])
  }
  
  function changeStatus(contacto){
    let index = list.indexOf(contacto)
    let tempList = [...list]
    tempList[index].conectado = !tempList[index].conectado
    setList(tempList)
  }

  function eliminarContacto(contacto){
    let opcion = confirm("Desea eliminar a " + contacto.nombre + " ?")
    if(opcion){
      let index = list.indexOf(contacto)
      let tempList = [...list]
      tempList.splice(index,1)
      setList(tempList);
    }
  }

  return (
    <div className='container'>
      <h2>Contactos</h2>
      {list.map((el,index) => <ContactoComponent contacto={el} key={index} changeStatus={changeStatus} deleteContact={eliminarContacto}/>)}
      <ContactoForm  add={agregarContacto}/>
    </div>
  )
}

export default ContactoContainer
