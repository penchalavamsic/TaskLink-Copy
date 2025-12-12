import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const AdminLayout = () => {
    const adminLinks = [
        { to: '/admin/dashboard', icon: 'bi-speedometer2', label: 'Dashboard' },
        { to: '/admin/manage-users', icon: 'bi-people-fill', label: 'User Management' },
        { to: '/admin/manage-tasks', icon: 'bi-list-check', label: 'Task Management' },
        { to: '/admin/worker-verification', icon: 'bi-shield-check', label: 'Worker Verification' },
    ];

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div style={{ width: '250px', flexShrink: 0 }}>
                <Sidebar links={adminLinks} />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 bg-light min-vh-100 d-flex flex-column">
                <Header role="admin" />
                <div className="p-4 flex-grow-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
