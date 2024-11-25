// import { Loader2 } from 'lucide-react'

import ContactList from './_components/contact-list'

const Home = () => {
	return (
		<>
			{/* Saidber */}
			<div className=' w-80 h-screen border-r fixed inset-0 z-50'>
				{/* Loading */}
				{/* <div className='w-full h-[95vh] flex justify-center items-center'>
					<Loader2 size={50} className='animate-spin' />
				</div> */}

				{/* Contact list */}
				<ContactList contacts={contacts} />
			</div>
			{/* Chat area */}
		</>
	)
}

export const contacts = [
	{ email: 'javoxir@gmail.com', _id: '1', avatar:'' },
	{ email: 'begzod@gmail.com', _id: '2', avatar:'' },
	{ email: 'nurquvvot@gamil.com', _id: '3', avatar:'' },
	{ email: 'abdumajid@gmail.com', _id: '4', avatar:'' },
	{ email: 'muhammadali@gamil.com', _id: '5', avatar:'' },
	{ email: 'muhammadyusuf@gamil.com', _id: '6', avatar:'' },
]

export default Home
