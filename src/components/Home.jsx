import React from 'react'
import image from '../assets/VRBOX.png'

function Home() {
  return (
    <>
    <div className='px-30 pt-8 flex justify-between items-center bg-[#8176AF] gap-40'>
        <div className='w-1/2 pr-10 space-y-5'>
            <h2 className='text-6xl font-bold text-white'><span className='text-[#C0B7E8]'>Dive </span>into the depth of <span className='text-[#C0B7E8]'>Virtual Reality</span></h2>
            <h2 className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .</h2>
            <div>
            <button className='font-bold rounded-full px-6 py-2 bg-[#C0B7E8]'>Build Your World</button>
            </div>
        </div>
        <div className='w-1/2'>
        <img src={image} alt="VR image"  />
        </div>
    </div>

    <div className='px-30 pt-20 bg-[#8176AF] '>
    
      <div className='bg-[#211E2E] p-20 rounded-full '></div>
    </div>
    </>
  )
}

export default Home