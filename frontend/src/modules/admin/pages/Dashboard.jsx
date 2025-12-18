import React from 'react';
import StatCard from '../../../components/StatCard';

const Dashboard = () => {
    // Mock data for Admin Stats
    const stats = [
        { title: 'Total Users', value: '1,250', icon: 'bi bi-people', color: 'primary' },
        { title: 'Total Workers', value: '850', icon: 'bi bi-person-badge', color: 'success' },
        { title: 'Active Tasks', value: '320', icon: 'bi bi-list-task', color: 'info' },
    ];

    const recentUsers = [
        { id: 1, name: 'Rajesh Kumar', role: 'User', date: 'Oct 26, 2023', status: 'Active' },
        { id: 2, name: 'Suresh Reddy', role: 'Worker', date: 'Oct 26, 2023', status: 'Pending' },
        { id: 3, name: 'Amit Sharma', role: 'User', date: 'Oct 25, 2023', status: 'Active' },
        { id: 4, name: 'Priya Patel', role: 'Worker', date: 'Oct 24, 2023', status: 'Active' },
    ];

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Admin Dashboard</h2>

            {/* Stats Row */}
            <div className="row g-4 mb-4">
                {stats.map((stat, index) => (
                    <div className="col-md-6 col-xl-3" key={index}>
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>

            <div className="row g-4">
                {/* Recent Registrations */}
                <div className="col-12">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-2">
                            <h5 className="fw-bold mb-0">Recent Registrations</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Date Joined</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentUsers.map(user => (
                                            <tr key={user.id}>
                                                <td className="fw-semibold">{user.name}</td>
                                                <td>{user.role}</td>
                                                <td>{user.date}</td>
                                                <td>
                                                    <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                                        {user.status}
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
            </div>
        </div>
    );
};

export default Dashboard;
