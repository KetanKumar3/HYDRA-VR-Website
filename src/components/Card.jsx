import React from 'react'
import simulationimage from '../assets/simulationimage.png'
import educationimage from '../assets/EDUCATION.png'
import selfcareimage from '../assets/SELFCARE.png'
import outdoorimage from '../assets/OUTDOOR.png'

function Card() {
  const cardData = [
    {
        id:1,
        image:simulationimage,
        title:"SIMULATION",
        description:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
        id:2,
        image:educationimage,
        title:"EDUCATION",
        description:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
        id:3,
        image:selfcareimage,
        title:"SELF-CARE",
        description:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
        id:4,
        image:outdoorimage,
        title:"OUTDOOR",
        description:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    }
  ]
  return (
    <>
    <div className='flex justify-center items-center px-30 gap-5 pt-10 bg-[#8176AF]'>
      {cardData.map((item)=>(
        
         <div className='w-1/4 text-center rounded-2xl bg-[#211E2E] text-white px-10 py-8 space-y-4' key={item.id}>
            <img src={item.image} alt='image' />
            <h2 className='text-xl font-bold'>{item.title}</h2>
            <p className='text-gray-300'>{item.description}</p>
            <button className='font-bold rounded-full px-6 py-2 bg-[#C0B7E8]'>TRY IT NOW</button>
         </div>
         
      ))}
      </div>
    </>
  )
}

export default Card