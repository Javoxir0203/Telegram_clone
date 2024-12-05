'use client'

import { messageSchema } from '@/lib/validation'
import { UseFormReturn } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { z } from 'zod'
import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Paperclip, Send, Smile } from 'lucide-react'
import { Input } from '@/components/ui/input'
import MessageCard from '@/components/cards/message.card'

interface Props {
	onSendMessage: (values: z.infer<typeof messageSchema>) => void
	messageForm: UseFormReturn<z.infer<typeof messageSchema>>
}

const Chat: FC<Props> = ({ onSendMessage, messageForm }) => {
	return (
		<div className='flex flex-col justify-end z-40 min-h-[92vh]'>
			{/* Loading */}

			{/* <ChatLoading /> */}

			{/* Message */}
			<MessageCard isReceived />

			{/* Message Input */}
			<Form {...messageForm}>
				<form onSubmit={messageForm.handleSubmit(onSendMessage)} className='w-full flex relative'>
					<Button size={'icon'} variant={'secondary'} type='button'>
						<Paperclip />
					</Button>
					<FormField
						control={messageForm.control}
						name='text'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormControl>
									<Input placeholder='Type a message' onChange={e => field.onChange(e.target.value)} value={field.value} onBlur={() => field.onBlur()} className='bg-secondary border-1 border-1-muted-foreground border-r  border-r-muted-foreground  h-9 ' />
								</FormControl>
							</FormItem>
						)}
					/>
					<Button size={'icon'} variant={'secondary'} type='button'>
						<Smile />
					</Button>
					<Button type='submit' size={'icon'}>
						<Send />
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default Chat
