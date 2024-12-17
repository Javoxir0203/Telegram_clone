import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Menu, Moon, Settings2, Sun, UserPlus, VolumeOff } from 'lucide-react'
import { useTheme } from 'next-themes'

const Settings = () => {
	const {resolvedTheme, setTheme} = useTheme()
	return (
		<>
			<Popover>
				<PopoverTrigger>
					<Button size={'icon'} variant={'secondary'}>
						<Menu />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-80 p-0'>
					<h2 className=' pt-2 pl-2 text-muted-foreground'>
						Settings: <span className='text-white'>infoJavoxir.ac</span>
					</h2>
					<Separator className='my-2' />
					<div className='flex flex-col space-y-3'>
						<div className='flex items-center justify-between p-2 hover:bg-secondary cursor-pointer'>
							<div className='flex items-center gap-1'>
								<Settings2 size={16} />
								<span className='text-sm'>Profile</span>
							</div>
						</div>

						<div className='flex items-center justify-between p-2 hover:bg-secondary cursor-pointer'>
							<div className='flex items-center gap-1'>
								<UserPlus size={16} />
								<span className='text-sm'>Create contact</span>
							</div>
						</div>

						<div className='flex items-center justify-between p-2 hover:bg-secondary '>
							<div className='flex items-center gap-1'>
								<VolumeOff size={16} />
								<span className='text-sm'>Mute</span>
							</div>
							<Switch />
						</div>

						<div className='flex items-center justify-between p-2 hover:bg-secondary '>
							<div className='flex items-center gap-1'>
								{resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
								<span className='text-sm'>{resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
							</div>
							<Switch  checked={resolvedTheme === 'dark' ? true: false } onCheckedChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}/>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</>
	)
}

export default Settings
