import React from 'react'
import "./app.scss"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home'
import Header from './Components/Headers/Header'

const App = () => {
  return ( 
  <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App


// API Key
// 8261998982e0debd08bd05552484e4b6

// API URL
// https://api.themoviedb.org/3/movie/550?api_key=8261998982e0debd08bd05552484e4b6