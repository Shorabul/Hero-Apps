import React from 'react';
import useApps from '../Hooks/useApps';
import AppCard from './AppCard';
import { Link } from 'react-router';
import './TrendingApps.css';
import Loading from './Loading';

const TrendingApps = () => {
    const { apps, loading } = useApps();
    const trendingAppsData = apps.slice(0, 8);
    return (
        <div className='trending-apps gap-y-10 w-11/12 mx-auto'>
            <div className='text-center space-y-3'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                loading ? <Loading></Loading> : <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6 w-full place-items-center'>
                        {
                            trendingAppsData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                        }
                    </div>
                    <Link to='/apps' className='show-all-btn py-2 md:py-3 lg:py-4 px-3 md:px-5 ld:px-6 text-xs md:text-sm lg:text-base'>Show All</Link>
                </>
            }

        </div>
    );
};

export default TrendingApps;