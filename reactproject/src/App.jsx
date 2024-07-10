import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
const App = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <div className='container'>
        <Title/>
        <Programs/>
        </div>
    </>
  )
}

export default App