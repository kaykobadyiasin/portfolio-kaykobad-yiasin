import React from 'react';
import { Link } from 'react-router-dom';


const navList = [
    { nav: 'about' },
    { nav: 'skills' },
    { nav: 'projects' },
    { nav: 'experience' },
    { nav: 'education' },
    { nav: 'contact' },
]

const Navbar = () => {
    return (
        <div>
            <nav className='py-8 container mx-auto '>
                <div className='flex items-center justify-between xl:mx-0 mx-5'>
                    <div>
                        <Link href={'/'} className='text-xl font-semibold'>Kaykobad Yiasin</Link>
                    </div>
                    <div className='lg:block hidden'>
                        <div className='flex items-center gap-10'>
                            {
                                navList?.map((item, index) => (
                                    <Link key={index} href={`#${item?.nav}`} className='capitalize border-b border-transparent hover:border-purple-600 hover:text-blue-500 transition-all duration-200'>{item?.nav}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <Link to={'https://github.com/kaykobadyiasin'} target='_blank' className=' text-lg rounded-md px-8 py-3 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600'>Visit Github</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;