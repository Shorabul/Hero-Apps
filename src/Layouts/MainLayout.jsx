import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
// import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { Outlet } from "react-router-dom";
import NavigationLoader from '../Components/NavigationLoader';
import { Bounce, ToastContainer } from 'react-toastify';
import ShowLoadingForOneSecond from '../Components/ShowLoadingForOneSecond';


const MainLayout = () => {
    const [showInitialLoading, setShowInitialLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 bg-[#F5F5F5] py-20'>
                <NavigationLoader />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
                {showInitialLoading ? <ShowLoadingForOneSecond /> : <Outlet />}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;