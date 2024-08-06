import React from 'react'

function Navbar() {
    return (
        <div className=' p-2 flex justify-between items-center mx-10'>
            <div>
                <img className='w-[52px]' src="public/images/nav-img.png" alt="nav-img" />
            </div>
            <ul className='font-poppins flex gap-5 font-medium'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
