import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "jeet",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-orange-300 text-white p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username=" jeet" btnText="click me" />
      <Card username="jeet" />
    </>
  )
}

export default App