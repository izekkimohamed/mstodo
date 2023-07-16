import { Anek_Telugu } from 'next/font/google'
import { BsCheck2Circle } from 'react-icons/bs'

const anek_telugu = Anek_Telugu({
  subsets: ['latin']
})

function Navbar() {
  return (
    <div className={`${anek_telugu.className} flex gap-2 font-bold text-xl`}>
      <BsCheck2Circle />
      <span>{"Todo's"}</span>
    </div>
  )
}

export default Navbar
