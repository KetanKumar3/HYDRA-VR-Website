import React from 'react'
import image from '../assets/VRMASK.png'

function About() {
  return (
    <>
    <div className='px-30 pt-8 flex justify-between items-center bg-[#8176AF] gap-40'>
        <div className='w-1/2'>
        <img src={image} alt="VR image" className='rounded-4xl' />
        </div>
        <div className='w-1/2 pr-10 space-y-5 text-white'>
            <h2 className='text-4xl font-bold'>ABOUT</h2>
            <h2 className='text-4xl'>HYDRA VR</h2>
            <h2>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.</h2>
            <div>
            <button className='font-bold rounded-full px-6 py-2 bg-[#C0B7E8] text-black'>Let's Get in Touch</button>
            </div>
        </div>
        
    </div>

    
    </>
  )
}

export default About