import React from 'react';
import Button from '../../../components/Button';

const MyJobs = () => {
    const jobs = [

        { id: 1, title: 'Mobile App Icon', client: 'AppStudio', amount: '₹50', deadline: 'Oct 30, 2023', status: 'In Progress', description: 'Design a set of icons for a new mobile application following Material Design guidelines.' },
        { id: 2, title: 'Blog Content Writing', client: 'MediaHouse', amount: '₹30', deadline: 'Oct 22, 2023', status: 'Completed', description: 'Write a 1000-word blog post about the latest trends in AI technology.' },
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
