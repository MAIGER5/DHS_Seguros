import { } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
    <div className='position-realtive'>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/>

      </Routes>
      <Footer/>
    </div>

    </BrowserRouter>
  )
}

export default App
