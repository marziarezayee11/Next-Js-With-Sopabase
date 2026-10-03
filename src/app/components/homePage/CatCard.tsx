import Image from 'next/image'
import React from 'react'

function CatCard({category}:{category:{title:string,desc:string,image:string}}) {
  return (
    <div className="group relative w-[300px] overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="relative h-[400px] w-full">
        <Image 
          src={category.image} 
          alt={category.title} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 text-white">
          <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
          <p className="text-sm text-gray-200 mt-1">{category.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default CatCard
