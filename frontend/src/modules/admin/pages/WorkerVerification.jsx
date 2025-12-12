import React from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const WorkerVerification = () => {
    const pendingWorkers = [
        { id: 1, name: 'Diana Prince', email: 'diana@worker.com', profession: 'Graphic Designer', submittedDate: 'Oct 26, 2023', documents: ['ID Proof.pdf', 'Certificate.jpg'] },
        { id: 2, name: 'Bruce Wayne', email: 'bruce@worker.com', profession: 'Security Consultant', submittedDate: 'Oct 25, 2023', documents: ['Passport.pdf'] },
    ];

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Worker Verification</h2>

            <div className="row g-4">
                {pendingWorkers.map(worker => (
                    <div className="col-lg-6" key={worker.id}>
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-start mb-3">
                                    <img src={avatar} className="rounded-circle me-3" alt="" style={{ width: '64px', height: '64px' }} />
                                    <div>
                                        <h5 className="fw-bold mb-1">{worker.name}</h5>
                                        <p className="text-muted mb-1">{worker.profession}</p>
                                        <small className="text-muted"><i className="bi bi-envelope me-1"></i> {worker.email}</small>
                                    </div>
                                    <span className="badge bg-warning text-dark ms-auto">Pending</span>
                                </div>

                                <hr />

                                <h6 className="fw-bold mb-3">Submitted Documents</h6>
                                <div className="mb-4">
                                    {worker.documents.map((doc, index) => (
                                        <div key={index} className="d-flex align-items-center mb-2 p-2 border rounded bg-light">
                                            <i className="bi bi-file-earmark-text me-3 fs-5 text-primary"></i>
                                            <span className="flex-grow-1">{doc}</span>
                                            <button className="btn btn-sm btn-link">View</button>
                                        </div>
                                    ))}
                                </div>

                                <div className="d-flex gap-2">
                                    <Button variant="success" className="flex-grow-1"><i className="bi bi-check-lg me-2"></i>Approve</Button>
                                    <Button variant="outline-danger" className="flex-grow-1"><i className="bi bi-x-lg me-2"></i>Reject</Button>
                                </div>
                            </div>
                            <div className="card-footer bg-white text-muted small py-2">
                                Submitted on: {worker.submittedDate}
                            </div>
                        </div>
                    </div>
                ))}

                {pendingWorkers.length === 0 && (
                    <div className="col-12 text-center py-5">
                        <div className="text-muted mb-3"><i className="bi bi-check-circle fs-1"></i></div>
                        <h5>All Caught Up!</h5>
                        <p className="text-muted">No pending worker verifications.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkerVerification;
