import './App.css'
import Affiche from './affiche'
import Home from './home'
import Navv from './nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Router>
      <Navv/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/countrie/:id" element={<Affiche/>} />
        
      </Routes>

    </Router>
     
     
     
    </>
  )
}

export default App
