import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import CampsDisplay from './pages/CampsDisplay'
import CampForm from './pages/CampForm'
import SingleCamp from './pages/SingleCamp'

function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CampsDisplay /> } />
        <Route path="/camps/new" element={<CampForm /> } />
        {/* query, param, put it into context */}
        <Route path="/camps/:campId" element={<SingleCamp /> } />
      </Routes>
    </div>
  )
}

export default App
