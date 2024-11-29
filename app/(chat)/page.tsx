'use client'
// import { Loader2 } from 'lucide-react'

import ContactList from './_components/contact-list'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AddContact from './_components/add.contact'
import { useCurrentContact } from '@/hooks/use-current'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { emailSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import TopChat from './_components/top-chat'
import Chat from './_components/chat'

const Home = () => {
	const { currentContact } = useCurrentContact()
	const router = useRouter()
	//
	const contactForm = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: { email: '' },
	})
	//
	useEffect(() => {
		router.replace('/')
	}, [])

	const onCreateContact = (values: z.infer<typeof emailSchema>) => {
		// API call to create contact
		console.log(values)
	}
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
			<div className='pl-80 w-full'>
				{/* Add contact */}
				{!currentContact?._id && <AddContact contactForm={contactForm} onCreateContact={onCreateContact} />}
				{/* chat */}
				{currentContact?._id && <div className='w-full relative'>
					{/* Top chat */}
					<TopChat/>
					{/* chat message */}
					<Chat/>
					</div>}
			</div>
		</>
	)
}

export const contacts = [
	{ email: 'javoxir@gmail.com', _id: '1', avatar: '' },
	{ email: 'begzod@gmail.com', _id: '2', avatar: '' },
	{ email: 'nurquvvot@gamil.com', _id: '3', avatar: '' },
	{ email: 'abdumajid@gmail.com', _id: '4', avatar: '' },
	{ email: 'muhammadali@gamil.com', _id: '5', avatar: '' },
	{ email: 'muhammadyusuf@gamil.com', _id: '6', avatar: '' },
]

export default Home
