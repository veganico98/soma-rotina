import { useState } from 'react'

import rotina from './data/rotina.json'

import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

import './App.css'

function App() {

  const [dados, setDados] = useState(rotina);

  return (
    <>
      <Header />
        <Formulario dados={dados} setDados={setDados}/>
      <Footer />
    </>
  )
}

export default App
