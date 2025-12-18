import React from 'react';
import Button from '../../../components/Button';

const MyJobs = () => {
    const jobs = [
        { id: 1, title: 'Bathroom Tile Installation', client: 'Rohan Das', amount: '₹2500', deadline: 'Oct 30, 2023', status: 'In Progress', description: 'Install anti-skid tiles in two bathrooms. Materials provided.' },
        { id: 2, title: 'Garden Cleaning', client: 'Meera Iyer', amount: '₹800', deadline: 'Oct 22, 2023', status: 'Completed', description: 'Clear weeds and trim hedges for the front and backyard garden.' },
        { id: 3, title: 'Switchboard Replacement', client: 'Arjun Nair', amount: '₹400', deadline: 'Oct 28, 2023', status: 'In Progress', description: 'Replace 4 old electrical switchboards in the living room.' },
    ];

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">My Jobs</h2>

            <div className="row g-4">
                {jobs.map(job => (
                    <div className="col-md-6" key={job.id}>
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 className="fw-bold mb-1">{job.title}</h5>
                                        <small className="text-muted">Client: {job.client}</small>
                                    </div>
                                    <span className={`badge ${job.status === 'Completed' ? 'bg-success' : 'bg-primary'}`}>
                                        {job.status}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <p className="text-muted small">
                                        {job.description}
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div>
                                        <small className="text-muted d-block">Deadline</small>
                                        <span className="fw-semibold">{job.deadline}</span>
                                    </div>
                                    <div className="text-end">
                                        <small className="text-muted d-block">Budget</small>
                                        <span className="fw-bold text-success fs-5">{job.amount}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyJobs;
