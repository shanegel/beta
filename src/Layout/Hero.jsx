import React from 'react';
import Wave from '../Components/Wave';
import Me from '../assets/me.png';
import Navbar from './Navbar';
function Hero() {
  return (
    <>
      <Wave />
      <Navbar />
      <section className='absolute z-10 flex items-center text-white lg:top-[13%] lg:px-10 xl:top-[16%] xl:left-[20%]'>
        <div className='border-r-[2px] lg:mr-[4%] lg:w-5/12 xl:mr-[4%] xl:w-4/12'>
          <img
            src={Me}
            alt='me'
            className='hidden rounded-full lg:ml-20 lg:block lg:w-[250px] xl:ml-0 xl:w-[360px]'
          />
        </div>
        <div className='mx-10 w-full text-sm md:mx-auto md:w-9/12 md:text-base lg:w-6/12 xl:mx-0 xl:w-6/12 xl:font-semibold'>
          <p className='font-semibold md:font-normal'>HI THERE! I AM...</p>
          <h1 className='my-6 text-5xl font-extrabold md:text-6xl lg:text-5xl xl:text-7xl'>
            Shan Carl Parce Belgica
          </h1>
          <p className=''>
            I'm a Web-Developer. Specializing in Front-end Development. I help
            start-ups Design and Deploy their Busines Online.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
