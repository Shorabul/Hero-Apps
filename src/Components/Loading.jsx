import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-5xl flex'>L
                <img className='animate-spin w-12 h-12' src="/logo.png" alt="logospin" />OADING
            </h1>
        </div>
    );
};

export default Loading;