import { FaArrowRight } from "react-icons/fa6";
import React from 'react'
import Link from "next/link";

export default function Service({service}) {
  const {_id,title,price,img} = service;
  return (
    <div className='border-[1px] border-LightGary rounded-xl p-6'>
      <img src={img} alt={title} className='w-full h-[300px] rounded-xl'/>
      <div>
        <h3 className='text-DarkGray text-2xl font-bold my-5'>{title}</h3>
      <div className="flex items-center justify-between">
          <p className='text-Vermilion text-lg font-semibold'>Price : ${price}</p>
        <Link href={`/serviceDetails/${_id}`}><FaArrowRight className="text-Vermilion text-2xl"/></Link>
      </div>
      </div>
    </div>
  )
}
