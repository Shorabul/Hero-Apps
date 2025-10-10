import React from 'react';
import { Link } from 'react-router';
import calculateDownloads from '../Utility/calculateDownloads';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
    const { id, image, title, ratingAvg, downloads } = app;
    const downloadsFormated = calculateDownloads(downloads);
    return (
        <Link to={`/app/${id}`} className="p-4 h-full w-[300px] md:w-[310px] lg:w-[350px] shadow-lg rounded-sm space-y-4 hover:scale-105 transition ease-in-out">
            <figure>
                <img className='w-full h-full rounded-lg' src={image} alt={title} />
            </figure>
            <div className="space-y-4">
                <h2 className="text-[#001931] font-medium text-xs md:text-sm lg:text-base">{title}</h2>
                <div className="flex justify-between text-[10px] md:text-xs lg:text-sm">
                    <div className=" bg-[#F1F5E8] flex items-center gap-1 md:gap-1.5 lg:gap-2 py-0.5 px-1 lg:py-1.5 lg:px-2.5 rounded-sm text-[#00D390]">
                        <FiDownload className='h-3 w-3 md:h-4 md:w-4' style={{ strokeWidth: 3 }} />
                        <div>{downloadsFormated}</div>
                    </div>
                    <div className="bg-[#FFF0E1] flex items-center gap-1 md:gap-1.5 lg:gap-2 py-0.5 px-1 lg:py-1.5 lg:px-2.5 rounded-sm font-medium text-[#FF8811]">
                        <FaStar className='h-3 w-3 md:h-4 md:w-4' style={{ strokeWidth: 3 }} />
                        <div>{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;