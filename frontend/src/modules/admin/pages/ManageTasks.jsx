import React, { useState } from 'react';
import Button from '../../../components/Button';

const ManageTasks = () => {
    const tasks = [
        { id: 101, title: 'Fix Leaking Tap', postedBy: 'Rajesh Kumar', budget: '₹200', status: 'In Progress', date: 'Oct 26, 2023' },
        { id: 102, title: 'Sofa Set Cleaning', postedBy: 'Amit Sharma', budget: '₹500', status: 'Open', date: 'Oct 25, 2023' },
        { id: 103, title: 'Kitchen Platform Repair', postedBy: 'Neha Gupta', budget: '₹1200', status: 'Completed', date: 'Oct 24, 2023' },
        { id: 104, title: 'Fan Installation', postedBy: 'Vikram Singh', budget: '₹300', status: 'Flagged', date: 'Oct 23, 2023' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.id.toString().includes(searchTerm);
        const matchesStatus = filterStatus === 'All' || task.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Task Management</h2>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search tasks by title or ID..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="All">All Status</option>
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Flagged">Flagged</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">Task ID</th>
                                    <th>Title</th>
                                    <th>Posted By</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTasks.map(task => (
                                    <tr key={task.id}>
                                        <td className="ps-4 text-muted">#{task.id}</td>
                                        <td className="fw-semibold">{task.title}</td>
                                        <td>{task.postedBy}</td>
                                        <td className="text-success fw-bold">{task.budget}</td>
                                        <td>
                                            <span className={`badge rounded-pill ${task.status === 'Open' ? 'bg-success' :
                                                task.status === 'In Progress' ? 'bg-primary' :
                                                    task.status === 'Completed' ? 'bg-success' :
                                                        'bg-danger'
                                                }`}>
                                                {task.status}
                                            </span>
                                        </td>
                                        <td>{task.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTasks;
