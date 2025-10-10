import React from 'react';
// import { Link } from 'react-router';
// import { useNavigate } from 'react-router-dom';


const NoAppsFound = () => {
    // const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#00000090]'>No Apps Found</h1>
            {/* <button onClick={() => navigate('/apps')} className=" liner text-white px-4 py-3 rounded-lg transition duration-200 hover:opacity-50" style={{ background: 'linear-gradient(to right, #632EE3, #9F62F2)' }}>Go Back </button> */}
            {/* <Link to='/apps' className='show-all-btn py-2 md:py-3 lg:py-4 px-3 md:px-5 ld:px-6 text-xs md:text-sm lg:text-base'>Go Back</Link> */}
            {/* <button
                onClick={() => navigate('/apps')}
                className="text-white px-4 py-3 rounded-lg transition duration-200 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90"
            >
                Go to Apps Page
            </button> */}
            <button
                onClick={() => window.location.reload()}
                className="text-white px-4 py-3 rounded-lg transition duration-200 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90"
            >
                Go Back
            </button>


        </div>
    );
};
export default NoAppsFound;