
import { Button } from '@/components/ui/button'
import ThemeSwitcher from './themeSwitcher'
import LunguageSwitcher from './LunguageSwitcher'
import { ChevronRight, User } from 'lucide-react'

function Nav() {
  return (

    <div className='w-full py-4 px-7 flex justify-between items-center fixed   backdrop-blur-xl left-0 right-0 rounded-full '>
        <div><h1>logo</h1></div>
        <div className='flex justify-center items-center gap-3'>
           <ThemeSwitcher/>
           <LunguageSwitcher/>
           <Button>Login<ChevronRight/></Button>

        </div>

    </div>
  )
}

export default Nav