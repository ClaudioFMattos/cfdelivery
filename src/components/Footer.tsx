import React from 'react'
import Link from 'next/link'
import { MdCopyright } from "react-icons/md"

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 text-red-500 flex items-center justify-between border-t-2 border-red-500'>
      <Link href="/" className='font-bold text-xl flex-1'>CFMassimo</Link>
      <p className='flex items-center'> <MdCopyright /> Todos os direitos reservados</p>
    </div>
  )
}

export  default Footer