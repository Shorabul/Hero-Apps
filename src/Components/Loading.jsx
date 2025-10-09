import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2'>
                L
                <img className='animate-spin w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' src="/logo.png" alt="logospin" />
                OADING
            </h1>
        </div>

    );
};

export default Loading;