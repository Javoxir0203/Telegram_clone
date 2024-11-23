'use client'

import Verify from './verify'
import SignIn from './sign-in'
import { useAuth } from '@/hooks/use-auth'

const StateAuth = () => {
	const { step } = useAuth()
	return (
		<>
			{step === 'login' && <SignIn />}
			{step === 'verify' && <Verify />}
		</>
	)
}

export default StateAuth
