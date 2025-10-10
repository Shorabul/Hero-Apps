import React, { useEffect, useState } from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Loading from '../Components/Loading';
import { Search } from 'lucide-react';
import './Apps.css';
import NotFound from '../Components/NotFound';
import NoAppsFound from '../Components/NoAppsFound';
import ShowLoadingForOneSecond from '../Components/ShowLoadingForOneSecond';

const Apps = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const [showInitialLoading, setShowInitialLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialLoading(false);
        }, 1000); // 1 second
        return () => clearTimeout(timer);
    }, []);
    if (showInitialLoading) {
        return (<div className='flex justify-center items-center min-h-[50vh]'>
            <ShowLoadingForOneSecond />
        </div>)
    }

    const userInput = search.trim().toLocaleLowerCase();
    const searchApps = search ?
        apps.filter(app => (
            app.title.toLocaleLowerCase().includes(userInput)
        ))
        : apps;
    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ">

            <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">Our All Applications</h1>
                <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {
                !loading && (
                    <div className="flex flex-col md:flex-row justify-between items-center mt-6 sm:mt-8 lg:mt-10 gap-4">
                        <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold">
                            ({searchApps.length}) Apps Found
                        </h1>
                        <div className="relative w-full sm:w-auto">
                            <label className="relative block w-full">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                                </span>
                                <input
                                    type="search"
                                    value={search}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSearch(value);
                                        setSearchLoading(true);
                                        setTimeout(() => {
                                            setSearchLoading(false);
                                        }, 500);
                                    }}

                                    placeholder="Search Apps"
                                    className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] text-sm sm:text-base py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>
                        </div>
                    </div>
                )
            }
            {/* onChange={(e) => setSearch(e.target.value)} */}
            {/* {
                loading && (
                    <div className='flex justify-center items-center min-h-[50vh]'>
                        <Loading></Loading>
                    </div>)
            } */}
            {
                (loading || searchLoading) && (
                    <div className='flex justify-center items-center min-h-[50vh]'>
                        <Loading />
                    </div>
                )
            }


            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6 w-full place-items-center">
                {
                    !loading && searchApps.map((app) => (<AppCard key={app.id} app={app} />))
                }
            </div>
            {
                !searchApps.length && !loading && <div className='w-full flex justify-center items-center min-h-[50vh]'><NoAppsFound></NoAppsFound></div>
            } */}
            {
                !loading && searchApps.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6 w-full place-items-center">
                        {searchApps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                )
            }

            {
                !searchApps.length === 0 && (
                    <div className="w-full flex justify-center items-center min-h-[50vh]">
                        <NoAppsFound />
                    </div>
                )
            }

        </div>

    );
};

export default Apps;