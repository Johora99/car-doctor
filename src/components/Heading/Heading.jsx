import React from 'react'

export default function Heading({title,subTitle,description}) {
  return (
    <div className='text-center my-20'>
      <p className='text-Vermilion text-xl font-bold'>{title}</p>
      <h2 className='my-5 text-CharcoalBlack text-5xl font-bold'>{subTitle}</h2>
      <p className='lg:w-[45%] mx-auto text-base font-normal text-DarkSilver'>{description}</p>
    </div>
  )
}
