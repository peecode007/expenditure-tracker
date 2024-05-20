import React from 'react'
import { ModeToggle } from './ui/themeChangerBtn'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-blue-100 h-16 flex items-center px-5 justify-between relative border-b-2 border-gray-300'>
      <Link href="/">
        <div className="logo rounded-lg">
          <Image src="/logo.svg" alt="Logo" width={190} height={150} className='bg-transparent' />
        </div>
      </Link>
      <div className="flex gap-3 items-center">
        <div>
          <ModeToggle />
        </div>

        <Link href='/dashboard' className='transition-background inline-flex h-8 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-r from-gray-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-2 font-medium text-gray-950 duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>Dashboard</Link>

        <button className='inline-flex h-8 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>Get Started</button>
      </div>

    </nav>
  )
}

export default Header
