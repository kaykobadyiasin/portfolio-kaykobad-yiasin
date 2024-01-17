import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Main = () => {
    return (
        <div className=' bg-[#060817] text-white'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;