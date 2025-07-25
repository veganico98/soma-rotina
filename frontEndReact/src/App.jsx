import { useEffect, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

import './App.css'

function App() {

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/rotina')
      .then((res) => res.json())
      .then((json) => setDados(json))
      .catch((err) => console.error("Erro ao carregar dados da API:", err))
  }, []);

  const [dados, setDados] = useState(() => {
    const salvo = localStorage.getItem('rotinaEstudo');
    return salvo ? JSON.parse(salvo) : rotinaInicial;
  });

  const [resultadoSoma, setResultadoSoma] = useState(null);

  const rotinaInicial = {
    sunday: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0
  };


  return (
    <>
      <Header />
        <Formulario 
              dados={dados} 
              setDados={setDados} 
              resultadoSoma={resultadoSoma}
              setResultadoSoma={setResultadoSoma}/>          
      <Footer />
    </>
  )
}

export default App
