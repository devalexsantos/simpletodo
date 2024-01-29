import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Textarea } from "@/components/ui/textarea"
// import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TasksContext } from "@/contexts/Tasks";
import { Task } from "@/types/Task";

export function AddTasks(){

    const { handleAddTask } = useContext(TasksContext)

    const formSchema = z.object({
        title: z.string(),
        time: z.string(),
        done: z.boolean()
    })

    type TaskForm = z.infer<typeof formSchema>

    const {register, handleSubmit} = useForm<TaskForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            time: "1",
            done: false
        },
    })

    const handleAddForm = (values: Task) => {
        handleAddTask(values)
    }

    return(
        <div className="w-full">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex items-center gap-3 w-full">
                        <PlusCircle />
                        Adicionar Tarefa
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Adicionar Tarefa</DialogTitle>
                        <DialogDescription>Adicione uma tarefa a ser feita</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(handleAddForm)} className="flex flex-col gap-3">

                        <Textarea {...register('title')} />

      
                        <Input type="number" {...register('time')}/>
                        <Button className="flex items-center gap-2" type="submit">
                            Cadastrar
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}