import ChatLoading from '@/components/loadings/chat.loading'
import MessageCard from '@/components/cards/message.card'
import { messageSchema } from '@/lib/validation'
import { UseFormReturn } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { z } from 'zod'
import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Paperclip } from 'lucide-react'

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

			{/* <MessageCard isReceived /> */}

			{/* Message Input */}
			<Form {...messageForm}>
				<form onSubmit={messageForm.handleSubmit(onSendMessage)} className='w-full flex relative'>
					<Button size={'icon'} variant={'secondary'} type='button'>
						<Paperclip />
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default Chat
