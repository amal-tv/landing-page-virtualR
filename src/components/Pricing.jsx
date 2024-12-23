import React from 'react'
import { CheckCircle2, Option } from 'lucide-react'
import { pricingOptions } from '../constants'
export const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'>Pricing

        </h2>
        <div className='flex flex-col lg:flex-row'>
            {pricingOptions.map((Option,index)=>{
                return <div key={index} className='w-full sm:1/2 lg:1/3 p-2'>
                    <div className='p-10 border border-neutral-800 rounded-xl'>
                        <p className='text-3xl mb-8'>
                            {Option.title}
                            {Option.title === "Pro" && <span className='text-xl bg-gradient-to-r from-violet-500 to-violet-900 text-transparent bg-clip-text mb-4 ml-2'>most popular</span>}</p>
                            <p className='mb-8'>
                                <span className='text-5xl mt-6 mr-2'>{Option.price}</span>
                                <span className='text-neutral-400 tracking-tight'>/Month</span>
                            </p>
                            <ul>
                                {Option.features.map((feature,index)=>{
                                    return <div key={index} className='mt-8 flex items-center'>
                                        <CheckCircle2 />
                                        <span className='ml-2'>{feature}</span>
                                    </div>
                                })}
                            </ul>
                            <a href="#" className='inline-flex justify-center items-center mt-20 w-full text-center h-12 p-5  tracking-tight text-xl hover:bg-violet-900 border border-violet-900 rounded-lg transition duration-400 '>
                                Subscribe
                            </a>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
