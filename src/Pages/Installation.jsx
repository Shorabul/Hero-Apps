import React, { useState } from 'react';
import { getFromLocalStorage, removeFromLocalStorage } from '../Utility/addToLS';
import InstalledAppCard from '../Components/InstalledAppCard';
// import useApps from '../Hooks/useApps';
import { FaLongArrowAltRight } from "react-icons/fa";


const Installation = () => {
    const [newStor, setNewStor] = useState(() => getFromLocalStorage());
    const [sort, setSort] = useState('none');

    const sortedItem = (() => {
        if (sort === 'size-asc') {
            return [...newStor].sort((a, b) => a.size - b.size);
        } else if (sort === 'size-desc') {
            return [...newStor].sort((a, b) => b.size - a.size);
        } else {
            return newStor;
        }
    })();
    const handleRemove = id => {
        removeFromLocalStorage(id)
        // setNewStor(newStor);
        setNewStor(prev => prev.filter(p => p.id !== id))
    }
    return (
        <div className='w-11/12 mx-auto space-y-6 md:space-y-8 lg:space-y-10'>
            <div className='text-center space-y-3'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-base md:text-xl lg:text-3xl font-semibold'>({sortedItem.length}) Apps Found</h1>
                    <label className='form-control max-w-xs text-[#627382]'>
                        <label className="form-control max-w-xs text-[#627382]">
                            <select value={sort} onChange={e => setSort(e.target.value)} className="select select-primary">
                                <option value="none">Sort By Size</option>
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