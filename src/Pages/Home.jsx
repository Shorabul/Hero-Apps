import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import TrendingApps from '../Components/TrendingApps';
import ShowLoadingForOneSecond from '../Components/ShowLoadingForOneSecond';
// import { useOutletContext } from 'react-router';

const Home = () => {
    // const { mainLoadingDone } = useOutletContext();

    const [showSecondaryLoading, setShowSecondaryLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondaryLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // useEffect(() => {
    //     if (mainLoadingDone) {
    //         setShowSecondaryLoading(true);

    //         const timer = setTimeout(() => {
    //             setShowSecondaryLoading(false);
    //         }, 1000); // show for 1 second

    //         return () => clearTimeout(timer);
    //     }
    // }, [mainLoadingDone]);
    if (showSecondaryLoading) {
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