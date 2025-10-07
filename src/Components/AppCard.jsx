import React from 'react';

const AppCard = ({ app }) => {
    const { image, title } = app;
    return (
        <div className="card bg-base-100 w-87 shadow-sm">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;