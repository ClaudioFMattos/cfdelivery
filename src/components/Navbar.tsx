import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

    const user = false
  return (
    <div className='h-12 p-4 text-red-500 flex items-center justify-between border-b-2 border-red-500 uppercase'>
        <div className='hidden md:flex items-center gap-4'>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contato</Link>
        </div>
        {/* {Logo} */}
        <div>
            <Link href="/" className='font-bold text-2xl md:3xl'>CFMassimo</Link>
        </div>
        {/* {Mobile Menu} */}
        <div className='md:hidden'>
            <Menu />
        </div>

        {/* {lright links} */}
        <div className='flex items-center bg-orange-300 gap-2 rounded-md p-1'>
            <Image src="/phone.png" alt='' width={20} height={20} />
            <span>(54) 99661 5894</span>
        </div>
        <div className='hidden md:flex items-center gap-6 '>
            {!user ? (
                <Link href="/login" className='bg-red-500 text-white px-4 py-1 rounded-md font-semibold hover:bg-red-600 duration-300 transition-all ease-in-out'>Login</Link>
            ) : (
                <Link href="/order" className='bg-red-500 text-white px-4 py-1 rounded-md font-semibold hover:bg-red-600 duration-300 transition-all ease-in-out'>Pedidos</Link>
            )
            }
            
            <CartIcon />
        </div>
    </div>
  )
}

export default Navbar 