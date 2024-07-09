import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
const App = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <div className='container'>
        <Programs/>
        </div>
    </>
  )
}

export default App