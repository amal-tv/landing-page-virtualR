import React from 'react'
import { features } from '../constants'
export const Feature = () => {
    return (
        <div className='relative mt-20 border-b border-neutral-800 min-h-800px'>
            <div className='text-center'>
                <span className='bg-neutral-900 bg-gradient-to-r from-violet-900 via-violet-600 to-violet-300  text-transparent bg-clip-text rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                    feature

                </span>
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                    Easily build
                    <span className='bg-gradient-to-r from-purple-500 via-violet-700 to-violet-900 text-transparent bg-clip-text'>{" "}your code</span>
                </h2>
            </div>
     <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature,index)=>(
            <div key={index} className='w--full sm:1/2 lg:w-1/3'>
                       <div className='flex'>
                        <div className='h-10 mx-6 w-10 p-2  bg-neutral-900 text-violet-600 justify-center items-center rounded-full'>
                            {feature.icon}
                        </div>
                        <div>

                        <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                        <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
                        </div>
                       </div>
            </div>
        ))}
     </div>
        </div>
    )
}
