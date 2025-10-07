import React from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';
import calculateDownloads from '../Utility/calculateDownloads';

const AppDetails = () => {
    let { id } = useParams();
    const { apps, loading } = useApps();
    if (loading) {
        return <p>loading</p>
    }
    const app = apps.find(a => a.id === parseInt(id))
    const { image, title, companyName, size, description, reviews, ratingAvg, downloads } = app;

    const downloadsFormated = calculateDownloads(downloads);
    const reviewedFormated = calculateDownloads(reviews);


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
                            <p>{downloadsFormated}</p>
                        </div>
                        <div>
                            <img src="/icon-ratings.png" alt="downloads icon" />
                            <p>Average Ratings</p>
                            <p>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src="/icon-review.png" alt="downloads icon" />
                            <p>Total Reviews</p>
                            <p>{reviewedFormated}</p>
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