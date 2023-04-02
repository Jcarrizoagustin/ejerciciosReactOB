import React,{useEffect,useState} from 'react'
import './Cuadrado.css'
const initialValues = {
  red:0,
  green:0,
  blue:0
}

function Cuadrado() {

  const [color,setColor] = useState(initialValues);
  let intervalo;

  function changeColor(){
    intervalo = setInterval(() => {
      let newColor = {
        red:getRandomInt(255),
        green:getRandomInt(255),
        blue:getRandomInt(255)
      }
      setColor(newColor)
    },1000);
  }

  
  useEffect(() => {
    
    console.log(color)
    console.log(intervalo)
    
  },[color])

  function handleDoubleClick(){
    console.log("Doble click");
    clearInterval(intervalo);
  }

  function handleMouseOut(){
    console.log("He salido");
    clearInterval(intervalo);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  
  return (
    <div onMouseOver={changeColor} onMouseOut={handleMouseOut} onDoubleClick={handleDoubleClick} className='cuadrado' style={{backgroundColor:`rgb(${color.red},${color.green},${color.blue})`}}>
      
    </div>
  )
}

export default Cuadrado