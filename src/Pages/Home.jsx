import React from 'react';
import Banner from '../Components/Banner';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    return (
        <div className='flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-20'>
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;