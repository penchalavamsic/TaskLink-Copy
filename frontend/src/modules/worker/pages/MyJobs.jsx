import React from 'react';
import Button from '../../../components/Button';

const MyJobs = () => {
    const [jobs, setJobs] = React.useState([]);

    React.useEffect(() => {
        const fetchJobs = async () => {
            const userStr = sessionStorage.getItem('user');
            if (!userStr) return;
            const user = JSON.parse(userStr);

            try {
                const response = await fetch(`http://localhost:8080/api/tasks/worker/${user.userId}`);
                if (response.ok) {
                    const data = await response.json();

                    const formattedJobs = data.map(job => ({
                        id: job.id,
                        title: job.title,
                        client: job.clientName || 'Unknown Client',
                        amount: `₹${job.budget}`,
                        deadline: job.deadline ? new Date(job.deadline).toLocaleDateString() : 'No Deadline',
                        status: job.status === 'IN_PROGRESS' ? 'In Progress' : job.status,
                        description: job.description
                    }));
                    setJobs(formattedJobs);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

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
