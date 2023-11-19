import { } from 'react'
import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { Home } from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Intermediation } from './components/Intermediation/Intermediation'
import { SegurosAutomotor } from './components/SegurosAutomotor/SegurosAutomotor'
import { Contact } from './components/Conctact/Contact'
import { Polizas } from './components/Polizas/Polizas'
import { SegurosFamilia } from './components/SegurosFamilia/SegurosFamilia'
import { Nosotros } from './components/Nosotros/Nosotros'
import ScrollToTop from './components/ScrollToTop'
import { PublicityVideo } from './components/PublicityVideo/PublicityVideo'

function App() {

  

  return (
    <HashRouter>
      <ScrollToTop/>
        <Navbar/>
    
        <Routes>
    
          <Route path='/' element={<Home/>}/>
          <Route path='/Intermediation' element={<Intermediation/>}/>
          <Route path='/SegAutomotor' element={<SegurosAutomotor/>}/>
          <Route path='/SegFamilia' element={<SegurosFamilia/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Polizas' element={<Polizas/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/PublicityVideo' element={<PublicityVideo/>}/>
    
        </Routes>
        <Footer/>

    </HashRouter>
  )
}

export default App
