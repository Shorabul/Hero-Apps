import React, { useEffect, useState } from 'react';
// import React from 'react';
import Navbar from '../Components/Navbar';
// import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { Outlet } from "react-router-dom";
// import NavigationLoader from '../Components/NavigationLoader';
import { Bounce, ToastContainer } from 'react-toastify';
import ShowLoadingForOneSecond from '../Components/ShowLoadingForOneSecond';


const MainLayout = () => {
    const [showInitialLoading, setShowInitialLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialLoading(false);
        }, 1000);// main loader duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='flex flex-col min-h-screen'>
            {
                showInitialLoading ? <div className='h-screen w-screen flex justify-center items-center'>
                    <ShowLoadingForOneSecond />
                </div> : <>
                    <Navbar />
                    <div className='flex-1 bg-[#F5F5F5] py-20'>
                        {/* <NavigationLoader /> */}
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
                        <Outlet />
                        {/* {showInitialLoading ? <ShowLoadingForOneSecond /> : <Outlet />} */}
                    </div>
                    <Footer />
                </>
            }
        </div>
    );
};
export default MainLayout;

// {showInitialLoading && <div className='absolute w-screen h-screen flex justify-center bg-white items-center z-10'>
//                 <ShowLoadingForOneSecond />
//             </div>}
//             <Navbar />
//             <div className='flex-1 bg-[#F5F5F5] py-20 z-0'>
//                 {/* <NavigationLoader /> */}
//                 <ToastContainer
//                     position="top-right"
//                     autoClose={5000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick={false}
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="light"
//                     transition={Bounce}
//                 />
//                 <Outlet context={{ mainLoadingDone: !showInitialLoading }} />
//                 {/* {showInitialLoading ? <ShowLoadingForOneSecond /> : <Outlet />} */}
//             </div>
//             <Footer />
//         </div>