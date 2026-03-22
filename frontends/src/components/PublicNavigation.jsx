import React from 'react'
import { Link } from 'react-router-dom'

const PublicNavigation = () => {
    return (
        <div className='bg-white  flex items-center  justify-between p-2'>
            <h1 className='text-[17px] text-blue-900 font-["Poppins"]  tracking-tight leading-none p-2 text-black'>
                taskPro AI
            </h1>
            <div className='flex gap-10 text-black font-["Poppins"]'>
                <Link
                to='/'
                    className='text-sm tracking-tight leading-none'
                >
                    Home
                </Link>
                <Link
                to='/about'
                    className='text-sm tracking-tight leading-none'
                >
                    About
                </Link>
                <Link
                to='/feature'
                    className='text-sm tracking-tight leading-none'
                >
                    feature
                </Link>
                <Link
                to='/contact'
                    className='text-sm tracking-tight leading-none'
                >
                    Contact
                </Link>
            </div>
            <div className='gap-5 flex font-["Poppins"]'>
                <Link
                    to='/login'
                    className='text-sm px-5 py-2 text-white rounded tracking-tight leadn font-normal  bg-black '
                >
                    login
                </Link>
                <Link
                    to='/register'
                    className='text-sm px-5 py-2 rounded text-white tracking-tight leadn font-normal  bg-blue-500 '
                >
                    signup
                </Link>
            </div>
        </div>
    )
}

export default PublicNavigation
