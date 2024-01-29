import { TasksContext } from "@/contexts/Tasks"
import { useContext } from "react"

export function Resume(){
    
    const {tasks} = useContext(TasksContext)

    const filteresTasks = tasks.filter(tasks => tasks.done === false)
    
    const totalTime = filteresTasks.reduce((total, item) => total + item.time, 0);
    
    return(
        <div className="container p-8 flex gap-4 flex-wrap">
            <div className="flex flex-1 h-[150px] flex-col gap-3 items-center justify-center rounded border">
                <span className="text-base text-muted-foreground">
                    Tarefas a fazer:
                </span>
                <span className="text-5xl font-bold">
                    {filteresTasks.length}
                </span>
            </div>

            <div className="flex flex-1 h-[150px] flex-col gap-3 items-center justify-center rounded border">
                <span className="text-base text-muted-foreground">
                    Tempo total:
                </span>
                <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">{totalTime}</span>
                    <span className="text-xl">min</span>
                </div>
            </div>
        </div>
    )
}