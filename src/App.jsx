import { useState,useEffect } from 'react'
import reactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import axios from 'axios'


  

//aca vamos a usar una api - rickandmortyapi.com

function App (){
  
  const [personajes,setPersonajes]=useEffect([])

  useEffect (()=>{
      const obtenerPersonajes=async()=>{
        const response = await axios.get('https://rickandmortyapi.com/api/character')
      
      console.log(personajes)
        setPersonajes(response.data.results)
        console.log(personajes)
      }

      obtenerPersonajes()
      
  },[])

  return(
    <div>
      <div>{personajes.map((personaje)=>(
        <div key={personaje.id}>
        <img src={personaje.image} alt="" />  
          <h2>{personaje.name}</h2>
        </div>
      )
       
      )}</div>
    </div>
  )
}

export default App



/*
  
//js
  export function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  //(funcion anonima,dependencia)
  //funcion anonima ()=>{}

  useEffect(()=>{
  document.title=`count:${count}`
  console.log(`soy el contador dentro del useEffect ${count}`)
  return ()=>{
    document.title='saludo'
  }
  },[count])

  //dependencia vací se renderizara siempre. esto se ve en la parte de la pestaña. es como un while infinito, 
  //se consumen muchos recursos. 

  //dependencia con [] se renderiza una sola vez. 

  //dependencia con variable [count], se va renderizar siempre que la variable cambie, usar esta porque la primera consume mucho, 
  //en cambio esta solo si la variable cambia


function mifunction(){
    setCount(count+1)
    console.log('soy el contador de mi funcion', count)
  }

    return (
      <div>
        <p> el contador es {count}</p>
        <button onClick={mifunction}> Incrementar</button>
      </div>
    )
  }
*/
