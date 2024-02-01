import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import FAQ from './FAQ'
import { MessageCircleWarning } from 'lucide-react'

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
              Os dados mostrados aqui são salvos no <b>Local Storage</b> do
              navegador e podem ser apagados caso você limpe os dados de
              navegação.
              <FAQ />
            </CardDescription>
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  )
}
