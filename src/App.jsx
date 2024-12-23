import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Feather } from 'lucide-react'
import { Feature } from './components/Feature'

function App() {
  

  return (
    <>
     <Navbar/>
     <div className='max-w-7xl mx-auto pt-20 px-6'>

     <Hero />
     <Feature />
     </div>
    </>
  )
}

export default App
