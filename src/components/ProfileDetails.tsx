import Image from 'next/image'
import { LuChevronsUpDown } from 'react-icons/lu'

const ProfileDetails = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className="relative w-full mb-5">
      <button
        className="relative flex items-center justify-start gap-3 text-xs font-bold rounded-full"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          className="rounded-full ring-1 md:ring-2 ring-gray-300"
          src={'https://i.pravatar.cc/300'}
          alt="Avatar"
          width={40}
          height={40}
        />
        <div className="flex flex-col items-start">
          <p className="text-gray-200 ">Izekki Mohamed</p>
          <div className="flex font-normal text-gray-300">
            <p>medizekki@gmail.com</p>
            <LuChevronsUpDown />
          </div>
        </div>
      </button>
      <div
        className={isOpen ? 'absolute w-full mt-2  top-full bg-[#222] rounded-md z-10' : 'hidden'}
      >
        <div className="flex flex-col items-center w-full text-lg font-semibold border rounded-md border-gray-500/50">
          <button className="flex justify-center w-full py-2 transition-all hover:bg-gray-600/60 ">
            Account
          </button>
          <button className="flex justify-center w-full py-2 transition-all hover:bg-gray-600/60 border-gray-500/50 border-y ">
            Settings
          </button>
          <button className="flex justify-center w-full py-2 transition-all hover:bg-gray-600/60 ">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProfileDetails
