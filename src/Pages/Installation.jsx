import React, { useEffect, useState } from 'react';
import { getFromLocalStorage, removeFromLocalStorage } from '../Utility/addToLS';
import InstalledAppCard from '../Components/InstalledAppCard';
// import useApps from '../Hooks/useApps';
import { FaLongArrowAltRight } from "react-icons/fa";
import ShowLoadingForOneSecond from '../Components/ShowLoadingForOneSecond';
// import { useOutletContext } from 'react-router';


const Installation = () => {
    // const { mainLoadingDone } = useOutletContext();
    // const [newStor, setNewStor] = useState(getFromLocalStorage());
    const [newStor, setNewStor] = useState(() => getFromLocalStorage());
    const [sort, setSort] = useState('none');
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
    const sortedItem = (() => {
        if (sort === 'size-asc') {
            return [...newStor].sort((a, b) => a.downloads - b.downloads);
        } else if (sort === 'size-desc') {
            return [...newStor].sort((a, b) => b.downloads - a.downloads);
        } else {
            return newStor;
        }
    })();
    const handleRemove = id => {
        removeFromLocalStorage(id);// updates localStorage
        // setNewStor(newStor);
        setNewStor(prev => prev.filter(p => p.id !== id));// updates React state
    }
    return (
        <div className='w-11/12 mx-auto space-y-6 md:space-y-8 lg:space-y-10'>
            <div className='text-center space-y-3'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-base md:text-xl lg:text-3xl font-semibold'>({sortedItem.length}) Apps Found</h1>
                    <label className='form-control max-w-xs text-[#627382]'>
                        <label className="form-control max-w-xs text-[#627382]">
                            <select value={sort} onChange={e => setSort(e.target.value)} className="select select-primary">
                                <option value="none">Sort By Downloads</option>
                                <option value="size-asc">Low <FaLongArrowAltRight /> High</option>
                                <option value="size-desc">High <FaLongArrowAltRight /> Low</option>
                            </select>
                        </label>
                    </label>
                </div>
                <div className='space-y-3'>
                </div>
                <div className=' space-y-4'>
                    {
                        sortedItem.map(app => <InstalledAppCard key={app.id} app={app} handleRemove={handleRemove}></InstalledAppCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;