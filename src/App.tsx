import Analytics from './components/analytics'
import { Footer } from './components/layout/footer'
import { Header } from './components/layout/header'
import { Resume } from './components/resume'
import { Tasks } from './components/tasks'
import Warning from './components/warning'
import { Helmet } from 'react-helmet'

export function App() {
  return (
    <>
      <Helmet>
        <Analytics />
      </Helmet>
      <div className="max-w-4xl min-h-[100vh] m-auto flex flex-col gap-2">
        <Header />
        <Resume />
        <Tasks />
        <Warning />
        <Footer />
      </div>
    </>
  )
}
