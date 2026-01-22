import React, { useState } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const WorkerProfile = () => {
    // State for profile data including User fields and Worker fields
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        professionTitle: '',
        bio: '',
        stats: { rating: 0, jobsDone: 0, exp: 0 }
    });

    React.useEffect(() => {
        const fetchProfile = async () => {
            const userStr = sessionStorage.getItem('user');
            if (!userStr) return;
            const user = JSON.parse(userStr);

            try {
                // Fetch Profile
                const profileRes = await fetch(`http://localhost:8080/api/worker/${user.userId}/profile`);
                let profile = {};
                if (profileRes.ok) {
                    profile = await profileRes.json();
                }

                // Fetch Stats
                const statsRes = await fetch(`http://localhost:8080/api/worker/${user.userId}/dashboard-stats`);
                let stats = { rating: 0, jobsCompleted: 0 };
                if (statsRes.ok) {
                    stats = await statsRes.json();
                }

                // Populate state
                setProfileData({
                    firstName: profile.user?.firstName || user.firstName || '',
                    lastName: profile.user?.lastName || user.lastName || '',
                    email: profile.user?.email || user.email || '',
                    phone: profile.user?.phone || '',
                    address: profile.user?.address || '',
                    professionTitle: profile.professionTitle || 'Worker',
                    bio: profile.bio || '',
                    stats: {
                        rating: stats.rating || 0.0,
                        jobsDone: stats.jobsCompleted || 0,
                        exp: 1
                    }
                });
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };
        fetchProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const userStr = sessionStorage.getItem('user');
        if (!userStr) return;
        const user = JSON.parse(userStr);

        // Construct payload: Worker object with nested User object
        const payload = {
            professionTitle: profileData.professionTitle,
            bio: profileData.bio, // Worker Bio
            user: {
                firstName: profileData.firstName,
                lastName: profileData.lastName,
                phone: profileData.phone,
                address: profileData.address,
                bio: profileData.bio // User Bio (Syncing both)
            }
        };

        console.log("Saving Worker Profile Payload:", payload);

        try {
            const response = await fetch(`http://localhost:8080/api/worker/${user.userId}/profile`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Profile Updated Successfully!");
            } else {
                const errorText = await response.text();
                alert(`Failed to update profile: ${errorText}`);
            }
        } catch (error) {
            console.error("Save error:", error);
            alert("Error saving profile: " + error.message);
        }
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
                        <h4 className="fw-bold mb-1">{profileData.firstName} {profileData.lastName}</h4>
                        <p className="text-muted mb-2">{profileData.professionTitle}</p>

                        <div className="d-flex justify-content-center gap-2 mb-4">
                            {/* <span className="badge bg-light text-dark border">Pipe Fitting</span> */}
                        </div>

                        <div className="d-flex justify-content-around text-start">
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">{profileData.stats.jobsDone}</h5>
                                <small className="text-muted">Jobs</small>
                            </div>
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">{profileData.stats.rating.toFixed(1)}</h5>
                                <small className="text-muted">Rating</small>
                            </div>
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">{profileData.stats.exp}</h5>
                                <small className="text-muted">Yrs Exp</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Settings Form */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white pt-4 pb-2 border-bottom-0">
                            <h5 className="fw-bold mb-0">Personal Information</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSave}>
                                {/* User Details (Editable) */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstName"
                                            value={profileData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastName"
                                            value={profileData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input
                                            type="email"
                                            className="form-control bg-light"
                                            value={profileData.email}
                                            disabled
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={profileData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        value={profileData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <hr className="my-4" />
                                <h5 className="fw-bold mb-3">Professional Details</h5>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Profession Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g. Plumber, Electrician"
                                        name="professionTitle"
                                        value={profileData.professionTitle}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Bio</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Describe your skills and experience..."
                                        name="bio"
                                        value={profileData.bio}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>

                                <div className="text-end">
                                    <Button variant="primary" type="submit">Save Professional Details</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerProfile;
