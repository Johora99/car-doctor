import dbConnect from '@/lib/dbConect'
import React from 'react'
import Service from './Service';

export default async function Services() {
    const servicesData = await dbConnect('services').find().toArray();

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20'>
      {
        servicesData.map(service =><Service key={service._id} service={service}></Service>)
      }
    </div>
  )
}
