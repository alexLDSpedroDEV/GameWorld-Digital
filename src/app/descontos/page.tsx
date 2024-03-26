import React from 'react'

function Descontos() {
  return (
    <section className='grid grid-cols-1 xl:grid-cols-2 xl:grid-cols-[400px, 400px] xl:m-auto w-screen h-auto min-h-[1000px] xl:min-h-[700px] max-w-[1200px]'>
        <div className='grid justify-center items-center bg-gray-900 shadow shadow-gray-800 shadow-lg p-4 mb-4 sm:w-[90vw] sm:m-auto sm:h-[400px] xl:w-[550px] '>
            <h1 className='text-white uppercase text-[2em] font-extrabold'> red dead redemption 2</h1>
            <p className='text-white/40 text-[1em]'> Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.</p>
        
            <div className="p-2 text-center bg-[#3CB6C0] rounded-lg cursor-pointer w-[200px] text-white">Purchase</div>
        </div>
        <div className='grid justify-center items-center bg-gray-900 shadow shadow-gray-800 shadow-xl p-4 mb-4 sm:w-[90vw] sm:m-auto sm:h-[400px] xl:w-[550px]'>
            <h1 className='text-white uppercase text-[2em] font-extrabold'> God of War Ragnarök</h1>
            <p className='text-white/40 text-[1em]'> God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for both the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series.</p>
            <div className="p-2 text-center bg-[#3CB6C0] rounded-lg cursor-pointer w-[200px] text-white">Purchase</div>
        </div>
        
    </section>
  )
}

export default Descontos