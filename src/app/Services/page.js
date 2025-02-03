import Service from '@/components/Services/Service';
import dbConnect from '@/lib/dbConect'
import React from 'react'

export default async function AllServicesPage() {
  const allServices = await dbConnect('services').find().toArray();
  console.log(allServices)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-20'>
      {
        allServices.map(service =><Service key={service._id} service={service}></Service>)
      }
    </div>
  )
}
