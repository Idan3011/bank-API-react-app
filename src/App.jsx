import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'

function App() {
 

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/users' element={<Users />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
