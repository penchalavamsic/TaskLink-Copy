import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button'; // Assuming Button is in src/components

const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-4">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold mb-1">Welcome Back</h3>
                                    <p className="text-muted">Login to your account</p>
                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                        <input type="email" className="form-control bg-light" id="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <label htmlFor="password" className="form-label fw-semibold mb-0">Password</label>
                                            <Link to="/forgot-password" className="small text-decoration-none text-primary fw-medium">Forgot Password?</Link>
                                        </div>
                                        <input type="password" className="form-control bg-light" id="password" placeholder="••••••••" />
                                    </div>
                                    <div className="d-grid mb-4">
                                        <Button type="button" variant="primary" className="py-2 fw-bold text-dark">
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
