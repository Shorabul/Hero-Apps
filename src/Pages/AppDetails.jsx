import React from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';

const AppDetails = () => {
    let { id } = useParams();
    const { apps, loading } = useApps();
    if (loading) {
        return <p>loading</p>
    }
    const app = apps.find(a => a.id === parseInt(id))
    const { image, title, companyName, size, description } = app;
    return (
        <div >
            <div className='flex items-center gap-10'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <h1>{title}</h1>
                    <p>Developed by <span>{companyName}</span></p>
                    <div className='flex'>
                        <div>
                            <img src="/icon-downloads.png" alt="downloads icon" />
                            <p>Downloads</p>
                            <p>8M</p>
                        </div>
                        <div>
                            <img src="/icon-ratings.png" alt="downloads icon" />
                            <p>Average Ratings</p>
                            <p>4.9</p>
                        </div>
                        <div>
                            <img src="/icon-review.png" alt="downloads icon" />
                            <p>Total Reviews</p>
                            <p>54K</p>
                        </div>
                    </div>
                    <button className='btn'>Install Now ({size}MB)</button>
                </div>
            </div>
            <div>
                <h1>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;