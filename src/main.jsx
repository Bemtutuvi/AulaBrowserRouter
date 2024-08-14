import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Oferta from './Oferta'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/oferta" element={<Oferta/>}/>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)



