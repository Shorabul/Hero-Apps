import React from 'react';
import calculateDownloads from '../Utility/calculateDownloads';
// import { Download, Star } from 'lucide-react';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';

const InstalledAppCard = ({ app, handleRemove }) => {
    const { image, size, title, ratingAvg, downloads } = app;

    const downloadsFormated = calculateDownloads(downloads);

    const handleUninstall = (app) => {
        toast.success(`${app.title} uninstalled from your Device`)
        handleRemove(app.id);
    }
    return (
        <div className='bg-white p-4 rounded-sm flex justify-between items-center shadow-sm'>
            <div className='flex items-center gap-4'>
                <div>
                    <img className='rounded-md w-20 h-20' src={image} alt="" />
                </div>
                <div className='flex-1 space-y-4'>
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div className="flex sm:justify-between items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 text-[8px] sm:text-xs md:text-sm lg:text-base">
                        <div className="flex flex-col sm:flex-row items-center gap-1 text-[#00D390] font-medium">
                            <FiDownload className='h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-3 lg:h-4.5 lg:w-4.5' style={{ strokeWidth: 3 }} />
                            <div >{downloadsFormated}</div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-1 text-[#FF8811] font-medium">
                            <FaStar className='h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-4.5 lg:w-4.5' style={{ strokeWidth: 3 }} />
                            <div>{ratingAvg}</div>
                        </div>
                        <div className="">
                            <h1 className=''>{size} MB</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(app)} className={` btn bg-[#00D390] text-white`}>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledAppCard;