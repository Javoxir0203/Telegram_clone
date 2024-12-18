import { oldEmailSchema, otpSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const EmailForm = () => {
	const [verify, setVerify] = useState(false)

	const emailForm = useForm<z.infer<typeof oldEmailSchema>>({
		resolver: zodResolver(oldEmailSchema),
		defaultValues: { email: '', oldEmail: 'info@javoxir.ac' },
	})

	const otpForm = useForm<z.infer<typeof otpSchema>>({
		resolver: zodResolver(otpSchema),
		defaultValues: { otp: '', email: '' },
	})
	function onEmailSubmit(values: z.infer<typeof oldEmailSchema>) {
		console.log(values)
		otpForm.setValue('email', values.email)
		setVerify(true)
	}

	function onVerifySubmit(values: z.infer<typeof otpSchema>) {
		console.log(values)
	}
	return !verify ? (
		<Form {...emailForm}>
			<form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className='space-y-2'>
				<FormField
					control={emailForm.control}
					name='oldEmail'
					render={({ field }) => (
						<FormItem>
							<Label>Current email</Label>
							<FormControl>
								<Input placeholder='' className='bg-secondary' {...field} />
							</FormControl>
							<FormMessage className='text-xs text-red-500' />
						</FormItem>
					)}
				/>
				<FormField
					control={emailForm.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<Label>Enter a new email</Label>
							<FormControl>
								<Input placeholder='info@javoxir.ac' className='bg-secondary' {...field} />
							</FormControl>
							<FormMessage className='text-xs text-red-500' />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Verify email
				</Button>
			</form>
		</Form>
	) : (
		<Form {...otpForm}>
			<form onSubmit={otpForm.handleSubmit(onVerifySubmit)} className='space-y-2'>
				<Label>New email</Label>
				<Input className='h-10 bg-secondary' disabled value={emailForm.watch('email')}/>
			</form>
		</Form>
	)
}

export default EmailForm
