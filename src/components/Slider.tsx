import Image from 'next/image'
import React from 'react'

export default function Slider() {
  return (
    <div>
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
            <div className='h-1/2 flex items-center font-bold justify-center text-red-500 gap-8 flex-col'>
                <h1 >Teste</h1>
                <button className='bg-red-500 text-white font-semibold cursor-pointer px-4 py-2 hover:bg-red-600 transition duration-300 ease-in-out'>Fazer pedido</button>
            </div>
            <div className='relative w-full h-1/2'>
                <Image src="/slide1.png" alt='' fill className='object-cover'/>
            </div>
        </div>
    </div>
  )
}
