'use client'
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons/lib'

export interface TaskListProps {
  id: number
  Icon: IconType
  title: string
  numberOfTasks?: number
  color?: string
}

interface ListProps extends TaskListProps {
  active: number
  setActive: (id: number) => void
}

function TaskList({ id, Icon, color, title, numberOfTasks, active, setActive }: ListProps) {
  const handleClick = (id: number) => {
    setActive(id)
  }
  useEffect(() => {}, [active])
  return (
    <div
      className={`${
        active === id ? 'bg-[#333] ' : 'bg-transparent'
      } flex relative items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-[#333]`}
      onClick={() => handleClick(id)}
    >
      {active === id && (
        <div className="absolute w-1 h-4 transition-all ease-in-out  rounded bg-blue-500 top-1/2 -translate-y-1/2 left-0" />
      )}
      <Icon className={color} />
      <p className="text-sm">{title}</p>
      {numberOfTasks && (
        <span className="ml-auto text-xs font-bold text-gray-300">{numberOfTasks}</span>
      )}
    </div>
  )
}

export default TaskList
