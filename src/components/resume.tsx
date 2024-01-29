import { TasksContext } from "@/contexts/Tasks"
import { useContext } from "react"

export function Resume(){
    
    const {tasks} = useContext(TasksContext)

    const filteresTasks = tasks.filter(tasks => tasks.done === false)
    
    const totalTime = filteresTasks.reduce((total, item) => total + item.time, 0);

    function formatTime(time: number) {
        if (time >= 60) {
          const hours = Math.floor(time / 60);
          const minutes = time % 60;
          return(
            <div className="flex items-end gap-2">
            <div>
                {hours}
                <span className="text-xl">h</span>
            </div>
            {minutes !== 0 && <span className="text-xl">{minutes}min</span>}
            </div>
          )
        } else {
            return(
                <div className="flex items-end gap-1">
                {time}
                <span className="text-xl">min</span>
                </div>
              )
        }
      }
    
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
                    <span className="text-5xl font-bold flex">{formatTime(totalTime)}</span>
                    
                </div>
            </div>
        </div>
    )
}