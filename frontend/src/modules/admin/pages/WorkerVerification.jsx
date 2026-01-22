import React, { useState } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const WorkerVerification = () => {
    /*
    const [pendingWorkers, setPendingWorkers] = useState([
        { id: 1, name: 'Sunita Rao', email: 'sunita@worker.com', profession: 'Housemaid', submittedDate: 'Oct 26, 2023', documents: ['Aadhar Card.pdf', 'Police Verification.jpg'] },
        { id: 2, name: 'Ismail Khan', email: 'ismail@worker.com', profession: 'AC Technician', submittedDate: 'Oct 25, 2023', documents: ['Skill Certificate.pdf', 'Voter ID.jpg'] },
    ]);

    const handleApprove = (id) => {
        setPendingWorkers(pendingWorkers.filter(w => w.id !== id));
        // api call logic would go here
    };

    const handleReject = (id) => {
        setPendingWorkers(pendingWorkers.filter(w => w.id !== id));
        // api call logic would go here
    };
    */

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Worker Verification</h2>

            <div className="card shadow-sm border-0">
                <div className="card-body text-center py-5">
                    <i className="bi bi-cone-striped display-1 text-muted mb-3"></i>
                    <h4 className="text-muted">Functionality to be updated later</h4>
                    <p className="text-secondary">We are currently working on this module.</p>
                </div>
            </div>

            {/* Original UI commented out
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
                                </div>

                                <div className="d-flex gap-2">
                                    <Button variant="success" className="flex-grow-1" onClick={() => handleApprove(worker.id)}><i className="bi bi-check-lg me-2"></i>Approve</Button>
                                    <Button variant="outline-danger" className="flex-grow-1" onClick={() => handleReject(worker.id)}><i className="bi bi-x-lg me-2"></i>Reject</Button>
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
            */}
        </div>
    );
};

export default WorkerVerification;
