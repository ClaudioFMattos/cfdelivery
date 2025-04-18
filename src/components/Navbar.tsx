import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

    const user = false
  return (
    <div className='h-12 p-4 text-red-500 flex items-center justify-between border-b-2 border-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
        <div className='hidden md:flex items-center justify-start gap-4 flex-1'>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contato</Link>
        </div>
        {/* {Logo} */}
        <div className='font-semibold text-2xl md:font-bold md:3xl text-center flex-1'>
            <Link href="/">CFMassimo</Link>
        </div>
        {/* {Mobile Menu} */}
        <div className='md:hidden'>
            <Menu />
        </div>

        {/* {lright links} */}
        <div className='hidden md:flex items-center gap-4 flex-1 justify-end'>
            <div className='md:absolute top-3 right-2 lg:top-2 lg:right-24 flex items-center px-1 lg:px-2 py-1 bg-orange-300 gap-2 cursor-pointer rounded-md'>
                <Image src="/phone.png" alt='phone' width={20} height={20} />
                <span>54 99661 5894</span>
            </div>

            {!user ? (
                <Link href="/login" className='border-2 border-red-500 text-red-500 px-4 py-1 rounded-full font-semibold hover:bg-red-500 hover:text-white duration-300 transition-all'>Login</Link>
            ) : (
                <Link href="/order" className='border-red-500 text-red-500 px-4 py-1 rounded-md font-semibold hover:bg-red-500 hover:text-white duration-300 transition-all'>Pedidos</Link>
            )
            }
            
            <CartIcon />
        </div>
    </div>
  )
}

export default Navbar 