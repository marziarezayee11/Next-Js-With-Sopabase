import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'


function Herosection() {
     const t = useTranslations("homepage")
  return (
    <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold space-x-1 text-4xl'>{t("herosection.title")}</h1>
            <p className=''>{t("herosection.description")}</p>
<div className='flex justify-center items-center gap-5 mt-4 '>
    <Button className='hover:bg-emerald-700 hover:text-white' variant={'outline'}>{t("herosection.btn-exp")}</Button>
    <Button className='hover:bg-emerald-700 hover:text-white' variant={'outline'}>{t("herosection.btn-join")}</Button>
</div>
        </div>
        <Image 
  src="/images/hero0.png" // آدرس عکس خودتان را بگذارید
  alt="Hero Illustration"
  width={600}
  height={600}
  className="object-contain dark:invert" 
/>


    {/* <div className="relative overflow-hidden rounded-2xl dark:bg-white p-4">
  <Image 
    src="/images/hero0.png" // آدرس عکس خودتان را بگذارید
    alt="Hero Illustration"
    width={600}
    height={500}
    className="object-contain"
  />
</div> */}
    </div>
  )
}

export default Herosection