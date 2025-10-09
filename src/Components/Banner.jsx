import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="text-center px-20">
                <div className="max-w-5xl flex flex-col items-center">
                    <div>
                        <h1 className="font-bold leading-8 md:leading-16  lg:leading-20 text-2xl md:text-5xl lg:text-7xl">We Build<br /><span className='banner-text-productive'>Productive</span> Apps</h1>
                        <p className="text-[#627382] text-sm md:text-base lg:text-xl py-6">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                        <div className='flex justify-center gap-4 my-[40px]'>
                            {/* <button className="flex justify-between items-center gap-2.5 bg-white py-3 px-6 border-1 border-[#D2D2D2] rounded-md banner-btn"><img className='h-8 w-8' src="/google-play-logo.png" alt="" /> Google Play</button>
                            <button className="flex justify-between items-center gap-2.5 bg-white py-3 px-6 border-1 border-[#D2D2D2] rounded-md banner-btn"><img className='h-8 w-8' src="/app-store-logo.png" alt="" /> Google Play</button> */}
                            <button className="banner-btn py-1 md:py-2 lg:py-3 px-2 md:px-4 ld:px-6 text-xs md:text-sm lg:text-base"><img className='h-5 w-5 lg:h-8 lg:w-8' src="/google-play-logo.png" alt="" /> Google Play</button>
                            <button className="banner-btn py-1 md:py-2 lg:py-3 px-2.5 md:px-4.5 ld:px-6.5 text-xs md:text-sm lg:text-base"><img className='h-5 w-5 lg:h-8 lg:w-8' src="/app-store-logo.png" alt="" /> App Store</button>
                        </div>
                    </div>
                    <figure className='max-h-[1095px] max-w-[642px]'>
                        <img className='h-full w-full' src="/hero.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className='banner-trusted py-6 md:py-12 lg:py-20 gap-3 md:gap-6 lg:gap-10'>
                <h1 className='text-xl md:text-3xl lg:text-5xl'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col items-center lg:flex-row lg:justify-center gap-6'>
                    <div className='space-y-4 px-5 md:px-11 lg:px-[70px]'>
                        <h5 className='text-xs md:text-sm lg:text-base font-extralight'>Total Downloads</h5>
                        <p className='text-2xl md:text-4xl lg:text-6xl font-extrabold'>29.6M</p>
                        <p className='text-xs md:text-sm lg:text-base font-extralight'>21% More Than Last Month</p>
                    </div>
                    <div className='space-y-4 px-5 md:px-11 lg:px-[70px]'>
                        <h5 className='text-xs md:text-sm lg:text-base font-extralight'>Total Reviews</h5>
                        <p className='text-2xl md:text-4xl lg:text-6xl font-extrabold'>906K</p>
                        <p className='text-xs md:text-sm lg:text-base font-extralight'>46% More Than Last Month</p>
                    </div>
                    <div className='space-y-4 px-5 md:px-11 lg:px-[70px]'>
                        <h5 className='text-xs md:text-sm lg:text-base font-extralight'>Active Apps</h5>
                        <p className='text-2xl md:text-4xl lg:text-6xl font-extrabold'>132+</p>
                        <p className='text-xs md:text-sm lg:text-base font-extralight'>31 More Than Last Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;