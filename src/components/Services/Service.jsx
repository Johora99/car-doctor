import { FaArrowRight } from "react-icons/fa6";
import React from 'react'

export default function Service({service}) {
  const {title,price,img} = service;
  return (
    <div className='border-[1px] border-LightGary rounded-xl p-6'>
      <img src={img} alt=""className='w-full h-[300px] rounded-xl'/>
      <div>
        <h3 className='text-DarkGray text-2xl font-bold my-5'>{title}</h3>
      <div className="flex items-center justify-between">
          <p className='text-Vermilion text-lg font-semibold'>Price : ${price}</p>
          <FaArrowRight className="text-Vermilion text-2xl"/>
      </div>
      </div>
    </div>
  )
}
