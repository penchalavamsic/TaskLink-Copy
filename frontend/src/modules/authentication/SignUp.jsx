import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const SignUp = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold mb-1">Create Account</h3>
                                    <p className="text-muted">Join TaskLink today</p>
                                </div>
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
                                            <input type="text" className="form-control bg-light" id="firstName" placeholder="John" />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
                                            <input type="text" className="form-control bg-light" id="lastName" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                        <input type="email" className="form-control bg-light" id="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="role" className="form-label fw-semibold">I am a...</label>
                                        <select className="form-select bg-light" id="role">
                                            <option value="user">User (I want to hire)</option>
                                            <option value="worker">Worker (I want to work)</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                        <input type="password" className="form-control bg-light" id="password" placeholder="••••••••" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                                        <input type="password" className="form-control bg-light" id="confirmPassword" placeholder="••••••••" />
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label text-muted small" htmlFor="flexCheckDefault">
                                            I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <div className="d-grid mb-4">
                                        <Button type="button" variant="primary" className="py-2 fw-bold text-dark">
                                            Sign Up
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
