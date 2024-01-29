import { Trash } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from './ui/dialog'
import { useContext, useState } from 'react'
import { TasksContext } from '@/contexts/Tasks'

export function DeleteAllTasks() {
  const [open, setOpen] = useState(false)
  const { handleDeleteAllFinishedTasks } = useContext(TasksContext)

  const handleDeleteForm = () => {
    handleDeleteAllFinishedTasks()
    setOpen(false)
  }

  return (
    <div className="flex justify-end">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2" variant="outline">
            <Trash size={18} />
            Apagar Tudo
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apagar todas as tarefas finalizadas?</DialogTitle>
            <DialogDescription>Esta ação é irreversível.</DialogDescription>
          </DialogHeader>
          <div className="flex gap-3">
            <Button
              className="flex-1"
              variant="destructive"
              onClick={() => handleDeleteForm()}
            >
              Apagar
            </Button>
            <DialogClose asChild>
              <Button className="flex-1" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
