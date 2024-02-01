import { LucideMessageCircleQuestion, MessageCircleWarning } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'

export default function Warning() {
  return (
    <div className="p-8">
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle className="text-base flex gap-2 items-center">
              <MessageCircleWarning /> Atenção
            </CardTitle>
            <CardDescription>
              Informação importante sobre o armazenamento dos dados.
            </CardDescription>
          </CardHeader>
          <p className="text-sm mb-3">
            Os dados mostrados aqui são salvos no <b>Local Storage</b> do
            navegador e podem ser apagados caso você limpe os dados de
            navegação.
          </p>
          <Button size="sm" className="flex gap-1 items-center">
            <LucideMessageCircleQuestion size={16} /> FAQ
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
