export function Resume(){    
    return(
        <div className="container p-8 flex gap-4 flex-wrap">
            <div className="flex flex-1 h-[150px] flex-col gap-3 items-center justify-center rounded border">
                <span className="text-base text-muted-foreground">
                    Tarefas a fazer:
                </span>
                <span className="text-5xl font-bold">
                    03
                </span>
            </div>

            <div className="flex flex-1 h-[150px] flex-col gap-3 items-center justify-center rounded border">
                <span className="text-base text-muted-foreground">
                    Tempo total:
                </span>
                <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">02</span>
                    <span className="text-xl">h</span>
                </div>
            </div>
        </div>
    )
}