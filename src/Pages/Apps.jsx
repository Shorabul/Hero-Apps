import React, { useState } from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Loading from '../Components/Loading';
import { Search } from 'lucide-react';
import './Apps.css';

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

        <div className='w-11/12 mx-auto'>

            <div className='flex flex-col justify-center items-center'>
                <div className='text-center space-y-1 md:space-y-2 lg:space-y-3'>
                    <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Our All Applications</h1>
                    <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className={`${loading ? 'flex justify-center items-center min-h-[35vh]' : 'hidden'}`}>
                    <Loading></Loading>
                </div>

                <div className={`${loading ? 'hidden' : 'block'}`}>
                    <div className='flex justify-between items-center mt-10 md:mt-6 lg:mt-10'>
                        <h1 className='text-base md:text-xl lg:text-3xl font-semibold'>({searchApps.length}) Apps Found</h1>
                        <div className="max-w-full relative">
                            <label className="relative block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Search className=" w-4 h-4 lg:w-5 lg:h-5" />
                                </span>
                                <input
                                    type="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search Apps"
                                    className="text-sm md:text-base py-1 md:py-1.5 lg:py-2 px-8 md:px-16 lg:px-22 focus:pl-10 md:focus:pl-18 lg:focus:pl-24 transition-all duration-200 ease-in-out search-input"
                                />
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mt-4'>
                        {
                            searchApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apps;