import React from 'react'

const Formulario = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-sky-100'>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2 bg-white p-6 rounded-lg shadow-lg w-96'>
                
                    <label htmlFor='monday' className='text-sky-600 font-bold'>Segunda-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />

                    <label htmlFor='monday' className='text-sky-600 font-bold'>Terça-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />
                    
                    <label htmlFor='monday' className='text-sky-600 font-bold'>Quarta-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />
                

                
                    <label htmlFor='monday' className='text-sky-600 font-bold'>Quinta-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />
                    
                    <label htmlFor='monday' className='text-sky-600 font-bold'>Sexta-feira</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />
                    
                    <label htmlFor='monday' className='text-sky-600 font-bold'>Sábado</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />
                

                            
                    <label htmlFor='monday' className='text-sky-600 font-bold'>Domingo</label>
                    <input type='number' id='monday' placeholder='Digite em minutos:' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />
                    
                    <button type='submit' className='bg-purple-700 rounded-r-lg gap-20'>Enviar</button>
                
            </div>
        </form>
    </div>
  )
}

export default Formulario