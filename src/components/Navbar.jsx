import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants"
import {Menu,X} from 'lucide-react';

export const Navbar = () => {

    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

const toggleNavBar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen);
}

  return (
    <div>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
           <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex  justify-between  items-center'>
                <div className='flex items-center flex-shrink-0'>
                    <img src={logo} alt="logo" className='h-10 w-10 mr-2' />
                    <span className='text-xl tracking-right'>VirtualR </span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12 '>
             {navItems.map((item,index)=>(
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
             ))}
                </ul>
                <div className='hidden lg:flex justify-center space-x-10 items-center'>
                <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                <a href="#" className='bg-gradient-to-r from-violet-500 to-violet-900 py-2 px-3 rounded-lg'>Create an Account</a>
                </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
                <button onClick={toggleNavBar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
            </div>
            </div>
            {mobileDrawerOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-ful p-12 flex flex-col justify-center items-center lg:hidden'>
 <ul>
    {navItems.map((item,index)=>(
      <li key={index} className='py-4'><a href={item.href}>{item.label}</a></li>  
    ))}
 </ul>
<div className='flex space-x-6'>
    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
    <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-violet-500 to-violet-900'>Create Account</a>

</div>
                </div>
              
            )}
           </div>
        </nav>
      
    </div>
  )
}
