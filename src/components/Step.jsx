import React from 'react';

function Step() {
  const roundedStyle = {
    width: '150px',
    height: '150px',
    padding: '12px',
    borderRadius: '9999px',
    backgroundColor: '#C0B7E8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.5rem',
    fontWeight: "bold",
  };

  return (
    <div className='px-30 flex flex-row justify-between bg-[#8176AF]'>
      <div>
        <div style={roundedStyle}>01</div>
        <p className='text-2xl font-bold pt-3 w-44 text-center text-white'>3D Conception & Design</p>
      </div>
      <div>
        <div style={roundedStyle}>02</div>
        <p className='text-2xl font-bold pt-3 w-44 text-center text-white'>Interaction Design</p>
      </div>
      <div>
        <div style={roundedStyle}>03</div>
        <p className='text-2xl font-bold pt-3 w-44 text-center text-white'>VR World user Testing</p>
      </div>
      <div>
        <div style={roundedStyle}>04</div>
        <p className='text-2xl font-bold pt-3 w-44 text-center text-white'>Hydra VR deploy</p>
      </div>
    </div>
  );
}

export default Step;