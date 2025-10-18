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
            {showLoading ? <Loading /> : ""}
        </div>
    );
};

export default ShowLoadingForOneSecond;
