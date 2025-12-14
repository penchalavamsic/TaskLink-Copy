import React from 'react';
import Button from '../../../components/Button';

const MyJobs = () => {
    const jobs = [
        { id: 1, title: 'Mobile App Icon', client: 'AppStudio', amount: '$50', deadline: 'Oct 30, 2023', status: 'In Progress', progress: 60 },
        { id: 2, title: 'Blog Content Writing', client: 'MediaHouse', amount: '$30', deadline: 'Oct 22, 2023', status: 'Completed', progress: 100 },
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
                                    <div className="d-flex justify-content-between text-muted small mb-1">
                                        <span>Progress</span>
                                        <span>{job.progress}%</span>
                                    </div>
                                    <div className="progress" style={{ height: '8px' }}>
                                        <div
                                            className={`progress-bar ${job.status === 'Completed' ? 'bg-success' : 'bg-primary'}`}
                                            role="progressbar"
                                            style={{ width: `${job.progress}%` }}
                                            aria-valuenow={job.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
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
                                <div className="mt-4 pt-3 border-top text-end">
                                    <Button variant="primary" size="sm">Open Workroom</Button>
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
