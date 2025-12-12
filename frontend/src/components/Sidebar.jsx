import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ links }) => {
    // Default links for User module if none provided
    const defaultLinks = [
        { to: '/user/dashboard', icon: 'bi-grid-fill', label: 'Dashboard' },
        { to: '/user/my-tasks', icon: 'bi-list-task', label: 'My Tasks' },
        { to: '/user/post-task', icon: 'bi-plus-circle-fill', label: 'Post Task' },
        { to: '/user/reviews', icon: 'bi-star-fill', label: 'Reviews' },
        { to: '/user/profile', icon: 'bi-person-fill', label: 'Profile' },
    ];

    const navLinks = links || defaultLinks;

    return (
        <div className="bg-white text-dark p-3 vh-100 border-end" style={{ width: '250px', position: 'fixed', left: 0, top: 0, overflowY: 'auto' }}>
            <div className="d-flex align-items-center mb-4 px-2">
                <div className="bg-primary rounded me-2" style={{ width: '32px', height: '32px' }}></div>
                <h4 className="m-0 fw-bold">TaskLink</h4>
            </div>

            <ul className="nav flex-column gap-2">
                {navLinks.map((link, index) => (
                    <li className="nav-item" key={index}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => `nav-link d-flex align-items-center text-dark ${isActive ? 'bg-primary' : ''}`}
                        >
                            <i className={`bi ${link.icon} me-3`}></i>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
