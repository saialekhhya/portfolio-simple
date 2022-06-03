import React from 'react';
import Picture from '../assets/picture.png'
import { HiArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='mx-auto'>
                <img src={Picture} alt=''></img>
            </div>
            <div className='mx-auto'>
                <p className='text-[#AC9872]'>HI! I'M</p>
                <h1 className='text-4xl sm:text-5xl font-bold text-[#6E6746]'>SAI ALEKHHYA GOPU</h1>
                <h2 className='text-xl sm:text-2xl text-[#AC9872]'>DESIGNER + DEVELOPER</h2>
                <div> 
                    <button className='text-[#AC9872] group border-2 px-6 py-3 my-2 flex items-center bg-white border-[#AC9872] hover:bg-[#AC9872] hover:text-white'>Let's Talk 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                    </button>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;