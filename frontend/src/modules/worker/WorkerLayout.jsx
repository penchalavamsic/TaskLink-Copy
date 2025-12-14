import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const WorkerLayout = () => {
    const workerLinks = [
        { to: '/worker/dashboard', icon: 'bi-grid-fill', label: 'Dashboard' },
        { to: '/worker/browse-tasks', icon: 'bi-search', label: 'Browse Tasks' },
        { to: '/worker/my-bids', icon: 'bi-file-earmark-text', label: 'My Bids' },
        { to: '/worker/my-jobs', icon: 'bi-briefcase-fill', label: 'My Jobs' },
        { to: '/worker/profile', icon: 'bi-person-fill', label: 'Profile' },
    ];

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div style={{ width: '250px', flexShrink: 0 }}>
                <Sidebar links={workerLinks} />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 bg-light min-vh-100 d-flex flex-column">
                <Header role="worker" />
                <div className="p-4 flex-grow-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default WorkerLayout;
