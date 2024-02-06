import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    // setCounter(prevCounter => prevCounter + 1)
    setCounter(counter + 1)

      // counter = counter + 1
  }
  const removeValue = () =>{
    // setCounter(prevCounter => prevCounter - 1 )
    setCounter(counter - 1)


      // counter = counter - 1
  }

  return (
    <>
     <h1>Jeet Sabhadiya</h1>
     <h2>Counter Value :{counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value</button>

     <p>footer : {counter}</p>
    </>
  )
}

export default App;



