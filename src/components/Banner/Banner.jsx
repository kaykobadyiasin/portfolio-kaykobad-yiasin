import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/Kaykobad Yiasin.jpg'
import { Icon } from '@iconify/react';


const Banner = () => {
    return (
        <div className='relative'>
            <div className='flex flex-col gap-5 absolute top-52 '>
                <Link target='_blank' className='border border-l-0 pl-3 hover:bg-blue-600 transition-all duration-300 p-2 rounded-r' to={'https://github.com/kaykobadyiasin'}><Icon icon="mdi:github" className='text-2xl' /></Link>

                <Link target='_blank' className='border border-l-0 pl-3 hover:bg-blue-600 transition-all duration-300 p-2 rounded-r' to={'https://www.linkedin.com/in/kaykobadyiasin/'}><Icon icon="ri:linkedin-fill" className='text-2xl' /></Link>

                <Link target='_blank' className='border border-l-0 pl-3 hover:bg-blue-600 transition-all duration-300 p-2 rounded-r' to={'/'}><Icon icon="mdi:instagram" className='text-2xl' /></Link>

                <Link target='_blank' className='border border-l-0 pl-3 hover:bg-blue-600 transition-all duration-300 p-2 rounded-r' to={'https://www.youtube.com/channel/UCvawath67O18yUbqN9pFtMg'}><Icon icon="mdi:youtube" className='text-2xl' /></Link>
            </div>
            <div className='container mx-auto' >
                {/* banner  */}
                <div className=' flex justify-center text-center mt-16'>
                    <div>
                        <div className='relative'>
                            <div className='w-[400px] mx-auto h-[400px] rounded-full relative'>
                                <img className='w-full h-full object-cover object-top rounded-full z-50' src={profile} alt="" />
                                <div className='w-[300px] h-[300px] rounded-full top-20 translate-y-20 -translate-x-40 -left-4 z-10 border-2 border-gray-700 absolute'></div>
                                <div className='w-[100px] h-[100px] rounded-full top-0 right-0 z-10 absolute translate-x-5 translate-y-5 bg-gradient-to-r from-sky-500 to-blue-800'></div>
                            </div>
                        </div>
                        <div className='lg:text-left text-center mt-10'>
                            <h3 className='text-xl font-light text-center'>Hi, I am</h3>
                            <h1 className='xl:text-5xl md:text-4xl text-3xl font-extrabold my-3 text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text'>Md Kaykobad Yiasin Khan</h1>
                            <h3 className='text-xl font-light mb-8 text-center'>Front-end Developer</h3>
                            {/* Front-end Developer | Junior Full Stack Developer | MERN Stack Developer  */}

                            <div className='flex justify-center'>
                                <Link to='https://drive.google.com/file/d/1KPbt_p1DeYt0MtVysOIRDo--eXoY7ocg/view?usp=drive_link' target='_blank' className=' text-lg rounded-md px-8 py-3 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600'>Check Resume</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full mt-5 flex justify-center text-center items-end'>
                    <div className='w-8 h-16 border border-gray-600 rounded-full flex justify-center items-center'>
                        <div className='w-2 h-2 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 rounded-full'></div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Banner;