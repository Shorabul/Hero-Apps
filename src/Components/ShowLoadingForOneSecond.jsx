import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const ShowLoadingForOneSecond = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showLoading ? <Loading /> : <p className="text-center text-xl">Loading complete!</p>}
        </div>
    );
};

export default ShowLoadingForOneSecond;
