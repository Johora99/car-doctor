import dbConnect from '@/lib/dbConect'
import React from 'react'
import Service from './Service';
import Link from 'next/link';

export default async function Services() {
    const servicesData = await dbConnect('services').find().toArray();

  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      {
        servicesData.map(service =><Service key={service._id} service={service}></Service>)
      }
    </div>
      <div className='my-20 text-center'>
        <Link href={'/Services'} className='btnStyle'>More Services</Link>
      </div>
    </div>
  )
}
