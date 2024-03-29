import { Task } from '@/types/Task'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface TasksContextProps {
  tasks: Task[]
  handleAddTask: (values: Task) => void
  handleTitleClicked: (id: string) => void
  handleEditTask: (data: Task) => void
  handleDeleteTask: (data: Task) => void
  handleDeleteAllFinishedTasks: () => void
}

export const TasksContext = createContext({} as TasksContextProps)

export function TasksContextProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks-fastodo')
    return storedTasks
      ? JSON.parse(storedTasks)
      : [
          {
            id: '0',
            title: 'Minha primeira tarefa',
            done: false,
          },
        ]
  })

  useEffect(() => {
    localStorage.setItem('tasks-fastodo', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = async (values: Task) => {
    setTasks([...tasks, values])
    localStorage.setItem('tasks-fastodo', JSON.stringify([...tasks, values]))
  }

  const handleTitleClicked = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    )
    setTasks(updatedTasks)
  }

  const handleEditTask = (data: Task) => {
    const newTasks = tasks.map((task) =>
      task.id === data.id ? { ...task, title: data.title } : task,
    )
    setTasks(newTasks)
  }

  const handleDeleteTask = (data: Task) => {
    const newTasks = tasks.filter((item) => item.id !== data.id)
    setTasks(newTasks)
  }

  const handleDeleteAllFinishedTasks = () => {
    const unfinishedTasks = tasks.filter((task) => task.done === false)
    setTasks(unfinishedTasks)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleTitleClicked,
        handleEditTask,
        handleDeleteTask,
        handleDeleteAllFinishedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
