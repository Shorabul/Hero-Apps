import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 bg-[#F5F5F5] py-20'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;