import React from 'react'
import { testimonials } from '../constants'
export const Testimonials = () => {
  return (
    <div className='mt-10 tracking-wide'>
            <h2 className='text-3xl sm:5xl lg:6xl text-center my-10 lg:my-20'>What people are saying</h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((testimonials,index)=>{
                   return  <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='bg-neutral rounded-md text-md border border-neutral-700 font-thin'>
                       
                            <div>{testimonials.text}</div>
                         <div className='flex mt-8 items-center'>
                            <img  className="w-12 h-12 mr-6 rounded-full border border-neutral-600"  src={testimonials.image} alt={testimonials.user} />
                            <div>
                                <h6>{testimonials.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-600'>{testimonials.company}</span>
                            </div>
                         </div>
                        </div>
                    </div>
                })}
            </div>
    </div>
  )
}
