import React from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const AdminProfile = () => {
    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Admin Profile</h2>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm text-center p-5 mb-4">
                        <div className="mb-4">
                            <img src={avatar} className="rounded-circle img-thumbnail" alt="Admin Profile" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <h3 className="fw-bold mb-1">System Administrator</h3>
                        <p className="text-muted mb-4">Super User</p>

                        <div className="row text-start justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label fw-bold text-muted">Email</label>
                                    <div className="col-sm-8">
                                        <input type="text" readOnly className="form-control-plaintext text-dark fw-semibold" value="admin@tasklink.com" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label fw-bold text-muted">Role</label>
                                    <div className="col-sm-8">
                                        <input type="text" readOnly className="form-control-plaintext text-dark fw-semibold" value="Administrator" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label fw-bold text-muted">Access Level</label>
                                    <div className="col-sm-8">
                                        <input type="text" readOnly className="form-control-plaintext text-dark fw-semibold" value="Full System Access" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label fw-bold text-muted">Last Login</label>
                                    <div className="col-sm-8">
                                        <input type="text" readOnly className="form-control-plaintext text-dark fw-semibold" value="Just Now" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 d-flex justify-content-center gap-3">
                            <Button variant="outline-primary"><i className="bi bi-pencil me-2"></i>Edit Details</Button>
                            <Button variant="outline-danger"><i className="bi bi-key me-2"></i>Change Password</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
