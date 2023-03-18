import React,{useState,useContext} from 'react'
const miContexto = React.createContext(null);
function Componente1() {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>
        El token es: {state.token}
      </h1>
      <Componente2/>
    </div>
  )
}


function Componente2() {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>
        La sesion es: {state.sesion}
      </h2>
    </div>
  )
}



export default function ComponenteConContexto() {
  const estadoInicial = {
    token:'1234567',
    sesion:1
  }

  const [sessionData,setSessionData] = useState(estadoInicial);

  function actualizarSesion(){
    setSessionData({
      token:'JWT456',
      sesion:sessionData.sesion + 1
    })
  }

  return (
    <div>
      <miContexto.Provider value={sessionData}>
        <Componente1 />
        <button onClick={actualizarSesion}>Actualizar Session</button>
      </miContexto.Provider>
    </div>
  )
}


