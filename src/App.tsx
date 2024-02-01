import { Footer } from './components/layout/footer'
import { Header } from './components/layout/header'
import { Resume } from './components/resume'
import { Tasks } from './components/tasks'
import Warning from './components/warning'

export function App() {
  return (
    <div className="max-w-4xl min-h-[100vh] m-auto flex flex-col gap-2">
      <Header />
      <Resume />
      <Tasks />
      <Warning />
      <Footer />
    </div>
  )
}
