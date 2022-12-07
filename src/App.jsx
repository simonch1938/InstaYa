import { useState } from 'react'
import './App.css'
import Login from './components/auth/login';
import PktsHome from './components/pkts/pkts-home';
import Pkt from './components/pkts/pkt';
import PktEdit from './components/pkts/pkt-edit';
import PktNew from './components/pkts/pkt-new';
import Contenedor from './components/contenedor';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pkts" element={<PktsHome />} />
            <Route path="/pkts/:id" element={<Pkt />} />
            <Route path="/pkts/:id/edit" element={<PktEdit />} />
            <Route path="/pkts/new" element={<PktNew />} />
            <Route path="/contenedor" element={<Contenedor />} />
        </Routes>
      </BrowserRouter>
    <div>
      <h2>InstaYa!</h2>
   
      <div>
        <a href="/login" target="_top" className="logo" align="left">
          <img src="/src/images/paq.png"  className="imgRedonda" alt="logo" align="left"/>
        </a> &nbsp;&nbsp;
        

        <a href="/PktNew" target="_top" className="logo">
          <img src="/src/images/car.svg" className="logo" alt="logo" align="center" />
        </a>
        </div>
        <h3>  Plataforma de Mensajería y Encomiendas</h3><br/>

      </div>

      
      <div className="card">
      
        <p>
          Textos
        </p>
      </div>
      <p className="read-the-docs">
       Espacio para el footer
      </p>
    </div>
  )
}

export default App
