import React from 'react'
import { MdChat } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
function ContactForm() {
  return (
    <>
    <div className='flex max-w-[1100px] mx-auto my-[50px] gap-[] justify-between items-center font-poppins'>
        <div className='left ml-10'>
            <div className="buttons flex gap-8 ">
            <button className='flex gap-3 items-center cursor-pointer px-3 py-2 rounded-lg bg-black text-white'><MdChat />Via Support Chat</button>
            <button className='flex gap-3 items-center cursor-pointer px-3 py-2 rounded-lg bg-black text-white'><IoMdCall />Via Call</button>
            </div>
            <button className='border-box border-black border-2 px-[88px] py-2 font-semibold my-2 p-4  flex justify-center items-center gap-4 rounded-lg cursor-pointer'><MdChat/>Via Email From</button>

            <div className='my-6'>
                <label className='absolute bottom-[172px] font-semibold z-10 left-[210px] bg-white px-2'  htmlFor="Name">Name</label>
                <input id='Name' className='border relative border-black w-full p-3 outline-none' type="text" placeholder='' />
            </div>

            <div className='my-4'>
                <label className='absolute bottom-[100px] left-[210px] z-10 bg-white px-2 font-semibold' htmlFor="Email">Email</label>
                <input className='border relative border-black w-full p-3 outline-none' type="text" />
            </div>

            <div>
                <label className='absolute bottom-[35px] left-[210px] bg-white px-2 font-semibold' htmlFor="Text">Text</label>
                <input className='border border-black w-full p-3 outline-none h-[100px]' type="text" />
            </div>
            <button className='bg-black rounded-sm px-14 py-1 text-white my-2 ml-[50%] cursor-pointer'>Submit</button>
        </div>
        <div className='right'>
            <img c src="/images/big-img.svg" alt="main image" />
        </div>
    </div>
    </>
  )
}

export default ContactForm
