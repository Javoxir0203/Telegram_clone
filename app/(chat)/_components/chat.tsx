'use client'

import { messageSchema } from '@/lib/validation'
import { UseFormReturn } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { z } from 'zod'
import { FC, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Paperclip, Send, Smile } from 'lucide-react'
import { Input } from '@/components/ui/input'
import emojies from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useTheme } from 'next-themes'

interface Props {
	onSendMessage: (values: z.infer<typeof messageSchema>) => void
	messageForm: UseFormReturn<z.infer<typeof messageSchema>>
}

const Chat: FC<Props> = ({ onSendMessage, messageForm }) => {
	const { resolvedTheme } = useTheme()
	const inputRef = useRef<HTMLInputElement | null>(null)

	const handEmojiSelect = (emoji: string) => {
		const input = inputRef.current
		if (!input) return

		const text = messageForm.getValues('text')
		const start = input.selectionStart ?? 0
		const end = input.selectionEnd ?? 0

		const newText = text.slice(0, start) + emoji + text.slice(end)

		messageForm.setValue('text', newText)

		setTimeout(() => {
			input.setSelectionRange(start + emoji.length, start + emoji.length)
		}, 0)
	}
	return (
		<div className='flex flex-col justify-end z-40 min-h-[92vh]'>
			{/* Loading */}

			{/* <ChatLoading /> */}

			{/* Message */}
			{/* <MessageCard isReceived /> */}

			{/* Start conversation */}
			{/* <div className='w-full h-[88vh] flex items-center justify-center'>
				<div className='text-[100px] cursor-pointer' onClick={() => onSendMessage({ text: '✋' })}>
					✋
				</div>
			</div> */}

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
									<Input placeholder='Type a message' onChange={e => field.onChange(e.target.value)} ref={inputRef} value={field.value} onBlur={() => field.onBlur()} className='bg-secondary border-1 border-1-muted-foreground border-r  border-r-muted-foreground  h-9 ' />
								</FormControl>
							</FormItem>
						)}
					/>
					<Popover>
						<PopoverTrigger asChild>
							<Button size={'icon'} variant={'secondary'} type='button'>
								<Smile />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='p-0 border-none rounded-md absolute right-6 bottom-0 '>
							<Picker data={emojies} theme={resolvedTheme === 'dark' ? 'dark' : 'light'} onEmojiSelect={(emoji: { native: string }) => handEmojiSelect(emoji.native)} />
						</PopoverContent>
					</Popover>

					<Button type='submit' size={'icon'}>
						<Send />
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default Chat
