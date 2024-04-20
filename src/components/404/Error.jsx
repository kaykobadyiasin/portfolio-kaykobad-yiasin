import React from 'react';
import error from '../../assets/404.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-[#F3F4F6] h-screen flex flex-col justify-center items-center'>
            <div>
                <h3 className='text-center text-2xl mb-8 font-semibold'>!Opps</h3>
                <div className='lg:w-full w-8/12 mx-auto'>
                    <img src={error} className='w-full' alt="" />
                </div>
                <h2 className='text-center text-4xl font-semibold uppercase mt-8 pb-5 border-b-4 border-[#2766EC]'>Page Not Found</h2>
                <div className='flex justify-center mt-5'>
                    <Link to={'/'} className='hover:bg-gradient-to-l bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white px-5 py-3 rounded-lg hover:bg-[#F04F23] transition-all duration-200'>Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;