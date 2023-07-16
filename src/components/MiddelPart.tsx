import React from 'react'

function MiddelPart({ toggleRightMenu }: { toggleRightMenu: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center h-full p-10 text-xl font-bold bg-[#171717] md:rounded-t-lg  start grow md:relative md:order-2"></div>
  )
}

export default MiddelPart
