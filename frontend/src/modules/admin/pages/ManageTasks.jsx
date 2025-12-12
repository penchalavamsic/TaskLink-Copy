import React from 'react';
import Button from '../../../components/Button';

const ManageTasks = () => {
    const tasks = [
        { id: 101, title: 'Fix Bug in React App', postedBy: 'Alice Johnson', budget: '$50', status: 'In Progress', date: 'Oct 26, 2023' },
        { id: 102, title: 'Logo Design for Startup', postedBy: 'Mark Zuckerberg', budget: '$200', status: 'Open', date: 'Oct 25, 2023' },
        { id: 103, title: 'Write Blog Post on AI', postedBy: 'Elon Musk', budget: '$100', status: 'Completed', date: 'Oct 24, 2023' },
        { id: 104, title: 'Python Script for Scraping', postedBy: 'Jeff Bezos', budget: '$150', status: 'Flagged', date: 'Oct 23, 2023' },
    ];

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Task Management</h2>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Search tasks by title or ID..." />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Status</option>
                                <option>Open</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                                <option>Flagged</option>
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map(task => (
                                    <tr key={task.id}>
                                        <td className="ps-4 text-muted">#{task.id}</td>
                                        <td className="fw-semibold">{task.title}</td>
                                        <td>{task.postedBy}</td>
                                        <td className="text-success fw-bold">{task.budget}</td>
                                        <td>
                                            <span className={`badge rounded-pill ${task.status === 'Open' ? 'bg-success' :
                                                    task.status === 'In Progress' ? 'bg-warning text-dark' :
                                                        task.status === 'Completed' ? 'bg-primary' :
                                                            'bg-danger'
                                                }`}>
                                                {task.status}
                                            </span>
                                        </td>
                                        <td>{task.date}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-sm btn-light border" type="button" data-bs-toggle="dropdown">
                                                    <i className="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">View Details</a></li>
                                                    <li><a className="dropdown-item text-danger" href="#">Delete Task</a></li>
                                                </ul>
                                            </div>
                                        </td>
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
