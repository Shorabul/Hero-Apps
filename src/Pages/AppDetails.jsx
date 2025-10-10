import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';
import calculateDownloads from '../Utility/calculateDownloads';
import { addToLocalStorage, getFromLocalStorage } from '../Utility/addToLS';
import './AppDetails.css';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
import Loading from '../Components/Loading';
import NotFound from '../Components/NotFound';
import { toast } from 'react-toastify';
import calculateReviews from '../Utility/calculateReviews';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const [changeText, setChangeText] = useState('Install Now');

    useEffect(() => {
        const storedApps = getFromLocalStorage();
        const sameApp = storedApps.find(sa => sa.id === parseInt(id));
        if (sameApp) {
            setChangeText('Installed');
        }
    }, [id]);

    if (loading) {
        return (<div className='flex justify-center items-center min-h-[50vh]'>
            <Loading />
        </div>);
    }

    const app = apps.find(a => a.id === parseInt(id))
    if (!app) {
        return <NotFound />;
    }
    // const numericId = parseInt(id);
    // if (isNaN(numericId)) {
    //     return <NotFound />;
    // }



    const { image, title, companyName, size, description, ratingAvg, downloads, ratings, reviews } = app;
    const downloadsFormated = calculateDownloads(downloads);
    const reviewedFormated = calculateReviews(reviews);
    const reversedRatings = [...ratings].reverse();

    const handleInstallBtn = (app) => {
        setChangeText('Installed');
        toast.success(`Yahoo!! ${app.title} Installed Successfully`);
        addToLocalStorage(app);
    };

    return (
        <div className='w-11/12 mx-auto space-y-10'>
            <div className='flex flex-col md:flex-row md:items-stretch gap-10'>
                <div className='w-[150px] md:w-[250px] lg:min-w-[350px]'>
                    <img className='rounded-md w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className='h-full flex-1 flex flex-col gap-3 md:gap-4 lg:gap-8'>
                    <div className='border-b-[1px] border-[#62738250]'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl text-[#001931] font-bold'>{title}</h1>
                        <p className=' text-[#627382] text-base md:text-lg lg:text-xl'>Developed by <span className='developed-text'>{companyName}</span></p>
                    </div>
                    <div className='flex-1 flex flex-col gap-3 md:gap-4 lg:gap-8'></div>
                    <div className='flex items-center gap-10 text-[#001931] text-left'>
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
                        <button onClick={() => handleInstallBtn(app)} className='py-2 md:py-3 lg:py-4 px-3 md:px-5 ld:px-7 text-xs md:text-sm lg:text-base install-btn' disabled={changeText === 'Installed'}>{changeText} {changeText === 'Install Now' && `${size} MB`}</button>
                        {/* `${changeText ? changeText : 'Install Now'} ${size} MB` */}
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] border-[#62738250]'></div>

            <div className='space-y-3'>
                <h1 className='font-semibold text-lg md:text-xl lg:text-2xl'>Ratings</h1>
                <div className='h-[350px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            layout="vertical"
                            width={500}
                            height={400}
                            data={reversedRatings}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis type="count" />
                            <YAxis dataKey="name" type="category" scale="band" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" barSize={20} fill="#FF8811" />
                        </ComposedChart>
                    </ResponsiveContainer>
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