import React, { useState, useEffect } from 'react';
import StatCard from '../../../components/StatCard';

const Dashboard = () => {
    // State for dynamic data
    const [stats, setStats] = useState([
        { title: 'Total Users', value: '0', icon: 'bi bi-people', color: 'primary' },
        { title: 'Total Workers', value: '0', icon: 'bi bi-person-badge', color: 'success' },
        { title: 'Active Tasks', value: '0', icon: 'bi bi-list-task', color: 'info' },
    ]);
    const [recentUsers, setRecentUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                console.log("Fetching dashboard stats...");
                const response = await fetch('http://localhost:8080/api/admin/dashboard-stats');
                console.log("Response status:", response.status);

                if (response.ok) {
                    const data = await response.json();
                    console.log("Dashboard data:", data);
                    setStats([
                        { title: 'Total Users', value: data.totalUsers !== undefined ? data.totalUsers.toString() : '0', icon: 'bi bi-people', color: 'primary' },
                        { title: 'Total Workers', value: data.totalWorkers !== undefined ? data.totalWorkers.toString() : '0', icon: 'bi bi-person-badge', color: 'success' },
                        { title: 'Active Tasks', value: data.activeTasks !== undefined ? data.activeTasks.toString() : '0', icon: 'bi bi-list-task', color: 'info' },
                    ]);
                } else {
                    console.error("Failed to fetch dashboard stats");
                }

                // Fetch Recent Registrations
                console.log("Fetching recent registrations...");
                const userResponse = await fetch('http://localhost:8080/api/admin/recent-registrations');
                if (userResponse.ok) {
                    const users = await userResponse.json();
                    console.log("Recent users:", users);
                    setRecentUsers(users.map(u => ({
                        id: u.id,
                        name: u.firstName + ' ' + u.lastName,
                        role: u.role === 'CLIENT' ? 'User' : (u.role === 'WORKER' ? 'Worker' : 'Admin'),
                        date: u.joinedAt ? new Date(u.joinedAt).toLocaleDateString() : 'N/A',
                        status: 'Active' // Defaulting to Active as we don't have status in User model yet
                    })));
                } else {
                    console.error("Failed to fetch recent registrations");
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

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
                                        {recentUsers.length > 0 ? (
                                            recentUsers.map(user => (
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
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center py-4 text-muted">
                                                    No recent registrations found
                                                </td>
                                            </tr>
                                        )}
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
