import { StaticImageData } from 'next/image'

export interface IUser {
	email: string
	_id: string
	avatar: StaticImageData
	firstName: string
	lastName: string
	bio: string
}
