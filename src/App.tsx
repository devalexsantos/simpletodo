import { Header } from "./components/layout/header"
import { Resume } from "./components/resume"

export function App() {
  return(
    <div className="max-w-4xl m-auto flex flex-col gap-4">
    <Header />
    <Resume />
    <div className="container p-8">
      <h1>Hellow</h1>
    </div>
    </div>
  )
}
