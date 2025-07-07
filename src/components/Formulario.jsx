import React from 'react'

const Formulario = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-indigo-900'>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2 bg-white p-6 rounded-lg shadow-lg w-96'>
                
                    <label htmlFor='monday' className='text-indigo-700 font-bold'>Segunda-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />

                    <label htmlFor='monday' className='text-indigo-700 font-bold'>Terça-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
                    
                    <label htmlFor='monday' className='text-indigo-700 font-bold'>Quarta-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
                
                    <label htmlFor='monday' className='text-indigo-700 font-bold'>Quinta-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
                    
                    <label htmlFor='monday' className='text-indigo-700 font-bold'>Sexta-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
                    
                    <label htmlFor='monday' className='text-indigo-700 font-bold'>Sábado</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
                       
                    <label htmlFor='monday' className='text-indigo-700 font-bold'>Domingo</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-indigo-700 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-700' />
                    
                    <button type='submit' className='bg-indigo-700 rounded-r-lg gap-20'>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario