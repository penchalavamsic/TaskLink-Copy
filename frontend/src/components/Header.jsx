import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar_placeholder.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-4">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/notifications">
                                <i className="bi bi-bell fs-5"></i>
                            </Link>
                        </li>
                        <li className="nav-item dropdown ms-3">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={avatar} alt="Profile" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                <span className="fw-bold">User Name</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/user/profile">Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/login">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
