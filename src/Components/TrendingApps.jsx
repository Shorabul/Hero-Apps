import React from 'react';
import useApps from '../Hooks/useApps';
import AppCard from './AppCard';
import { Link } from 'react-router';
import './TrendingApps.css';

const TrendingApps = () => {
    const { apps } = useApps();
    const trendingAppsData = apps.slice(0, 8);
    return (
        <div className='flex flex-col items-center gap-y-10'>
            <div className='text-center space-y-3'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    trendingAppsData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
            <Link to='/apps' className='btn font-semibold show-all-btn py-4 px-10'>Show All</Link>
        </div>
    );
};

export default TrendingApps;