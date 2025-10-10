import React from 'react';
// import { Link } from 'react-router';
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();


    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <img className='h-[280px]  lg:max-h-[377px] lg:max-w-[419px] mb-11 ' src="https://i.ibb.co/wNMtbQDc/App-Error.png" alt="" />

            <h1 className='text-lg md:text-3xl lg:text-5xl mb-1 md:mb-1.5 lg:mb-2'>OPPS!! APP NOT FOUND</h1>
            <p className='text-base md:text-lg lg:text-xl mb-2 md:mb-3 lg:mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
            <button
                onClick={() => navigate(-1)} style={{ background: 'linear-gradient(to right, #632EE3, #9F62F2)' }}
                className=" liner text-white px-4 py-3 rounded-lg transition duration-200"
            >
                Go Back
            </button>
            {/* <Link to="/apps"
                style={{ background: 'linear-gradient(to right, #632EE3, #9F62F2)' }}
                className=" liner text-white px-4 py-3 rounded-lg transition duration-200"
            >
                Go Back
            </Link> */}
            {/* <Link to='/apps' className='show-all-btn py-2 md:py-3 lg:py-4 px-3 md:px-5 ld:px-6 text-xs md:text-sm lg:text-base'>Go Back</Link> */}
        </div>
    );
};

export default NotFound;