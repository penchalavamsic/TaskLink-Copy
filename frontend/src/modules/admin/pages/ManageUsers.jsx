import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const ManageUsers = () => {
    // State for dynamic data
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/admin/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data.map(u => ({
                        id: u.id,
                        name: u.firstName + ' ' + u.lastName,
                        email: u.email,
                        role: u.role === 'CLIENT' ? 'User' : (u.role === 'WORKER' ? 'Worker' : 'Admin'),
                        status: 'Active' // Placeholder status
                    })));
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await fetch(`http://localhost:8080/api/admin/users/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setUsers(users.filter(user => user.id !== id));
                    alert("User deleted successfully");
                } else {
                    alert("Failed to delete user");
                }
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Error deleting user");
            }
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
                                {loading ? (
                                    <tr>
                                        <td colSpan="3" className="text-center py-4">Loading users...</td>
                                    </tr>
                                ) : users.length > 0 ? (
                                    users.filter(user => {
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
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center py-5 text-muted">
                                            No users found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageUsers;
