import React from 'react';
import StatCard from '../../../components/StatCard';
import TaskCard from '../../../components/TaskCard';
import QuickActions from '../../../components/QuickActions';

const Dashboard = () => {
    // Mock data
    const stats = [
        { title: 'Total Tasks', value: '12', icon: 'bi bi-hdd-stack', color: 'primary' },
        { title: 'In Progress', value: '4', icon: 'bi bi-hourglass-split', color: 'warning' },
        { title: 'Completed', value: '8', icon: 'bi bi-check-circle', color: 'success' },
        { title: 'Spent', value: '$450', icon: 'bi bi-wallet2', color: 'info' },
    ];

    const recentTasks = [
        { id: 1, title: 'Fix Website CSS', description: 'Fix spacing issues on homepage.', status: 'In Progress', budget: '$50', date: 'Oct 24, 2023' },
        { id: 2, title: 'Logo Design', description: 'Create a minimal logo for new brand.', status: 'Completed', budget: '$100', date: 'Oct 20, 2023' },
    ];

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Dashboard</h2>

            {/* Stats Row */}
            <div className="row g-4 mb-4">
                {stats.map((stat, index) => (
                    <div className="col-md-6 col-xl-3" key={index}>
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>

            <div className="row g-4">
                {/* Recent Tasks */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-2 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold mb-0">Recent Tasks</h5>
                            <a href="/user/my-tasks" className="text-decoration-none text-primary fw-semibold">View All</a>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                {recentTasks.map(task => (
                                    <div className="col-12" key={task.id}>
                                        <div className="border rounded p-3 d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-1 fw-bold">{task.title}</h6>
                                                <small className="text-muted">{task.date}</small>
                                            </div>
                                            <div className="text-end">
                                                <span className={`badge ${task.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'} mb-1`}>{task.status}</span>
                                                <div className="fw-bold">{task.budget}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="col-lg-4">
                    <QuickActions />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
