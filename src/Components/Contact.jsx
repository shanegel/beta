import React from 'react';
import Button from '../Shared/SecButton';
import Wave from '../assets/wave.png';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../index.css';
function Contact() {
  return (
    <>
      <h1
        className='my-[3%] text-center text-3xl font-bold md:text-zinc-800 xl:text-4xl'
        id='contact'>
        CONTACT
      </h1>
      <div className='absolute z-20 flex w-full flex-wrap justify-center object-cover'>
        <div className='mx-10 w-full xl:mx-0 xl:w-6/12 xl:px-20'>
          <h1 className='text-xl font-semibold lg:text-2xl'>
            LETS <em className='text-[#f7c848]'>WORK TOGETHER</em>
          </h1>
          <h2 className='mb-2 font-semibold lg:text-xl'>SEND ME AN E-MAIL</h2>
          <form action=''>
            <label htmlFor=''>Name</label>
            <br />
            <input type='text' className='input' />
            <br />
            <label htmlFor=''>E-mail</label>
            <br />
            <input type='email' className='input' />
            <br />
            <label htmlFor=''>Subject</label>
            <br />
            <input type='text' className='input' />
            <br />
            <label htmlFor=''>Message</label>
            <br />
            <textarea
              name=''
              type='text'
              className='textArea'
              id=''
              cols='30'
              rows='5'></textarea>
            <div className='my-4 text-center'>
              <button
                type='submit'
                className='w-full rounded bg-[#5c5d65] py-2 px-3 text-white'
                onClick={() =>
                  alert(
                    "Thank you for reaching out. I'll get back to you soon. "
                  )
                }>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='space-y-4 pt-10 text-white lg:pl-[15%] xl:w-6/12 xl:text-zinc-800'>
          <h1 className='text-2xl font-semibold'>
            LET'S <em className='text-[#f0b547]'>TALK</em>
          </h1>
          <h2 className='mb-2 text-lg font-semibold'>MY SOCIALS</h2>
          <div className='space-y-3 text-sm text-[#87888b] md:text-base'>
            <p className=''>
              <FaPhone />
              +63 915-203-0863
            </p>
            <p className=''>
              <FaMapMarkerAlt />
              Nabua, Camarines Sur
            </p>
            <p className=''>
              <FaEnvelope /> shancarl.belgica.3@gmail.com
            </p>
          </div>
          <p className='text-xs text-white lg:text-base'>
            &copy; ALL RIGHTS RESERVED - 2022
          </p>
        </div>
      </div>
      <img
        src={Wave}
        alt=''
        className='h-[1000px] w-full rotate-180 overflow-auto lg:h-[600px]'
      />
    </>
  );
}

export default Contact;
