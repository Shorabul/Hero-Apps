import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="text-center">
                <div className="max-w-md">
                    <h1 className="banner-title text-5xl font-bold">We Build <span className='banner-text-productive'>Productive</span> Apps</h1>
                    <p className="banner-description py-6">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='space-x-6 my-[40px]'>
                        <button className="btn btn-outlin py-6 px-6 spaxe-x-[10px]"><img className='h-8 w-8' src="/google-play-logo.png" alt="" /> Google Play</button>
                        <button className="btn btn-outlin py-6 px-6 spaxe-x-[10px]"><img className='h-8 w-8' src="/app-store-logo.png" alt="" /> App Store</button>
                    </div>
                    <figure>
                        <img src="/hero.png" alt="" />
                    </figure>

                </div>

            </div>
            <div className='text-white banner-trusted w-full py-6 md:py-12 lg:py-20 flex flex-col items-center justify-center gap-10 text-center'>
                <h1 className='text-xl md:text-3xl lg:text-5xl'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col items-center lg:flex-row lg:justify-center gap-6'>
                    <div className='space-y-4 px-[70px]'>
                        <h5 className='font-extralight'>Total Downloads</h5>
                        <p className='text-[64px] font-extrabold'>29.6M</p>
                        <p className='font-extralight'>21% More Than Last Month</p>
                    </div>
                    <div className='space-y-4 px-[70px]'>
                        <h5 className='font-extralight'>Total Reviews</h5>
                        <p className='text-[64px] font-extrabold'>906K</p>
                        <p className='font-extralight'>46% More Than Last Month</p>
                    </div>
                    <div className='space-y-4 px-[70px]'>
                        <h5 className='font-extralight'>Active Apps</h5>
                        <p className='text-[64px] font-extrabold'>132+</p>
                        <p className='font-extralight'>31 More Than Last Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;