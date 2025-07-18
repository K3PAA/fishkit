import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Textarea } from '@/components/ui/textarea'
import { CardT, EditCardSchemaT } from '@/lib/types'
import { editCardSchema } from '@/lib/validation/card/edit-card'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

type CardProps = {
  card: CardT
}

export default function EditCardForm({ card }: CardProps) {
  const form = useForm<EditCardSchemaT>({
    resolver: zodResolver(editCardSchema),
    mode: 'onChange',
    defaultValues: {
      front: {
        title: card.front.title,
        definition: card.front.definition,
        usageExample: card.front.usageExample,
        synonyms: card.front.synonyms,
        antonyms: card.front.antonyms,
      },
      back: {
        title: card.back.title,
        definition: card.back.definition,
        usageExample: card.back.usageExample,
        synonyms: card.back.synonyms,
        antonyms: card.back.antonyms,
      },
    },
  })

  return (
    <form className='bg-card bg flex w-full flex-col gap-6 rounded-lg border p-4'>
      <Tabs defaultValue='front'>
        <div className='flex items-center justify-between'>
          <TabsList>
            <TabsTrigger value='front'>Front</TabsTrigger>
            <TabsTrigger value='back'>Back</TabsTrigger>
          </TabsList>
          <div className='flex items-center gap-2'>
            <Button variant='destructive'>Remove Card</Button>
            <Button>Save changes</Button>
          </div>
        </div>

        <TabsContent value='front'>
          <Card>
            <CardHeader>
              <Label>Card Title</Label>
              <Input placeholder='Card Title' />
            </CardHeader>

            <CardContent className='grid grid-cols-2 gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='tabs-demo-name'>Definition</Label>
                <Textarea id='tabs-demo-name' defaultValue='Pedro Duarte' />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='tabs-demo-username'>Usage Example</Label>
                <Textarea id='tabs-demo-name' defaultValue='Pedro Duarte' />
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value='back'>
          <Card>
            <CardHeader>
              <Label>Card Title</Label>
              <Input placeholder='Card Title' />
            </CardHeader>

            <CardContent className='grid grid-cols-2 gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='tabs-demo-name'>Definition</Label>
                <Textarea id='tabs-demo-name' defaultValue='Pedro Duarte' />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='tabs-demo-username'>Usage Example</Label>
                <Textarea id='tabs-demo-name' defaultValue='Pedro Duarte' />
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  )
}
