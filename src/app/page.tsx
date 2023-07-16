'use client'

import { useState } from 'react'
import MiddelPart from '@/components/MiddelPart'
import Menu from '@/components/Menu'
import { FaBars } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'

export default function Home() {
  const [leftMenu, setLeftMenu] = useState(false)
  const [rightMenu, setRightMenu] = useState(false)

  const toggleLeftMenu = () => {
    setLeftMenu(!leftMenu)
  }

  const toggleRightMenu = () => {
    setRightMenu(!rightMenu)
  }
  return (
    <div className="w-full  h-screen bg-[#222] text-gray-300">
      <nav className="relative flex items-center justify-center w-full h-10 ">
        <Navbar />
      </nav>
      <main className="relative flex w-full h-full ">
        {/* {leftMenu && ( */}
        <div
          onClick={() => {
            toggleLeftMenu()
          }}
          className="absolute z-10 p-3 -top-10 md:hidden"
        >
          <FaBars className="" />
        </div>
        {/* )} */}
        <MiddelPart toggleRightMenu={toggleRightMenu} />

        <Menu
          type="Left"
          showMenu={leftMenu}
          toggleMenu={toggleLeftMenu}
          menuContent={<Profile leftMenu={leftMenu} />}
        />

        {rightMenu && (
          <Menu type="Right" showMenu={rightMenu} toggleMenu={toggleRightMenu} menuContent={''} />
        )}
      </main>
    </div>
  )
}
