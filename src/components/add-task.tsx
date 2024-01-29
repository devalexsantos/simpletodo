import { PlusCircle } from 'lucide-react'
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
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { TasksContext } from '@/contexts/Tasks'
import { Task } from '@/types/Task'
import { v4 as uuidv4 } from 'uuid'

export function AddTasks() {
  const [open, setOpen] = useState(false)

  const { handleAddTask } = useContext(TasksContext)

  const formSchema = z.object({
    id: z.string(),
    title: z.string(),
    time: z.coerce.number().min(5, {
      message: 'A tarefa deve conter no mínimo 05 minutos.',
    }),
    done: z.boolean(),
  })

  type TaskForm = z.infer<typeof formSchema>

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
      title: '',
      time: 5,
      done: false,
    },
  })

  const handleAddForm = (values: Task) => {
    const id = uuidv4()
    handleAddTask({ ...values, id })
    reset()
    setOpen(false)
  }

  return (
    <div className="w-full">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-3 w-full">
            <PlusCircle />
            Adicionar Tarefa
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Tarefa</DialogTitle>
            <DialogDescription>
              Adicione uma tarefa a ser feita
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(handleAddForm)}
            className="flex flex-col gap-3"
          >
            <Label htmlFor="task-title">Descrição:</Label>
            <Textarea
              id="task-title"
              {...register('title')}
              required
              placeholder="Descreva aqui sua tarefa de forma resumida."
            />

            <Label htmlFor="task-time">
              Tempo previsto <strong>(em minutos)</strong>:
            </Label>
            <Input id="task-time" type="number" min={5} {...register('time')} />
            <span className="text-red-600">
              {errors.time && errors.time.message}
            </span>
            <Button className="flex items-center gap-2" type="submit">
              Cadastrar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
