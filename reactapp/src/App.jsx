import React, { useState } from 'react'
import './App.css'
import Menu from './component/Menu'
import Article from './component/Article'
import Homepage from './component/Homepage'
// This matches your filename "Contect.jsx"
import Contact from "./component/Contact"; 
import { Route, Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState("Sample data")
  
  return (
    <>

      <Routes>
        <Route path="/article" element={<Article data={data} />} />
        <Route path="/contact" element={<contact />} />
        <Route path="/" element={<><Homepage /><Menu /></>} />
      </Routes>
      
    </>
  )
}

export default App