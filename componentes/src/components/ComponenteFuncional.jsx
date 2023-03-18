import React, { useState,useEffect } from 'react'

const Clock = () => {
  const initialState = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: 'Martin',
    apellidos: 'San José'
 }

  const [state,setState] = useState(initialState)
  
  const tick = () => {
  
    setState({...state,edad:state.edad += 1,fecha:new Date()})
  }

  useEffect(() => {
    const intervalID = setInterval(() => tick(),1000 )
    return () => {
      clearInterval(intervalID);
    }
   },[])

  
  return (
    <div>
         <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
        <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  )
}
export default Clock;