import React from 'react';
import technology from '../assets/technology.png';
import hydra1 from '../assets/Hydra-Tech1.png'
import hydra2 from '../assets/Hydra-Tech2.png'
import hydra3 from '../assets/Hydra-Tech3.png'
import hydra4 from '../assets/Hydra-Tech4.png'

function Technology() {
  return (
    <>
      <div className='px-30 pt-20 bg-[#8176AF]' >
        <div
          className='p-20 rounded-full space-y-3'
          style={{ backgroundImage: `url(${technology})`,backgroundSize:'cover' }}
        >
            <h2 className='text-center text-white text-4xl font-bold'>TECHNOLOGIES & HARDWARE</h2>
            <h3 className='text-center text-white text-2xl'>USED BY HYDRA VR.</h3>
        </div>

        <div className='flex flex-row justify-between py-10'>
            <img className='h-44 mt-8' src={hydra1} alt='image' />
            <img className='h-60' src={hydra2} alt='image' />
            <img className='h-60' src={hydra3} alt='image' />
            <img className='h-60' src={hydra4} alt='image' />
        </div>
      </div>
    </>
  );
}

export default Technology;