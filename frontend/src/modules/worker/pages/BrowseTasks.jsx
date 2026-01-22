import React, { useState } from 'react';
import TaskCard from '../../../components/TaskCard';

const BrowseTasks = () => {
    // Mock data
    const [tasks, setTasks] = useState([]);

    React.useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/tasks/all');
                if (response.ok) {
                    const data = await response.json();

                    // Transform backend data to frontend model
                    const formattedTasks = data
                        .filter(t => t.status === 'OPEN') // Only show open tasks
                        .map(t => ({
                            id: t.id,
                            title: t.title,
                            description: t.description,
                            status: t.status,
                            budget: `₹${t.budget}`,
                            date: t.createdAt ? new Date(t.createdAt).toLocaleDateString() : 'N/A',
                            category: t.category || 'General', // Use category mapped from backend
                            clientName: t.clientName || 'Unknown Client',
                            clientAddress: t.clientAddress || 'Not Provided',
                            clientPhone: t.clientPhone || 'Not Provided'
                        }));
                    setTasks(formattedTasks);
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchTasks();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All Categories' || task.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleAcceptTask = async (taskId) => {
        if (!window.confirm("Are you sure you want to accept this task?")) return;

        const userStr = sessionStorage.getItem('user');
        if (!userStr) {
            alert("Please login to acceptance task.");
            return;
        }
        const user = JSON.parse(userStr);

        try {
            const response = await fetch(`http://localhost:8080/api/tasks/${taskId}/accept/${user.userId}`, {
                method: 'POST'
            });

            if (response.ok) {
                alert("Task accepted successfully!");
                // Remove task from list
                setTasks(tasks.filter(t => t.id !== taskId));
            } else {
                alert("Failed to accept task.");
            }
        } catch (error) {
            console.error("Error accepting task:", error);
            alert("Error accepting task.");
        }
    };

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">Browse Tasks</h2>
                <div className="d-flex gap-2">
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Search tasks..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="form-select w-auto pe-5" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option>All Categories</option>
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Carpentry</option>
                        <option>Painting</option>
                        <option>Cleaning</option>
                        <option>Repair</option>
                    </select>
                </div>
            </div>

            <div className="row g-4">
                {filteredTasks.map(task => (
                    <div className="col-md-6 col-lg-4 col-xl-4" key={task.id}>
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-success bg-opacity-10 text-success px-3">{task.category}</span>
                                    <small className="text-muted">{task.date}</small>
                                </div>
                                <h5 className="card-title fw-bold">{task.title}</h5>
                                <p className="card-text text-muted small mb-3">{task.description}</p>

                                <div className="border-top pt-3 mt-3">
                                    <h6 className="fw-bold small text-uppercase text-muted mb-2">Client Details</h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-person-fill text-primary me-2"></i>
                                        <span className="small fw-semibold">{task.clientName}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                        <span className="small">{task.clientAddress}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-telephone-fill text-success me-2"></i>
                                        <span className="small">{task.clientPhone}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-white border-top-0 pt-0 pb-3">
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <span className="fw-bold text-primary fs-5">{task.budget}</span>
                                    <button
                                        className="btn btn-outline-primary btn-sm rounded-pill px-4"
                                        onClick={() => handleAcceptTask(task.id)}
                                    >
                                        Accept
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default BrowseTasks;
