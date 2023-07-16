'use client'
import React, { useState } from 'react'
import TaskList, { TaskListProps } from './TaskList'
import { HiOutlineUser } from 'react-icons/hi'
import { BsListStars, BsStar, BsSun } from 'react-icons/bs'
import { GoHome } from 'react-icons/go'

const tasks: TaskListProps[] = [
  {
    id: 1,
    title: 'My Day',
    Icon: BsSun,
    numberOfTasks: 2,
    color: 'text-gray-300'
  },
  {
    id: 2,
    title: 'Important',
    Icon: BsStar,
    numberOfTasks: 5,
    color: 'text-red-300'
  },
  {
    id: 3,
    title: 'Planned',
    Icon: BsListStars,
    numberOfTasks: 20,
    color: 'text-green-300'
  },
  {
    id: 4,
    title: 'Assigned to me',
    Icon: HiOutlineUser,
    numberOfTasks: 5,
    color: 'text-orange-300'
  },
  {
    id: 5,
    title: 'Tasks ',
    Icon: GoHome,
    numberOfTasks: 2,
    color: 'text-indigo-300'
  }
]
function TasksGroup() {
  const [active, setActive] = useState(1)

  return (
    <div className="flex flex-col gap-1 mt-2 grow">
      {tasks.map((task) => (
        <TaskList
          key={task.id}
          title={task.title}
          Icon={task.Icon}
          id={task.id}
          numberOfTasks={task.numberOfTasks}
          color={task.color}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  )
}

export default TasksGroup
