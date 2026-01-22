import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('User');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Clear any existing session data first
                sessionStorage.removeItem('user');

                // Store user data in sessionStorage
                sessionStorage.setItem('user', JSON.stringify(data));

                // Force header update
                window.dispatchEvent(new Event('user-info-updated'));

                const userRole = data.role; // Backend role: "User", "Worker", "Admin"

                // Validate selected role matches backend role
                if (userRole !== selectedRole) {
                    alert(`Login failed: You are registered as ${userRole}, not ${selectedRole}.`);
                    return;
                }

                if (userRole === 'User') {
                    navigate('/user/dashboard');
                } else if (userRole === 'Worker') {
                    navigate('/worker/dashboard');
                } else if (userRole === 'Admin') {
                    navigate('/admin/dashboard');
                } else {
                    alert('Unknown role: ' + userRole);
                }
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
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
                                        <input
                                            type="email"
                                            className="form-control bg-light"
                                            id="email"
                                            placeholder="Enter email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <label htmlFor="password" className="form-label fw-semibold mb-0">Password</label>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control bg-light"
                                            id="password"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {/* Role Buttons */}
                                    <div className="row g-2 mb-4">
                                        {['User', 'Worker', 'Admin'].map((role) => (
                                            <div className="col-4" key={role}>
                                                <button
                                                    type="button"
                                                    className={`btn w-100 py-2 border ${selectedRole === role ? 'btn-primary text-dark fw-bold' : 'bg-white text-muted'}`}
                                                    onClick={() => setSelectedRole(role)}
                                                    style={{ fontSize: '0.9rem' }}
                                                >
                                                    {role}
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="d-grid mb-4">
                                        <Button type="submit" variant="primary" className="py-2 fw-bold text-dark">
                                            Login as {selectedRole}
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
