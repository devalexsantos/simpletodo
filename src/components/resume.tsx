import { TasksContext } from '@/contexts/Tasks'
import { useContext } from 'react'

export function Resume() {
  const { tasks } = useContext(TasksContext)

  const unfinishedTasks = tasks.filter((tasks) => tasks.done === false)
  const finishedTasks = tasks.filter((tasks) => tasks.done === true)

  return (
    <div className="container px-8 pb-8 flex gap-4 flex-wrap">
      <div className="flex flex-1 h-[150px] flex-col gap-3 items-center justify-center rounded border">
        <span className="text-base text-muted-foreground">
          Tarefas a fazer:
        </span>
        <span className="text-5xl font-bold">{unfinishedTasks.length}</span>
      </div>

      <div className="flex flex-1 h-[150px] flex-col gap-3 items-center justify-center rounded border">
        <span className="text-base text-muted-foreground">Concluídas:</span>
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold">{finishedTasks.length}</span>
        </div>
      </div>
    </div>
  )
}
