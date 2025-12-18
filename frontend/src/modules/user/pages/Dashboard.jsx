import React from 'react';
import StatCard from '../../../components/StatCard';

import QuickActions from '../../../components/QuickActions';

const Dashboard = () => {
    // Mock data
    const stats = [
        { title: 'Total Tasks', value: '12', icon: 'bi bi-hdd-stack', color: 'primary' },
        { title: 'In Progress', value: '4', icon: 'bi bi-hourglass-split', color: 'warning' },
        { title: 'Completed', value: '8', icon: 'bi bi-check-circle', color: 'success' },
        { title: 'Spent', value: '₹450', icon: 'bi bi-wallet2', color: 'info' },
    ];



    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Dashboard</h2>

            {/* Stats Row */}
            <div className="row g-4 mb-4">
                {stats.map((stat, index) => (
                    <div className="col-md-6 col-xl-3" key={index}>
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>

            <div className="row g-4">


                {/* Quick Actions */}
                <div className="col-12">
                    <QuickActions />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
