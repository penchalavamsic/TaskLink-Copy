import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const Login = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (selectedRole) {
            if (selectedRole === 'User') {
                navigate('/user/dashboard');
            } else if (selectedRole === 'Admin') {
                navigate('/admin/dashboard');
            } else if (selectedRole === 'Worker') {
                navigate('/worker/dashboard'); // Real redirect to worker module
            }
        } else {
            alert("Please select a role to login.");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold mb-1">Welcome Back</h3>
                                    <p className="text-muted">Choose your role to login</p>
                                </div>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                        <input type="email" className="form-control bg-light" id="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <label htmlFor="password" className="form-label fw-semibold mb-0">Password</label>
                                        </div>
                                        <input type="password" className="form-control bg-light" id="password" placeholder="••••••••" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-semibold d-block mb-3">Login as:</label>
                                        <div className="row g-2">
                                            {['User', 'Worker', 'Admin'].map((role) => (
                                                <div className="col-4" key={role}>
                                                    <button
                                                        type="button"
                                                        className={`btn w-100 py-2 fw-medium ${selectedRole === role ? 'btn-dark' : 'btn-outline-secondary border-0 bg-light text-dark'}`}
                                                        style={{ borderRadius: '0.5rem', transition: 'all 0.2s' }}
                                                        onClick={() => setSelectedRole(role)}
                                                    >
                                                        {role}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="d-grid mb-4">
                                        <Button type="submit" variant="primary" className="py-2 fw-bold text-dark">
                                            Login
                                        </Button>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <p className="mb-0 text-muted">Don't have an account? <Link to="/signup" className="text-primary fw-bold text-decoration-none">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
