import { IUser } from '@/types'
import { FC, Fragment } from 'react'
import Settings from './settings'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
interface Props {
	contacts: IUser[]
}
const ContactList: FC<Props> = ({ contacts }) => {
	const renderContact = (contact: IUser) => {
		return (
			<div className='flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-2'>
				<div className='flex items-center gap-2'>
					<div className='relative'>
						<Avatar className='z-40'>
							<AvatarImage src={contact.avatar} alt={contact.email} className='object-cover' />
							<AvatarFallback className='uppercase'>{contact.email[0]}</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		)
	}
	return (
		<Fragment>
			{/* Top bar */}
			<div className='flex items-center bg-background pl-2 sticky top-0'>
				<Settings />
				<div className='m-2 w-full'>
					<Input className='bg-secondary' type='text' placeholder='Search...' />
				</div>
			</div>

			{/* Contact */}
			{contacts.length === 0 && (
				<div className='w-full h-[95vh] flex justify-center items-center text-center text-muted-foreground'>
					<p> Contact list is empty</p>
				</div>
			)}

			{contacts.map(contact => renderContact(contact))}
		</Fragment>
	)
}

export default ContactList
