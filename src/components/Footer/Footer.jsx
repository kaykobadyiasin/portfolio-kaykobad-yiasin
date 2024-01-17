import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-8 bg-[#090d24] rounded-t-[300px]'>
            <div className='flex gap-5 items-center justify-center mb-5'>
                <Link to={'https://github.com/kaykobadyiasin'} target='_blank'><Icon icon="mdi:github" className='text-3xl'  /></Link>
                <Link to={'https://www.linkedin.com/in/kaykobadyiasin/'} target='_blank'><Icon icon="mdi:linkedin" className='text-3xl' /></Link>
                <Link to={'/'} target='_blank'><Icon icon="mdi:instagram" className='text-3xl' /></Link>
                <Link to={'https://www.youtube.com/channel/UCvawath67O18yUbqN9pFtMg'} target='_blank'><Icon icon="mdi:youtube" className='text-3xl' /></Link>
            </div>
            <p className='text-center'>© 2024 Kaykobad Yiasin. All rights reserved.</p>
        </div>
    );
};

export default Footer;