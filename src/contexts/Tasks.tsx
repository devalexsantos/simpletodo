import { Task } from "@/types/Task";
import { ReactNode, createContext, useEffect, useState } from "react";

interface TasksContextProps {
    tasks: Task[]
    handleAddTask: (values: Task)=> void
    handleTitleClicked: (index: number)=> void
    handleEditTask: (task: Task, index: number)=> void
}

export const TasksContext = createContext({} as TasksContextProps)

export function TasksContextProvider({children}: {children: ReactNode}) {

    const [tasks, setTasks] = useState<Task []>(() => {
        const storedTasks = localStorage.getItem("tasks-fastodo");
        return storedTasks ? JSON.parse(storedTasks) : [
            {
                title: "Minha primeira tarefa",
                done: false,
                time: 15,
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem("tasks-fastodo", JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = async (values: Task) => {
        setTasks([...tasks, values]);
        localStorage.setItem("tasks-fastodo", JSON.stringify([...tasks, values]));
    }

    const handleTitleClicked = (index: number) => {
        const updatedTasks = [...tasks];
        const updatedTask = { ...updatedTasks[index] };
        updatedTask.done = !updatedTask.done;
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    }

    const handleEditTask = (task: Task, index: number) => {
        const updatedTasks = [...tasks];
        const updatedTask = { ...updatedTasks[index] };
        updatedTask.title  = task.title;
        updatedTask.time = task.time;
        updatedTasks[index] = updatedTask
        setTasks(updatedTasks)
    }

    return(
        <TasksContext.Provider value={{tasks, handleAddTask, handleTitleClicked, handleEditTask}}>
            {children}
        </TasksContext.Provider>
    )
}