"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes'


function ThemeSwitcher() {
 const{theme,setTheme} = useTheme();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            {theme==='light'?<Sun size={20}/>:theme==='dark'?<Moon size={20}/>:<SunMoon size={20}/>}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
            <DropdownMenuLabel>
                Theme
            </DropdownMenuLabel>
            
                <DropdownMenuItem onClick={()=>setTheme("light")}>
                    <div className='flex justify-between items-center gap-6'><span>Light</span>
                    <Sun size={20}/></div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setTheme("dark")}>
                    
                    <div className='flex justify-between items-center gap-6'><span>Dark</span>
                    <Moon size={20}/></div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setTheme("system")}>
                    
                    <div className='flex justify-between items-center gap-6'><span>System</span>
                    <SunMoon size={20}/></div>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSwitcher