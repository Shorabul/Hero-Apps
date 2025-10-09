import React from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';
import calculateDownloads from '../Utility/calculateDownloads';
import { addToLocalStorage } from '../Utility/addToLS';
import './AppDetails.css';

const AppDetails = () => {
    let { id } = useParams();
    const { apps, loading } = useApps();
    if (loading) {
        return <p>loading</p>
    }
    const app = apps.find(a => a.id === parseInt(id))
    const { image, title, companyName, size, description, reviews, ratingAvg, downloads } = app;

    const downloadsFormated = calculateDownloads(downloads);
    const reviewedFormated = calculateDownloads(reviews);


    return (
        <div className='w-11/12 mx-auto space-y-10'>
            <div className='flex flex-col justify-center md:items-center md:flex-row gap-10'>
                <div>
                    <img className=' lg:h-[350px] lg:w-[350px]' src={image} alt="" />
                </div>
                <div className='h-full flex-1 flex flex-col gap-3 md:gap-4 lg:gap-8'>
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl'>{title}</h1>
                        <p className=' text-[#627382] text-base md:text-lg lg:text-xl'>Developed by <span className='developed-text'>{companyName}</span></p>
                    </div>
                    <div className='border-b-[1px] border-[#62738250] w-full'></div>
                    <div className='flex items-center gap-6 text-[#001931] text-left'>
                        <div className='flex flex-col items-start gap-2'>
                            <img className='h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10' src="/icon-downloads.png" alt="downloads icon" />
                            <p className=''>Downloads</p>
                            <p className='text-[18px] md:text-[25px] lg:text-[40px] font-extrabold'>{downloadsFormated}</p>
                        </div>
                        <div className='flex flex-col gap-2 items-start'>
                            <img className='h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10' src="/icon-ratings.png" alt="downloads icon" />
                            <p>Average Ratings</p>
                            <p className='text-[18px] md:text-[25px] lg:text-[40px] font-extrabold'>{ratingAvg}</p>
                        </div>
                        <div className='flex flex-col gap-2 items-start'>
                            <img className='h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10' src="/icon-review.png" alt="downloads icon" />
                            <p>Total Reviews</p>
                            <p className='text-[18px] md:text-[25px] lg:text-[40px] font-extrabold'>{reviewedFormated}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => addToLocalStorage(app)} className='btn bg-[#00D390] text-white'>Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] border-[#62738250]'></div>

            <div className='space-y-3'>
                <h1 className='font-semibold text-lg md:text-xl lg:text-2xl'>Description</h1>
                <p className='text-[#627382] text-base md:text-lg lg:text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;