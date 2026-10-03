
import { Button } from '@/components/ui/button'
import ThemeSwitcher from './themeSwitcher'
import LunguageSwitcher from './LunguageSwitcher'
import { ChevronRight, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

function Nav() {
  const t = useTranslations("nav")
  return (

    <div className='w-full py-2 px-3 flex justify-between items-center fixed   backdrop-blur-sm left-0 right-0 rounded-full mt-4 '>
        
        <div>
          <h1 className='font-bold space-x-1 italic text-1xl flex 
           justify-center gap-1 items-center'>
            <Image className='bg-black' src="/images/logo.png"   alt='LoGo' height={40} width={40}/>
            {t("logo")}</h1></div>
        <div className='flex justify-center items-center gap-3'>
           <ThemeSwitcher btn_l={t("btn_l")} btn_d={t("btn_d")} btn_s={t("btn_s")}/>
           <LunguageSwitcher/>
           <Button className='hover:bg-emerald-700 hover:text-white' variant={'outline'}>{t("btnl")}<ChevronRight/></Button>

        </div>

    </div>
  )
}

export default Nav