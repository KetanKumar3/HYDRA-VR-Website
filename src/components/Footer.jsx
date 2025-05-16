import React from 'react';
import icon from '../assets/headericon.png'; 

function Footer() {
  return (
    <footer className="bg-[#8176AF] py-10 px-30 "> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> 
        <div className="flex items-center">
          <img src={icon} alt="Company Logo" className="h-32 w-32" /> 
        </div>
        <nav>
          <ul className="text-white">
            <li className="mb-2   ">   ABOUT   </li>
            <li className="mb-2   ">   SERVICES   </li>
            <li className="mb-2   ">   TECHNOLOGIES   </li>
            <li className="mb-2   ">   HOW TO   </li>
            <li className="mb-2   ">   JOIN HYDRA   </li>
          </ul>
        </nav>
        <nav>
          <ul className="text-white">
            <li className="mb-2   ">   FAQ   </li>
            <li className="mb-2   ">   SITEMAP   </li>
            <li className="mb-2   ">   CONDITIONS   </li>
            <li className="mb-2   ">   LICENSES   </li>
          </ul>
        </nav>
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">SOCIALIZE WITH HYDRA</h2>
          <button className="font-bold rounded-full px-6 py-2 bg-[#C0B7E8] hover:bg-[#a89ac8] text-white transition-colors">
            Build Your World
          </button>
        </div>
      </div>
      <div className='bg-white w-full h-0.5 my-8'></div>
      <h2 className='text-white font-bold text-center'>Create With ❤️ By @KetanKumar</h2>
    </footer>
  );
}

export default Footer;