import React from 'react';
import StatCard from '../../../components/StatCard';
import Button from '../../../components/Button';

const Dashboard = () => {
    const [statsData, setStatsData] = React.useState({
        totalEarnings: 0,
        jobsCompleted: 0,
        activeBids: 0,
        rating: 0
    });
    const [recentJobs, setRecentJobs] = React.useState([]);

    React.useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const userStr = sessionStorage.getItem('user');
                if (!userStr) return;
                const user = JSON.parse(userStr);

                const response = await fetch(`http://localhost:8080/api/worker/${user.userId}/dashboard-stats`);
                if (response.ok) {
                    const data = await response.json();
                    setStatsData({
                        totalEarnings: data.totalEarnings,
                        jobsCompleted: data.jobsCompleted,
                        activeBids: data.activeBids,
                        rating: data.rating
                    });
                    setRecentJobs(data.recentJobs || []);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            }
        };

        fetchDashboardData();
    }, []);

    const stats = [
        { title: 'Total Earnings', value: `₹${statsData.totalEarnings}`, icon: 'bi bi-cash-stack', color: 'success' },
        { title: 'Jobs Completed', value: statsData.jobsCompleted.toString(), icon: 'bi bi-check-circle-fill', color: 'primary' },
        { title: 'Active Bids', value: statsData.activeBids.toString(), icon: 'bi bi-hourglass-split', color: 'warning' },
        { title: 'Rating', value: statsData.rating.toFixed(1), icon: 'bi bi-star-fill', color: 'info' },
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
                                                <td>{job.clientName || 'Client #' + job.clientId}</td>
                                                <td>{job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A'}</td>
                                                <td className="fw-bold text-success">₹{job.budget}</td>
                                                <td>
                                                    <span className={`badge ${job.status === 'COMPLETED' ? 'bg-success' : 'bg-primary'}`}>
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
