import ChatLoading from '@/components/loadings/chat.loading'

const Chat = () => {
	return (
		<div className='flex flex-col justify-end z-40 min-h-[92vh]'>
			{/* Loading */}

			<ChatLoading />
			{/* Message */}

			{/* Message Input */}
		</div>
	)
}

export default Chat
