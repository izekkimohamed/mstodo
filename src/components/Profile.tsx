'use client'

import { useEffect, useState } from 'react'
import { MdPostAdd } from 'react-icons/md'
import Input from './Input'
import ProfileDetails from './ProfileDetails'
import TasksGroup from './TasksGroup'
import { FaPlus } from 'react-icons/fa'

function Profile({ leftMenu }: { leftMenu: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (leftMenu === false) {
      setIsOpen(false)
    }
  }, [leftMenu])

  return (
    <div className="flex flex-col w-full h-full gap-3">
      <div className="p-2 ">
        <ProfileDetails isOpen={isOpen} setIsOpen={setIsOpen} />
        <Input />
      </div>

      <div className="flex flex-col divide-y divide-gray-700 grow">
        <TasksGroup />
      </div>
      <div className="flex items-center h-10 text-base ">
        <button className="flex items-center h-full gap-2 px-2 rounded-sm grow hover:bg-gray-600">
          <FaPlus />
          <span className="font-bold">Add Task</span>
        </button>
        <button className="flex items-center h-full gap-2 px-2 rounded-sm hover:bg-gray-600">
          <MdPostAdd className="p-0 text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default Profile
