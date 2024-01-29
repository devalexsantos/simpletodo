import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="containter flex flex-col justify-center items-center gap-3 p-8 text-muted-foreground md:flex-row">
      <span>
        Feito com amor 🖤 por{' '}
        <a
          className="underline"
          href="https://www.linkedin.com/in/devalexsantos/"
          target="_blank"
          rel="noreferrer"
        >
          Alex Santos
        </a>
        .
      </span>
      <span className="flex items-center gap-2">
        <Github size={22} />
        <a
          className="hover:underline"
          href="https://github.com/devalexsantos/fastodo"
          target="_blank"
          rel="noreferrer"
        >
          Github do projeto.
        </a>
      </span>
    </footer>
  )
}
