import React from 'react';
import { Link } from 'react-router';
import calculateDownloads from '../Utility/calculateDownloads';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
    const { id, image, title, ratingAvg, downloads } = app;
    const downloadsFormated = calculateDownloads(downloads);
    return (
        <Link to={`/app/${id}`} className="p-4 h-full w-[220px] md:w-[250px] lg:w-[348px] shadow-sm rounded-sm space-y-4">
            <figure>
                <img className='w-full h-full rounded-lg' src={image} alt={title} />
            </figure>
            <div className="w-full h-full space-y-4">
                <h2 className="text-[#001931] font-medium">{title}</h2>
                <div className="flex justify-between items-center">
                    <div className=" bg-[#F1F5E8] flex items-center gap-2 py-1.5 px-2.5 rounded-sm text-[#00D390]">
                        {/* <img className='h-3 w-3 lg:h-4 lg:w-4' src="/icon-downloads.png" alt="" /> */}
                        <FiDownload className='h-4 w-4' style={{ strokeWidth: 3 }} />
                        <div className='text-sm md:text-base'>{downloadsFormated}</div>
                    </div>
                    <div className="bg-[#FFF0E1] flex items-center gap-2 py-1.5 px-2.5 rounded-sm font-medium text-[#FF8811]">
                        <FaStar className='h-4 w-4' strokeWidth={3} />
                        <div>{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;