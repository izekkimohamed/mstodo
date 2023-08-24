import clsx from 'clsx'
import { ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'

type MenuProps = {
  type: 'Left' | 'Right'
  showMenu: boolean
  toggleMenu: () => void
  menuContent: ReactNode
}

const Menu = ({ showMenu, toggleMenu, menuContent, type }: MenuProps) => {
  const menuClasses = clsx({
    'left-0': type === 'Left',
    'right-0': type === 'Right',

    'order-3': type === 'Right'
  })

  const menuContentClasses = clsx({
    'bg-cyan-500': type === 'Left',
    'bg-teal-500': type === 'Right'
  })

  return (
    <div
      className={`${menuClasses} ${
        showMenu ? 'absolute  md:relative md:block' : 'hidden'
      }  md:block relative  flex h-full w-full md:w-[30%] lg:w-[20%] `}
    >
      <div
        className={`bg-[#222] flex grow w-[60%] h-full md:w-full   ${
          type === 'Right' ? 'order-2' : ''
        } `}
      >
        {type === 'Right' && (
          <button className="flex w-5 ml-auto" onClick={toggleMenu}>
            <FaTimes />
          </button>
        )}
        <div className="relative grow max-w-full">{menuContent}</div>
      </div>
      <div className={`md:hidden bg-black/50 z-20  w-[40%] md:w-0`} onClick={toggleMenu}></div>
    </div>
  )
}

export default Menu
