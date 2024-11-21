import { FaTelegram } from 'react-icons/fa'
const page = () => {
	return (
		<div className='container max-w-md w-full h-screen flex justify-center items-center flex-col space-y-4'>
			<FaTelegram size={120} className='text-blue-500' />
			<div>
				<h1 className='text-4xl font-bold'>Telegram</h1>
			</div>
			<p className='text-center text-muted-foreground text-sm'>Telegram is messaging app with a focus on speed and security,it`s super-fast,simple and fee</p>
		</div>
	)
}

export default page
