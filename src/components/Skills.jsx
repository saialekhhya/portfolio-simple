import React from 'react'
import {FaNodeJs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiMysql} from 'react-icons/di'
import {FaShopify} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {CgCPlusPlus} from 'react-icons/cg'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-2xl sm:text-4xl font-bold text-[#AC9872] py-4'>SKILLS</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-6 text-center py-8'>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <AiOutlineHtml5 size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <FaReact size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <FaNodeJs size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <FaPython size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <DiMysql size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <FaShopify size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>SHOPIFY</p>
                </div>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <FaCss3 size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='rounded-[22px] shadow-md shadow-[#AC9872] hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto my-4'>
                        <CgCPlusPlus size={80} color="#AC9872"/>
                    </div>
                    <p className='my-4'>CPP</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills