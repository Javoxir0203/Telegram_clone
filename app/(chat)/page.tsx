'use client'
// import { Loader2 } from 'lucide-react'

import ContactList from './_components/contact-list'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AddContact from './_components/add.contact'
import { useCurrentContact } from '@/hooks/use-current'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { emailSchema, messageSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import TopChat from './_components/top-chat'
import Chat from './_components/chat'
import javoxir from '@/public/javoxir.jpg'
import begzod from '@/public/begzod.jpg'
import nurquvvat from '@/public/nurquvvat.jpg'
import abdumajid from '@/public/abdumajid.jpg'
import muhammadali from '@/public/muhammadali.jpg'
import muhammadyusuf from '@/public/muhammadyusuf.jpg'

const Home = () => {
	const { currentContact } = useCurrentContact()
	const router = useRouter()
	//
	const contactForm = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: { email: '' },
	})
	//
	const messageForm = useForm<z.infer<typeof messageSchema>>({
		resolver: zodResolver(messageSchema),
		defaultValues: { text: '', image: '' },
	})
	//
	useEffect(() => {
		router.replace('/')
	}, [])

	const onCreateContact = (values: z.infer<typeof emailSchema>) => {
		// API call to create contact
		console.log(values)
	}
	//
	const onSendMessage = (values: z.infer<typeof messageSchema>) => {
		// API call to send message
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
				{currentContact?._id && (
					<div className='w-full relative'>
						{/* Top chat */}
						<TopChat />
						{/* chat message */}
						<Chat messageForm={messageForm} onSendMessage={onSendMessage} />
					</div>
				)}
				
			</div>
		</>
	)
}

export const contacts = [
	{ bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequatur suscipit, mollitia amet excepturi odit ut fugiat eius, necessitatibus numquam itaque molestias repellat animi ipsa ab sapiente dolor autem praesentium.', firstName: 'Javoxir', lastName: 'Eshquvvatov', email: 'javoxir@gmail.com', _id: '1', avatar: javoxir },
	{ bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequatur suscipit, mollitia amet excepturi odit ut fugiat eius, necessitatibus numquam itaque molestias repellat animi ipsa ab sapiente dolor autem praesentium.', firstName: 'Begzod', lastName: 'Eshquvvatov', email: 'begzod@gmail.com', _id: '2', avatar: begzod },
	{ bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequatur suscipit, mollitia amet excepturi odit ut fugiat eius, necessitatibus numquam itaque molestias repellat animi ipsa ab sapiente dolor autem praesentium.', firstName: 'Nurquvvat', lastName: 'Eshquvvatov', email: 'nurquvvot@gamil.com', _id: '3', avatar: nurquvvat },
	{ bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequatur suscipit, mollitia amet excepturi odit ut fugiat eius, necessitatibus numquam itaque molestias repellat animi ipsa ab sapiente dolor autem praesentium.', firstName: 'Abdumajid', lastName: 'Eshquvvatov', email: 'abdumajid@gmail.com', _id: '4', avatar: abdumajid },
	{ bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequatur suscipit, mollitia amet excepturi odit ut fugiat eius, necessitatibus numquam itaque molestias repellat animi ipsa ab sapiente dolor autem praesentium.', firstName: 'MuhammadAli', lastName: 'Ravshanov', email: 'muhammadali@gamil.com', _id: '5', avatar: muhammadali },
	{ bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequatur suscipit, mollitia amet excepturi odit ut fugiat eius, necessitatibus numquam itaque molestias repellat animi ipsa ab sapiente dolor autem praesentium.', firstName: 'MuhammadYusuf', lastName: 'Ravshanov', email: 'muhammadyusuf@gamil.com', _id: '6', avatar: muhammadyusuf },
]

export default Home
