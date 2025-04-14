"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Horário de Atendimento", url: "/"},
    {id: 4, title: "Contato", url: "/"},
]

const Menu = () => {

    const [open, setOpen] = useState(false)

    // temporary
    const user = false

  return (
    <div> { !open ? (
            <Image src="/open.png" alt='' width={20} height={20} onClick={() => setOpen(true)}/> 
        ): (
           <Image src="/close.png" alt='' width={20} height={20} onClick={() => setOpen(false)}/>
        )}

        {open && (
            <div className='bg-red-500 text-white absolute left-0 top-24 z-10 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-start gap-8 pt-12 text-2xl uppercase'>
            {links.map(item => (
                <Link href={item.url} key={item.id} onClick={() => setOpen(false)} >{item.title}</Link>
            ))}
        {!user ? (
            <Link href="/login" onClick={() => setOpen(false)} >Login</Link>
            ): (
            <Link href="/order" onClick={() => setOpen(false)} >Pedidos</Link>
            )
         }
         <Link href="/cart" onClick={() => setOpen(false)} >
            <CartIcon />
         </Link>
        </div>
        )}
        
    </div>
  )
}

export default Menu