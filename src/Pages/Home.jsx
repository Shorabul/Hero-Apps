import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import TrendingApps from '../Components/TrendingApps';
import ShowLoadingForOneSecond from '../Components/ShowLoadingForOneSecond';

const Home = () => {
    const [showInitialLoading, setShowInitialLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    if (showInitialLoading) {
        return (<div className='flex justify-center items-center min-h-[50vh]'>
            <ShowLoadingForOneSecond />
        </div>)
    }
    return (
        <div className='flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-20'>
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;