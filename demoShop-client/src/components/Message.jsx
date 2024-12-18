import React from 'react';

import bannerImg from '../assets/photo/banner.jpg';
const Message = () => {
  return (
    <section
        id='banner'
            className="relative min-h-screen bg-cover bg-center text-white flex items-center justify-center"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="absolute left-10 bottom-10 z-2 text-center font-barlow">
          <p className="text-left text-xl md:text-2xl lg:text-2xl font-bold uppercase ml-2">
            Building Confidence, Building Strength!
          </p>
          <h1 className="text-left text-7xl md:text-7xl lg:text-9xl font-bold " >
            ACTIVE GEAR
          </h1>
        </div>
      </section>
  )
}

export default Message