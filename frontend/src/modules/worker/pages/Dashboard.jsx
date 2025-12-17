import React from 'react';
import StatCard from '../../../components/StatCard';
import Button from '../../../components/Button';

const Dashboard = () => {
    const stats = [
        { title: 'Total Earnings', value: '₹1,250', icon: 'bi bi-cash-stack', color: 'success' },
        { title: 'Jobs Completed', value: '18', icon: 'bi bi-check-circle-fill', color: 'primary' },
        { title: 'Active Bids', value: '5', icon: 'bi bi-hourglass-split', color: 'warning' },
        { title: 'Rating', value: '4.8', icon: 'bi bi-star-fill', color: 'info' },
    ];

    const recentJobs = [
        { id: 1, title: 'Logo Design', client: 'TechCorp Inc.', date: 'Oct 25, 2023', amount: '₹200', status: 'Completed' },
        { id: 2, title: 'React Frontend Fix', client: 'StartUp Hub', date: 'Oct 28, 2023', amount: '₹150', status: 'In Progress' },
    ];

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Worker Dashboard</h2>

            {/* Stats Row */}
            <div className="row g-4 mb-4">
                {stats.map((stat, index) => (
                    <div className="col-md-6 col-xl-3" key={index}>
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>

            <div className="row g-4">
                {/* Recent Jobs */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-2 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold mb-0">Recent Jobs</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Job Title</th>
                                            <th>Client</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentJobs.map(job => (
                                            <tr key={job.id}>
                                                <td className="fw-semibold">{job.title}</td>
                                                <td>{job.client}</td>
                                                <td>{job.date}</td>
                                                <td className="fw-bold text-success">{job.amount}</td>
                                                <td>
                                                    <span className={`badge ${job.status === 'Completed' ? 'bg-success' : 'bg-primary'}`}>
                                                        {job.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Suggested Tasks / Quick Actions */}

            </div>
        </div>
    );
};

export default Dashboard;
