import React, { useState } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const ManageUsers = () => {
    // Mock Users Data
    const initialUsers = [
        { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', role: 'User', status: 'Active' },
        { id: 2, name: 'Suresh Reddy', email: 'suresh@worker.com', role: 'Worker', status: 'Active' },
        { id: 3, name: 'Amit Sharma', email: 'amit@example.com', role: 'User', status: 'Suspended' },
        { id: 4, name: 'Priya Patel', email: 'priya@worker.com', role: 'Worker', status: 'Pending' },
        { id: 5, name: 'Neha Gupta', email: 'neha@example.com', role: 'User', status: 'Active' },
    ];

    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(users.filter(user => user.id !== id));
        }
    };

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">User Management</h2>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text bg-light border-end-0"><i className="bi bi-search"></i></span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 bg-light"
                                    placeholder="Search users..."
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" onChange={(e) => setFilterRole(e.target.value)}>
                                <option value="All">All Roles</option>
                                <option value="User">User</option>
                                <option value="Worker">Worker</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Suspended">Suspended</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">User</th>
                                    <th>Role</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {users.filter(user => {
                                    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        user.email.toLowerCase().includes(searchTerm.toLowerCase());
                                    const matchesRole = filterRole === 'All' || user.role === filterRole;
                                    const matchesStatus = filterStatus === 'All' || user.status === filterStatus;
                                    return matchesSearch && matchesRole && matchesStatus;
                                }).map(user => (
                                    <tr key={user.id}>
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center">
                                                <img src={avatar} alt="" className="rounded-circle me-3" style={{ width: '40px', height: '40px' }} />
                                                <div>
                                                    <div className="fw-bold">{user.name}</div>
                                                    <div className="text-muted small">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.role}
                                        </td>
                                        <td>
                                            <span className={`badge ${user.status === 'Active' ? 'bg-primary' : user.status === 'Suspended' ? 'bg-danger' : 'bg-warning text-dark'}`}>
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
    );
};

export default ManageUsers;
