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
                <div className=' space-y-4'>
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="text-sm md:text-base flex items-center gap-1 text-[#00D390] font-medium">
                            <FiDownload className='h-4 w-4' style={{ strokeWidth: 3 }} />
                            <div >{downloadsFormated}</div>
                        </div>
                        <div className="text-sm md:text-base flex items-center gap-1 text-[#FF8811] font-medium">
                            <FaStar className='h-4 w-4' strokeWidth={3} />
                            <div>{ratingAvg}</div>
                        </div>
                        <div className="text-sm md:text-base">
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