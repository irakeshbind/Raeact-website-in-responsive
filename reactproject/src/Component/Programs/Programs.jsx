import React from 'react'
import img1 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img2 from '../../assets/img2.jpg'
import './Programs.css'
const Programs = () => {
  return (
    <>
   <div className='programs'>
     <div className='program'>
      <img src={img1} alt="" />
      <div className='programimg'>
        <img src="" alt="" />
        <p>Graduvation Degree</p>
      </div>
     </div>

     <div className='program'>
      <img src={img3} alt="" />
      <div className='programimg'>
        <img src="" alt="" />
        <p>Graduvation Degree</p>
      </div>
     </div>

     <div className='program'>
      <img src={img2} alt="" />
      <div className='programimg'>
        <img src="" alt="" />
        <p>Graduvation Degree</p>
      </div>
     </div>
     </div>
     </>
  )
}

export default Programs