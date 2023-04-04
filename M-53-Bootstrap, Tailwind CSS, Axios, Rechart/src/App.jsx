import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceList from './Components/PriceList/PriceList'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-5xl text-center text-purple-950 mb-3'>Hellow from tailwind</h1>
      <PriceList></PriceList>
    </div>
  )
}

export default App
