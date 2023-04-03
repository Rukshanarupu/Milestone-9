import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import SideCart from './Components/SideCart/SideCart'

function App() {
  return (
    <div className="App">
      <div className="header m-auto mb-3">
        <Header></Header>
      </div>

      <div className="main row">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>

      <Contact></Contact>
    </div>
  )
}

export default App
