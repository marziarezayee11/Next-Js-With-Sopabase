
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Handshake, Headphones, ShieldCheck, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

function Features() {
    const t = useTranslations("homepage.features");
    const listfeatures :{id:number,title:string,description:string}[]= [
        {
            id:1,
            title:t("feature1.title"),
            description:t("feature1.description")

        },
          {
            id:2,
            title:t("feature2.title"),
            description:t("feature2.description")

        },

          {
            id:3,
            title:t("feature3.title"),
            description:t("feature3.description")

        },

          {
            id:4,
            title:t("feature4.title"),
            description:t("feature4.description")

        },


    ]
  return (
    <div className='w-full max-w-6xl mx-auto '>
        <h2 className='text-center font-bold text-2xl mt-8 mb-4'>{t("subtitle")}</h2>
        <h1 className='text-center text-4xl font-bold mb-5'>{t("title")}</h1>
<div className='grid grid-cols-4 gap-6 w-full '>
    {listfeatures.map((feature)=>(
        <Card key={feature.id}>
            <CardHeader className='w-full flex justify-center items-center' >
               <span>
  {feature.id === 1 ? (
    <ShieldCheck className="w-16 h-16 border rounded-full p-4 transition-all duration-300 hover:bg-emerald-600 hover:text-white" />
  ) : feature.id === 2 ? (
    <Zap className="w-16 h-16 border rounded-full p-4 transition-all duration-300 hover:bg-emerald-600 hover:text-white" />
  ) : feature.id === 3 ? (
    <Handshake className="w-16 h-16 border rounded-full p-4 transition-all duration-300 hover:bg-emerald-600 hover:text-white" />
  ) : (
    <Headphones className="w-16 h-16 border rounded-full p-4 transition-all duration-300 hover:bg-emerald-600 hover:text-white" />
  )}
</span>

            </CardHeader>
            <CardContent>
                <h1 className='font-bold text-xl mb-2'>{feature.title}</h1>
                <span className='font-medium'>{feature.description}</span>

            </CardContent>
        </Card>
    ))}

</div>
    </div>
  )
}

export default Features