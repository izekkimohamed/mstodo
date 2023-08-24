'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

function MiddelPart({ toggleRightMenu }: { toggleRightMenu: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center h-full text-xl overflow-hidden font-bold bg-[#171717] md:rounded-t-lg  start grow md:relative md:order-2">
      <div className="grow grid place-items-center">{'Icon'}</div>
      <div className="w-full h-20 bg-green-400"></div>
    </div>
  )
}

export default MiddelPart
