import React, { useState } from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Loading from '../Components/Loading';

const Apps = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    // if (loading) {
    //     return ;
    // }
    const userInput = search.trim().toLocaleLowerCase();
    const searchApps = search ?
        apps.filter(app => app.title.toLocaleLowerCase().includes(userInput))
        : apps;
    return (
        <div className={`px-40 flex flex-col justify-center`}>

            <div className='text-center space-y-3'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between'>
                <h1 className='text-3xl font-semibold'>({searchApps.length}) Apps Found</h1>
                <label className="input">
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" placeholder="Search Products" />
                </label>
            </div>
            {
                loading && <Loading></Loading>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    searchApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;