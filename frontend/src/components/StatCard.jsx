import React from 'react';

const StatCard = ({ title, value, icon, color = 'primary' }) => {
    return (
        <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                    <h6 className="text-muted text-uppercase fw-semibold mb-2" style={{ fontSize: '0.8rem' }}>{title}</h6>
                    <h3 className="mb-0 fw-bold">{value}</h3>
                </div>
                <div className={`bg-${color} bg-opacity-10 text-${color} rounded p-3 d-flex align-items-center justify-content-center`}>
                    <i className={icon} style={{ fontSize: '1.5rem' }}></i>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
