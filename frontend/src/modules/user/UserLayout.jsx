import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const UserLayout = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div style={{ width: '250px', flexShrink: 0 }}>
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 bg-light min-vh-100 d-flex flex-column">
                <Header role="user" />
                <div className="p-4 flex-grow-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserLayout;
