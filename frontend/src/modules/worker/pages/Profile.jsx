import React from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const WorkerProfile = () => {
    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">My Profile</h2>

            <div className="row g-4">
                {/* Profile Card */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm text-center p-4 h-100">
                        <div className="mb-4">
                            <img src={avatar} className="rounded-circle img-thumbnail" alt="Profile" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <h4 className="fw-bold mb-1">Alex Worker</h4>
                        <p className="text-muted mb-2">Frontend Developer</p>
                        <div className="d-flex justify-content-center gap-2 mb-4">
                            <span className="badge bg-light text-dark border">React</span>
                            <span className="badge bg-light text-dark border">Node.js</span>
                            <span className="badge bg-light text-dark border">UI/UX</span>
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary">Edit Profile</Button>
                            <Button variant="outline-secondary">Upload Resume</Button>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white pt-4 pb-2 border-bottom-0">
                            <h5 className="fw-bold mb-0">About Me</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">
                                Experienced Frontend Developer with a passion for creating responsive and intuitive user interfaces.
                                Proficient in React, JavaScript, and modern CSS frameworks. I deliver high-quality code and
                                pay attention to detail.
                            </p>

                            <h5 className="fw-bold mt-4 mb-3">Stats</h5>
                            <div className="row g-3">
                                <div className="col-sm-4">
                                    <div className="p-3 bg-light rounded text-center">
                                        <h3 className="fw-bold mb-0 text-primary">98%</h3>
                                        <small className="text-muted">JSS</small>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="p-3 bg-light rounded text-center">
                                        <h3 className="fw-bold mb-0 text-success">24</h3>
                                        <small className="text-muted">Jobs Done</small>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="p-3 bg-light rounded text-center">
                                        <h3 className="fw-bold mb-0 text-warning">450</h3>
                                        <small className="text-muted">Hours</small>
                                    </div>
                                </div>
                            </div>

                            <h5 className="fw-bold mt-4 mb-3">Portfolio</h5>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="border rounded p-3 h-100">
                                        <h6 className="fw-bold">E-commerce App</h6>
                                        <small className="text-muted">Built a full-stack e-commerce platform.</small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border rounded p-3 h-100">
                                        <h6 className="fw-bold">Corporate Website</h6>
                                        <small className="text-muted">Redesigned corporate site for better SEO.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerProfile;
