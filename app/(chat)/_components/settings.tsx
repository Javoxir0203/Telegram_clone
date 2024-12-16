import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Menu, Settings2, UserPlus } from 'lucide-react'

const Settings = () => {
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
					</div>
				</PopoverContent>
			</Popover>
		</>
	)
}

export default Settings
