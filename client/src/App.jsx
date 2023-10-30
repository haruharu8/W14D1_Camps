import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import CampsDisplay from './pages/CampsDisplay'
import CampForm from './pages/CampForm'
import SingleCamp from './pages/SingleCamp'

function App() {
  // go get states data, put it in context

  useEffect(() => {
    try{

      axios({
        method: "GET",
        url: "/server/states"
      }).then ((response) => {
        // the states data should be in response.data
      })
  
    
    } catch (err) {
      console.error(err)
    }
  }, [])    

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
