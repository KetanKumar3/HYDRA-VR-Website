import React from 'react'
import headericon from '../assets/headericon.png'
import headername from '../assets/headername.png'


function Navbar() {
  return (
    <>
     <div className='px-20 pt-8 flex justify-between items-center bg-[#8176AF]'>
        <div className='flex items-center gap-5'>
            <img src={headericon} alt='headericon' className='w-20 h-20' />
            <img src={headername} alt='headername' className='w-20 h-10' />
        </div>
        <div >
            <ul className='flex gap-10 text-white'>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>TECHNOLOGIES</li>
                <li>HOW TO</li>
            </ul>
        </div>
        <div className='space-x-4'>
        <button className='border border-white rounded-full px-4 py-2 text-white'>CONTACT US</button>
        <button className='rounded-full px-4 py-2 bg-[#C0B7E8]'>JOIN HYDRA</button>
        </div>
     </div>
    </>
  )
}

export default Navbar