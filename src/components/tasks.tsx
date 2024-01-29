import { Edit, PlusCircle, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


type Task = {
    title: string
    done: boolean
    time: number
}

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks-fastodo");
        return storedTasks ? JSON.parse(storedTasks) : [
            {
                title: "Criar formulário de contato para uma tarefa do banco",
                done: false,
                time: 3600,
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem("tasks-fastodo", JSON.stringify(tasks));
    }, [tasks]);

    const handleTitleClicked = (index: number) => {
        const updatedTasks = [...tasks];
        const updatedTask = { ...updatedTasks[index] };
        updatedTask.done = !updatedTask.done;
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    }


    return (
        <div className="container px-8 flex flex-col gap-8">
            <Button className="flex items-center gap-3 w-full">
                <PlusCircle />
                Adicionar Tarefa
            </Button>
            <div className="w-full">
            <Tabs defaultValue="not-complete" className="w-full">
                <TabsList className="flex w-full">
                    <TabsTrigger className="flex-1" value="not-complete">A Fazer</TabsTrigger>
                    <TabsTrigger className="flex-1" value="complete">Concluídas</TabsTrigger>
                </TabsList>
                <TabsContent value="not-complete">
                    <div className="flex flex-col gap-3">
                        {tasks.map((task, index)=> {
                            if(task.done === false){
                            return (
                                <div key={index} className="rounded border flex justify-between items-center p-4 gap-4">
                                    <Checkbox defaultChecked={task.done} checked={task.done} onClick={() =>handleTitleClicked(index)}/>
                                    <span className={`flex-1 cursor-pointer ${task.done && 'line-through text-muted-foreground'}`} onClick={() =>handleTitleClicked(index)}>{task.title}</span>
                                    <span className="text-muted-foreground">{task.time / 60}min</span>
                                    <Edit size={18} className="text-muted-foreground hover:text-current"/>
                                    <Trash size={18} className="text-muted-foreground hover:text-current"/>
                                </div>
                            )
                            } 
                        })}
                    </div>
                </TabsContent>
                <TabsContent value="complete">
                    <div className="flex flex-col gap-3">
                            {tasks.map((task, index)=> {
                                if(task.done === true){
                                return (
                                    <div key={index} className="rounded border flex justify-between items-center p-4 gap-4">
                                        <Checkbox defaultChecked={task.done} checked={task.done} onClick={() =>handleTitleClicked(index)}/>
                                        <span className={`flex-1 cursor-pointer ${task.done && 'line-through text-muted-foreground'}`} onClick={() =>handleTitleClicked(index)}>{task.title}</span>
                                        <span className="text-muted-foreground">{task.time / 60}min</span>
                                        <Edit size={18} className="text-muted-foreground hover:text-current"/>
                                        <Trash size={18} className="text-muted-foreground hover:text-current"/>
                                    </div>
                                )
                                } 
                            })}
                    </div>
                </TabsContent>
            </Tabs>
            </div>
        </div>
    )
}