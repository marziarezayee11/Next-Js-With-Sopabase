'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LucideLanguages } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'

function LunguageSwitcher() {
    const router = useRouter();

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
                Languege
            </DropdownMenuLabel>
            
                <DropdownMenuItem onClick={()=>ChangeLanguege('fa')}>
                    Dari
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>ChangeLanguege('en')}>
                    
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>ChangeLanguege('pa')}>
                    Pashto
                    
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LunguageSwitcher