import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-full flex justify-center h-[100vh]'>
            <div className='flex flex-col justify-center items-center text-center'>
                <img className='h-[280px]  lg:max-h-[377px] lg:max-w-[419px] mb-11 ' src="https://i.ibb.co/WpVYGQPm/error-404.png" alt="" />

                <h1 className='text-lg md:text-3xl lg:text-5xl mb-1 md:mb-1.5 lg:mb-2'>Oops, page not found!</h1>
                <p className='text-base md:text-lg lg:text-xl mb-2 md:mb-3 lg:mb-4'>The page you are looking for is not available.</p>
                <Link to='/'
                    style={{ background: 'linear-gradient(to right, #632EE3, #9F62F2)' }}
                    className=" liner text-white px-4 py-3 rounded-lg transition duration-200"
                >
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;