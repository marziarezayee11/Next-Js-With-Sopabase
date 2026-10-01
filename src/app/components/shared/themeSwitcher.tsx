"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'


function ThemeSwitcher({btn_l,btn_d,btn_s}:{btn_l:string,btn_d:string,btn_s:string}) {
 const{theme,setTheme} = useTheme();
const t = useTranslations("nav")
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
                    <div className='flex justify-between items-center gap-6'><span>{t("btn_l")}</span>
                    <Sun size={20}/></div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setTheme("dark")}>
                    
                    <div className='flex justify-between items-center gap-6'><span>{t("btn_d")}</span>
                    <Moon size={20}/></div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setTheme("system")}>
                    
                    <div className='flex justify-between items-center gap-6'><span>{t("btn_s")}</span>
                    <SunMoon size={20}/></div>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSwitcher