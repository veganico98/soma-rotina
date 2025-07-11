import { useEffect, useState } from 'react'

import rotina from './data/rotina.json'

import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

import './App.css'

function App() {

  const [dados, setDados] = useState(() => {
    const salvo = localStorage.getItem("rotinaDiaria");
    return salvo ? JSON.parse(salvo) : rotina
  });

  useEffect(() => {
    localStorage.setItem("rotinaEstudo", JSON.stringify(dados));
  }, [dados]);

  return (
    <>
      <Header />
        <Formulario dados={dados} setDados={setDados}/>
      <Footer />
    </>
  )
}

export default App
