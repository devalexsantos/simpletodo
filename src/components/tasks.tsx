import { Edit, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import { useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddTasks } from "./add-task";
import { TasksContext } from "@/contexts/Tasks";
import { EditTask } from "./edit-task";


export function Tasks() {
    const { tasks, handleTitleClicked } = useContext(TasksContext)

    return (
        <div className="container px-8 flex flex-col gap-8">
            <AddTasks />
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
                                    <span className="text-muted-foreground">{task.time}min</span>
                                    <EditTask task={task} index={index} />
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
                                        <span className="text-muted-foreground">{task.time}min</span>
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