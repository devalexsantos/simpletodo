import { Header } from "./components/layout/header"
import { Resume } from "./components/resume"
import { Tasks } from "./components/tasks"

export function App() {
  return(
    <div className="max-w-4xl m-auto flex flex-col gap-2">
    <Header />
    <Resume />
    <Tasks />
    </div>
  )
}
