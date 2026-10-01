'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LucideLanguages } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'

function LunguageSwitcher() {
    const router = useRouter();
 const locle = useLocale();
     const [pending,startTransition]=useTransition();
    function ChangeLanguege(locale:string){
        document.cookie=`locale = ${locale};path=/;max-age=7776000`;
        startTransition(()=>{
            router.refresh()
        })
    }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <LucideLanguages size={20}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
            <DropdownMenuLabel>
                {locle==="pa"?"پشتو": locle==="fa"?"فارسی": "English"}
            </DropdownMenuLabel>
            
                <DropdownMenuItem onClick={()=>ChangeLanguege('fa')}>
                    دری
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>ChangeLanguege('en')}>
                    
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>ChangeLanguege('pa')}>
                    پشتو
                    
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LunguageSwitcher