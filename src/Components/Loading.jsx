import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='flex justify-center items-center transform transition-all duration-1000 ease-in-out hover:scale-300 animate-breathe'>
            <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2'>
                L
                <img className='animate-spin w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' src="/logo.png" alt="logospin" />
                OADING
            </span>
        </div>
    );
};

export default Loading;
