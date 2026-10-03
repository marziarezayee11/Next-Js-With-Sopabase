import { useTranslations } from 'next-intl'
import React from 'react'
import CatCard from './CatCard';

function Categories() {
const t = useTranslations("homepage.categories");
const CAtlist:{id:number,title:string,desc:string, image:string}[] =[
    {
        id:1,
        title:t("cat1.title"),
        desc:t("cat1.description"),
        image:"/images/logo.png"
    },
    {
        id:2,
        title:t("cat2.title"),
        desc:t("cat2.description"),
        image:"/images/logo.png"
    },
    {
        id:3,
        title:t("cat3.title"),
        desc:t("cat3.description"),
        image:"/images/logo.png"
    },
]
  return (
    <div className='w- h-full mx-auto max-w-6xl   '>
          <h1 className='text-center font-bold text-3xl mt-8 mb-4'>{t("title")}</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3'>
            { CAtlist.map((category)=>(
    <CatCard key={category.id} category = {category}/>
))}
        </div>





    </div>
  )
}

export default Categories