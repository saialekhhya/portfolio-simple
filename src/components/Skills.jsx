import React from 'react'
import HTML from '../assets/html.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-2xl sm:text-4xl font-bold text-[#AC9872] py-4'>SKILLS</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt='Html icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills