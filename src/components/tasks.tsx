import { Checkbox } from '@/components/ui/checkbox'
import { useContext } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AddTasks } from './add-task'
import { TasksContext } from '@/contexts/Tasks'
import { EditTask } from './edit-task'
import { DeleteTask } from './delete-task'
import { Clock } from 'lucide-react'
import { DeleteAllTasks } from './delete-all-tasks'

export function Tasks() {
  const { tasks, handleTitleClicked } = useContext(TasksContext)

  const finishedTasks = tasks.filter((task) => task.done === true)

  return (
    <div className="container flex-1 px-8 flex flex-col gap-8">
      <AddTasks />
      <div className="w-full">
        <Tabs defaultValue="not-complete" className="w-full">
          <TabsList className="flex w-full">
            <TabsTrigger className="flex-1" value="not-complete">
              A Fazer
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="complete">
              Concluídas ({finishedTasks.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="not-complete">
            <div className="flex flex-col gap-3">
              {tasks.map((task, index) => {
                if (task.done === false) {
                  return (
                    <div
                      key={index}
                      className="rounded border flex justify-between items-center p-4 gap-4"
                    >
                      <Checkbox
                        defaultChecked={task.done}
                        checked={task.done}
                        onClick={() => handleTitleClicked(task.id)}
                      />
                      <div className="flex-1 overflow-x-hidden text-ellipsis">
                        <span
                          className={`cursor-pointer ${task.done && 'line-through text-muted-foreground'}`}
                          onClick={() => handleTitleClicked(task.id)}
                        >
                          {task.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {task.time}min
                        </span>
                      </div>
                      <EditTask task={task} />
                      <DeleteTask task={task} />
                    </div>
                  )
                }

                return null
              })}
            </div>
          </TabsContent>
          <TabsContent value="complete">
            <div className="flex flex-col gap-3">
              {finishedTasks.length > 0 && <DeleteAllTasks />}
              {tasks.map((task, index) => {
                if (task.done === true) {
                  return (
                    <div
                      key={index}
                      className="rounded border flex justify-between items-center p-4 gap-4"
                    >
                      <Checkbox
                        defaultChecked={task.done}
                        checked={task.done}
                        onClick={() => handleTitleClicked(task.id)}
                      />
                      <div className="flex-1 overflow-x-hidden text-ellipsis">
                        <span
                          className={`cursor-pointer ${task.done && 'line-through text-muted-foreground'}`}
                          onClick={() => handleTitleClicked(task.id)}
                        >
                          {task.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {task.time}min
                        </span>
                      </div>
                      <DeleteTask task={task} />
                    </div>
                  )
                }
                return null
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
