import { LucideMessageCircleQuestion } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogContent,
} from './ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function FAQ() {
  const FAQItems = [
    {
      title: 'Como faço para acessar as tarefas salvas em outro dispositivo?',
      answer:
        'Não é possível. O Local Storage é específico para cada dispositivo e navegador. A essência do SimpleTodo é você utilizá-lo conforme o seu ambiente (no navegador do seu trabalho registre tarefas do seu trabalho, no pessoal registre tarefas pessoais, etc.) sem precisar logar contas e separar as tarefas do seu dia a dia.',
    },
    {
      title: 'Posso recuperar tarefas excluídas acidentalmente?',
      answer:
        'Atualmente, não há uma funcionalidade de recuperação para tarefas excluídas. Certifique-se de revisar cuidadosamente antes de excluir uma tarefa. ',
    },
    {
      title: 'Existe um limite para o número de tarefas que posso adicionar?',
      answer:
        'Não há um limite estrito para o número de tarefas que você pode adicionar, mas o desempenho pode ser afetado se houver um grande volume de dados armazenados localmente. Recomendamos manter sua lista de tarefas gerenciável para uma melhor experiência de uso. Considere arquivar ou excluir tarefas concluídas para manter sua lista atualizada. A essência do SimpleTodo é ser um gerenciador de tarefas rápidas não recomendamos que você guarde as tarefas aqui por muito tempo.',
    },
    {
      title:
        'Como faço para garantir que minhas tarefas salvas no Local Storage não sejam perdidas ao limpar os dados do navegador?',
      answer:
        'No momento não é possível realizar um backup das suas tarefas em um arquivo. Estamos trabalho nesta funcionalidade.',
    },
    {
      title:
        'Existe um limite para o armazenamento de tarefas no Local Storage?',
      answer:
        'O Local Storage tem limitações de armazenamento que variam de navegador para navegador, geralmente em torno de 5 a 10 MB. Sabendo desse padrão, então você poderia armazenar cerca de mais de 20mil tarefas, porém, não recomendamos esta prática. Recomendamos que você armazene somente o que for utilizar no dia e apague no dia seguinte as tarefas concluídas ou antigas.',
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex gap-1 items-center mt-3">
          <LucideMessageCircleQuestion size={16} /> FAQ
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FAQ - Perguntas Frequentes</DialogTitle>
          <DialogDescription>
            Perguntas mais frequentes sobre o armazenamento dos dados.
          </DialogDescription>
        </DialogHeader>
        <Accordion type="single" collapsible>
          {FAQItems.map((faqItem, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                {faqItem.title}
              </AccordionTrigger>
              <AccordionContent>
                <p>{faqItem.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  )
}
