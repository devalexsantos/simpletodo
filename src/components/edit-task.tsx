import { Edit } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from './ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { TasksContext } from '@/contexts/Tasks'
import { Task } from '@/types/Task'

export function EditTask({ task }: { task: Task }) {
  const [open, setOpen] = useState(false)
  const { handleEditTask } = useContext(TasksContext)

  const formSchema = z.object({
    id: z.string(),
    title: z.string(),
    done: z.boolean(),
  })

  type TaskForm = z.infer<typeof formSchema>

  const { register, handleSubmit } = useForm<TaskForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: task.id,
      title: task.title,
      done: task.done,
    },
  })

  const handleEditForm = (values: Task) => {
    handleEditTask(values)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Edit size={18} className="text-muted-foreground hover:text-current" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Tarefa</DialogTitle>
          <DialogDescription>Adicione uma tarefa a ser feita</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleEditForm)}
          className="flex flex-col gap-3"
        >
          <Label htmlFor="task-title">Tempo previsto:</Label>
          <Textarea id="task-title" {...register('title')} required />
          <Button className="flex items-center gap-2" type="submit">
            Atualizar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
