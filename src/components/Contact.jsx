import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a860db96-4fab-4d91-9d1e-54e61acf1fb8" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-2xl sm:text-4xl font-bold text-[#AC9872] py-4'>LET'S TALK</p>
            </div>
            <input className='p-2 rounded-lg bg-[#F2E9D8] text-[#6E6746]' type="text" placeholder='Name' name='name' />
            <input className='my-4 rounded-lg p-2 bg-[#F2E9D8] text-[#6E6746]' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 rounded-lg bg-[#F2E9D8] text-[#6E6746]' name='message' placeholder='Message' rows='10'/>
            <button className='text-[#AC9872] border-2 px-6 py-3 my-8 flex items-center mx-auto bg-white border-[#AC9872] hover:bg-[#AC9872] hover:text-white'>SUBMIT</button>
        </form>
    </div>
  )
}
export default Contact