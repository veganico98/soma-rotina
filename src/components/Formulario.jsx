import React from 'react'

const Formulario = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-indigo-950'>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='nome' className='text-sky-600 font-bold'>Nome</label>
                <input type='text' id='nome' placeholder='Digite seu nome' className='border border-sky-600 rounded-mb-2 p2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600' />
            </div>
        </form>
    </div>
  )
}

export default Formulario