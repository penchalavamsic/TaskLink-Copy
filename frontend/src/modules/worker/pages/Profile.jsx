import React, { useState } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const WorkerProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Raju Mistri',
        title: 'Professional Plumber',
        bio: 'Expert plumber with over 8 years of experience in residential and commercial plumbing. I specialize in leak repairs, pipe fitting, and bathroom installations. Efficient, reliable, and available for emergency calls.',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSave = () => {
        setIsEditing(false);
        // Save logic to backend would go here
    };
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
                        <h4 className="fw-bold mb-1">{profileData.name}</h4>
                        <p className="text-muted mb-2">{profileData.title}</p>
                        <div className="d-flex justify-content-center gap-2 mb-4">
                            <span className="badge bg-light text-dark border">Pipe Fitting</span>
                            <span className="badge bg-light text-dark border">Leak Repair</span>
                            <span className="badge bg-light text-dark border">Installation</span>
                        </div>
                        <div className="d-grid gap-2">
                            {isEditing ? (
                                <Button variant="success" onClick={handleSave}>Save Profile</Button>
                            ) : (
                                <Button variant="outline-primary" onClick={() => setIsEditing(true)}>Edit Profile</Button>
                            )}
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
                            {isEditing ? (
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control mb-2" name="name" value={profileData.name} onChange={handleInputChange} />

                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control mb-2" name="title" value={profileData.title} onChange={handleInputChange} />

                                    <label className="form-label">Bio</label>
                                    <textarea className="form-control" rows="4" name="bio" value={profileData.bio} onChange={handleInputChange}></textarea>
                                </div>
                            ) : (
                                <p className="text-muted">
                                    {profileData.bio}
                                </p>
                            )}

                            <h5 className="fw-bold mt-4 mb-3">Stats</h5>
                            <div className="row g-3">
                                <div className="col-sm-4">
                                    <div className="p-3 bg-light rounded text-center">
                                        <h3 className="fw-bold mb-0 text-primary">4.8</h3>
                                        <small className="text-muted">Rating</small>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="p-3 bg-light rounded text-center">
                                        <h3 className="fw-bold mb-0 text-success">154</h3>
                                        <small className="text-muted">Jobs Done</small>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="p-3 bg-light rounded text-center">
                                        <h3 className="fw-bold mb-0 text-warning">8</h3>
                                        <small className="text-muted">Years Exp</small>
                                    </div>
                                </div>
                            </div>

                            <h5 className="fw-bold mt-4 mb-3">Portfolio</h5>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="border rounded p-3 h-100">
                                        <h6 className="fw-bold">Bathroom Renovation</h6>
                                        <small className="text-muted">Complete plumbing setup for a 3BHK flat in Mumbai.</small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border rounded p-3 h-100">
                                        <h6 className="fw-bold">Water Tank Installation</h6>
                                        <small className="text-muted">Installed 1000L overhead tanks for a housing society.</small>
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
