import { Trash } from 'lucide-react'
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Task } from '@/types/Task'
import { Button } from './ui/button'
import { useContext, useState } from 'react'
import { TasksContext } from '@/contexts/Tasks'

export function DeleteTask({ task }: { task: Task }) {
  const { handleDeleteTask } = useContext(TasksContext)
  const [open, setOpen] = useState(false)

  const handleFormDelete = (task: Task) => {
    handleDeleteTask(task)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Trash size={18} className="text-muted-foreground hover:text-current" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deletar Tarefa</DialogTitle>
          <DialogDescription>Esta ação é irreversível</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <span className="font-bold">{task.title}</span>
          <div className="flex gap-3">
            <Button
              className="flex-1"
              variant="destructive"
              onClick={() => handleFormDelete(task)}
            >
              Deletar
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
