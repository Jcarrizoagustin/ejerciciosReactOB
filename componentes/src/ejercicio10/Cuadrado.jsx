import React,{useEffect,useState,useRef} from 'react'
import './Cuadrado.css'
const initialValues = {
  red:127,
  green:0,
  blue:0
}

function Cuadrado() {

  const [color,setColor] = useState(initialValues);
  let intervalo = useRef();

  function changeColor(){
    let newColor = {
      red:getRandomInt(255),
      green:getRandomInt(255),
      blue:getRandomInt(255)
    }
    setColor(newColor)
  }

  function inter(){
    intervalo.current = setInterval(changeColor,1500)
  }

  
  useEffect(() => {
    console.log(color)
  },[color])

  function stopChangeColor(){
    console.log("fuera")
    clearInterval(intervalo.current);
  }

 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  
  return (
    <div onMouseOver={inter} onMouseOut={stopChangeColor} onDoubleClick={stopChangeColor} className='cuadrado' style={{backgroundColor:`rgb(${color.red},${color.green},${color.blue})`}}>
      
    </div>
  )
}

export default Cuadrado