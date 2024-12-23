import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
export const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
<h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
  VirtualR build
  <span className='bg-gradient-to-r from-violet-500 to-violet-900 text-transparent bg-clip-text'>{" "}for</span>
  <span className='block bg-gradient-to-r from-violet-500 to-violet-900 text-transparent bg-clip-text'>developers</span>
</h1>
 <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam perferendis libero eligendi necessitatibus provident debitis ducimus, similique nisi corporis quo maiores cum tempora quidem a minima autem odio ea.
 </p>
   <div className='flex justify-center my-10'>
    <a href="#" className='bg-gradient-to-r from-violet-500 to-violet-900 py-3 px-4 mx-3 rounded-md'>
        start for free
    </a>
    <a href="" className='py-3 px-4 mx-3 rounded-md border'>
        Documentation
    </a>
   </div>
   <div className='flex mt-10 justify-center'>
    <video autoPlay loop muted className='rounded-lg w-1/2 border border-violet-900 shadow-violet-700 mx-2 my-4'><source src={video1} />Your Browser doesnt support the video</video>
   
    <video autoPlay loop muted className='rounded-lg w-1/2 border border-violet-900 shadow-violet-700 mx-2 my-4'><source src={video2} />Your Browser doesnt support the video</video>
   </div>
    </div>
  )
}
