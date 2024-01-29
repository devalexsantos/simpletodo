import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './globals.css'
import { TasksContextProvider } from './contexts/Tasks.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
