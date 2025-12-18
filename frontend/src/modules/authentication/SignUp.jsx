import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const SignUp = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('user'); // Default selection

    const handleSignUp = (e) => {
        e.preventDefault();
        // Mock authentication logic
        if (role === 'user') {
            navigate('/user/dashboard');
        } else {
            navigate('/worker/dashboard');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold mb-1">Create Account</h3>
                                    <p className="text-muted">How do you want to use TaskLink?</p>
                                </div>
                                <form onSubmit={handleSignUp}>

                                    {/* Role Selection Buttons */}
                                    <div className="row g-3 mb-4">
                                        <div className="col-6">
                                            <button
                                                type="button"
                                                className={`btn w-100 p-3 h-100 border ${role === 'user' ? 'btn-primary text-dark shadow-sm' : 'bg-white text-muted'}`}
                                                style={{ borderWidth: role === 'user' ? '2px' : '1px' }}
                                                onClick={() => setRole('user')}
                                            >
                                                <i className={`bi bi-briefcase fs-3 d-block mb-2 ${role === 'user' ? 'text-dark' : 'text-secondary'}`}></i>
                                                <span className="fw-bold d-block">Hire Worker</span>
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <button
                                                type="button"
                                                className={`btn w-100 p-3 h-100 border ${role === 'worker' ? 'btn-primary text-dark shadow-sm' : 'bg-white text-muted'}`}
                                                style={{ borderWidth: role === 'worker' ? '2px' : '1px' }}
                                                onClick={() => setRole('worker')}
                                            >
                                                <i className={`bi bi-tools fs-3 d-block mb-2 ${role === 'worker' ? 'text-dark' : 'text-secondary'}`}></i>
                                                <span className="fw-bold d-block">Find Work</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
                                            <input type="text" className="form-control bg-light" id="firstName" placeholder="Rajesh" required />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
                                            <input type="text" className="form-control bg-light" id="lastName" placeholder="Kumar" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label fw-semibold">Address</label>
                                        <input type="text" className="form-control bg-light" id="address" placeholder="e.g. Flat 402, Sunshine Apts, Mumbai" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                        <input type="email" className="form-control bg-light" id="email" placeholder="rajesh@example.com" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                        <input type="password" className="form-control bg-light" id="password" placeholder="••••••••" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                                        <input type="password" className="form-control bg-light" id="confirmPassword" placeholder="••••••••" required />
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                                        <label className="form-check-label text-muted small" htmlFor="flexCheckDefault">
                                            I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <div className="d-grid mb-4">
                                        <Button type="submit" variant="primary" className="py-2 fw-bold text-dark">
                                            {role === 'user' ? 'Join as User' : 'Join as Worker'}
                                        </Button>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <p className="mb-0 text-muted">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
