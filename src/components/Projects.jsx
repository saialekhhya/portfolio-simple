import React from 'react'
import Splitto from '../assets/splitto.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-2xl sm:text-4xl font-bold text-[#AC9872] py-4'>PROJECTS</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              
              <div style={{ backgroundImage:`url(${Splitto})` }} className='shadow-lg shadow-[#AC9872] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Apllication
                  </span>
                  <div className='pt-8 text-center'>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ backgroundImage:`url(${Splitto})` }} className='shadow-lg shadow-[#AC9872] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Apllication
                  </span>
                  <div className='pt-8 text-center'>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ backgroundImage:`url(${Splitto})` }} className='shadow-lg shadow-[#AC9872] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Apllication
                  </span>
                  <div className='pt-8 text-center'>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ backgroundImage:`url(${Splitto})` }} className='shadow-lg shadow-[#AC9872] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Apllication
                  </span>
                  <div className='pt-8 text-center'>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#AC9872] text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Projects