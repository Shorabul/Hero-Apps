import React from 'react';
import { Link } from 'react-router';
import calculateDownloads from '../Utility/calculateDownloads';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
    const { id, image, title, ratingAvg, downloads } = app;
    const downloadsFormated = calculateDownloads(downloads);
    return (
        <Link to={`/app/${id}`} className="flex flex-col justify-between p-1 sm:p-2 md:p-3 lg:p-4 h-full shadow-lg rounded-sm space-y-4 hover:scale-105 transition ease-in-out">
            <figure className='w-full'>
                <img className='w-full rounded-lg' src={image} alt={title} />
            </figure>
            <div className="flex-1 flex flex-col justify-between gap-1 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4">
                <h2 className="text-[#001931] font-medium text-xs md:text-sm lg:text-base">{title}</h2>
                <div className="flex justify-between text-[8px] sm:text-xs md:text-sm lg:text-base">
                    <div className=" bg-[#F1F5E8] flex items-center gap-1 md:gap-1.5 lg:gap-2 py-0.5 px-1 lg:py-1.5 lg:px-2.5 rounded-sm text-[#00D390]">
                        <FiDownload className='h-1 w-1 sm:h-2 sm:w-2 md:h-3 md:w-3 lg:h-4 lg:w-4' style={{ strokeWidth: 3 }} />
                        <div className=''>{downloadsFormated}</div>
                    </div>
                    <div className="bg-[#FFF0E1] flex items-center gap-1 md:gap-1.5 lg:gap-2 py-0.5 px-1 lg:py-1.5 lg:px-2.5 rounded-sm font-medium text-[#FF8811]">
                        <FaStar className='h-1 w-1 sm:h-2 sm:w-2 md:h-3 md:w-3 lg:h-4 lg:w-4' style={{ strokeWidth: 3 }} />
                        <div className=''>{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default AppCard;