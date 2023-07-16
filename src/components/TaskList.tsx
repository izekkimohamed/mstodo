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
        active === id ? 'bg-gray-700' : 'bg-transparent'
      } flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-700 `}
      onClick={() => handleClick(id)}
    >
      <Icon className={color} />
      <p className="text-sm">{title}</p>
      {numberOfTasks && (
        <span className="ml-auto text-xs font-bold text-gray-300">{numberOfTasks}</span>
      )}
    </div>
  )
}

export default TaskList
