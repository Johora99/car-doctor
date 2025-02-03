import dbConnect from '@/lib/dbConect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ServiceDetailsPage({params}) {
  const id = await params.id;
   const serviceData = await dbConnect('services').findOne({_id : new ObjectId(id)})
   console.log(serviceData)
  return (
    <div>ServiceDetailsPage</div>
  )
}
