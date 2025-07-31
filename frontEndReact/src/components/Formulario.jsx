import { useEffect } from 'react';
import './Formulario.css'

const Formulario = ({dados, setDados, setResultadoSoma, resultadoSoma, dadosSemana, setDadosSemana, totalSemana1, setTotalSemana1, totalSemana2, setTotalSemana2, mostrarComparacao, setMostrarComparacao, mostrarSoma, setMostrarSoma, comparacao, setComparacao, frase, setFrase, sendDays, setSendDays}) => {

  useEffect(() => {
    if (comparacao !== null){
      phrase();
    }
  }, [comparacao]);

  function handleChange(e) {
    const {name, value} = e.target;
    setDados(prev => ({
      ...prev,
      [name]: Number(value)
    }))
  }

  const enviarDados = async () => {
    const resposta = await fetch('http://127.0.0.1:8000/api/resultado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    const json = await resposta.json();
    console.log(json);

    setMostrarComparacao(false);
    setMostrarComparacao(false);
    setSendDays(true);
  };

  const gerarSoma = async () => {
    try{
      const resposta = await fetch('http://127.0.0.1:8000/api/resultado/soma',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

    if (!resposta.ok){
      throw new Error('Erro ao buscar soma');
    }
    
    const soma = await resposta.json();
    console.log("Soma recebida: ", soma);
      
    setResultadoSoma(soma);
    setMostrarSoma(true);
    setMostrarComparacao(false);
    setSendDays(false);


    const exportWeek = await fetch('http://127.0.0.1:8000/api/resultado/exportWeek',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({total_minutos: soma.total_minutos})
    })

    } catch (error) {
      console.error('Erro ao gerar soma: ', error);
    }
  };

  const buscarSemana = async () => {
    try {
      const resposta = await fetch('http://127.0.0.1:8000/api/resultado/semana');
      const json = await resposta.json();

      setDadosSemana(json);

      const semana1 = json.semana1?.[0]?.totalMinutos;
      const semana2 = json.semana2?.[0]?.totalMinutos;

      setTotalSemana1(semana1);
      setTotalSemana2(semana2);
      setComparacao(semana2 - semana1);
      setMostrarComparacao(true);

      // console.log("comparação:", comparacao);
      // console.log("Dados da semana:", json);
      // console.log("Total Semana 1:", semana1);
      // console.log("Total Semana 2:", semana2);

    }catch (error) {
      console.error('Erro ao buscar dados da semana:', error);
    }
  };

  const phrase = async () => {
    // console.log("Comparação:", comparacao);
    
    let message = '';
    
    if (comparacao > 0) {
      const resposta = await fetch('http://127.0.0.1:8000/api/resultado/congrats');
      const json = await resposta.json();
      message = (json.frase);
      setFrase(message);
    }else{
      const resposta = await fetch('http://127.0.0.1:8000/api/resultado/incentivo');
      const json = await resposta.json();
      message = (json.frase);
      setFrase(message);
    }
    console.log("Frase recebida:", message);
    return message;
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen mb-3'>
      
        <form className='flex flex-col'>
            <div className='flex flex-col gap-2 bg-white p-6 rounded-lg shadow-lg w-96'>        

              <div className='flex flex-col items-center'>
                <img className='h-30 w-30' src="SomaRotina.png" alt="Logo Soma Rotina" />       
              </div>

              <label htmlFor='sunday' className='day text-indigo-700 font-bold'>Domingo</label>
              <input type='number' id='sunday' name="sunday" onChange={handleChange} value={dados.sunday} placeholder='Digite em minutos:' className='border border-indigo-700 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />

              <label htmlFor='monday' className='day text-indigo-700 font-bold'>Segunda-feira</label>
              <input type='number' id='monday' name="monday" onChange={handleChange} value={dados.monday} placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
              
              <label htmlFor='tuesday' className='day text-indigo-700 font-bold'>Terça-feira</label>
              <input type='number' id='tuesday' name="tuesday" onChange={handleChange} value={dados.tuesday} placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
          
              <label htmlFor='wednesday' className='day text-indigo-700 font-bold'>Quarta-feira</label>
              <input type='number' id='wednesday' name="wednesday" onChange={handleChange} value={dados.wednesday} placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
              
              <label htmlFor='thursday' className='day text-indigo-700 font-bold'>Quinta-feira</label>
              <input type='number' id='thursday' name="thursday" onChange={handleChange} value={dados.thursday} placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
              
              <label htmlFor='friday' className='day text-indigo-700 font-bold'>Sexta-feira</label>
              <input type='number' id='friday' name="friday" onChange={handleChange} value={dados.friday} placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
                  
              <label htmlFor='saturday' className='day text-indigo-700 font-bold'>Sábado</label>
              <input type='number' id='saturday' name="saturday" onChange={handleChange} value={dados.saturday} placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
              
              <div className='flex flex-col items-center gap-1 '>
                <button type="button" onClick={enviarDados} className="w-85 bg-gradient-to-bl from-indigo-500 to-indigo-700 rounded-r-lg text-white hover:from-indigo-600 hover:to-blue-800">Enviar</button>
                <p className='text-indigo-800 text-sm'>{sendDays == true ? (
                  <span>Dados enviados!</span>
                ):(
                  <span>1º Envie os resultados. Clique em Enviar! ( ͡ಠ ͜ʖ ͡ಠ)</span>
                )}</p>
              </div>

              <div className='flex flex-col items-center mt-1'>
                <button type="button" onClick={gerarSoma} className="w-85 bg-gradient-to-bl from-indigo-500 to-indigo-700 rounded-r-lg text-white hover:from-indigo-600 hover:to-blue-800">Gerar soma</button>
                <p className='text-indigo-800 text-sm'>2º Gere a soma. Clique em Gerar Soma! ( ಠ ͜ʖರೃ)</p>
              </div>
              
            <div>
              <button type="button" onClick={buscarSemana} className="w-85 bg-gradient-to-bl from-indigo-500 to-indigo-700 rounded-r-lg text-white hover:from-indigo-600 hover:to-blue-800">comparar</button>
              <p className='text-indigo-800 text-sm'>3º Compare os resultados com sua semana passada. Clique em Comparar! (ง ͠° ͟ل͜ ͡°)ง</p>
            </div>
              

            {mostrarSoma &&
              resultadoSoma && resultadoSoma.total_minutos > 0 ? (

                <div className='mt-2 p-4 bg-indigo-100 text-indigo-900 rounded shadow'>
                  <p><strong>Total em minutos: </strong>{resultadoSoma.total_minutos}min</p>
                    <p className='flex flex-row'><strong>Horas: </strong>{resultadoSoma.horas} {resultadoSoma && resultadoSoma.minutos_restantes > 0 ? (
                      <span>:{resultadoSoma.minutos_restantes}min</span>
                        ) : (<span></span>)
                      }
                  </p>
                  {mostrarComparacao == true ? (
                  totalSemana2 >= totalSemana1 ? (
                    <div className='mt-1 p-4 bg-emerald-200 text-sm'>
                      <p className='text-green-600'>{comparacao}min a mais. "{frase}"</p>
                    </div>
                  ) : (
                    <div className='mt-1 p-4 bg-red-200 text-sm'>
                      <p className='text-red-600'>{comparacao}min. "{frase}"</p>
                    </div>
                  )) : (
                    <span></span>
                  )}

                </div>
              ) : (
                  <div className=' flex items-center justify-center'>
                    <div className='mt-4 p-4'>
                      <p className=' text-indigo-900 shadow'>
                        Por favor, gere uma soma válida.
                      </p>
                    </div>
                  </div>
                )
              }
            </div>
        </form>
    </div>
  )
}

export default Formulario