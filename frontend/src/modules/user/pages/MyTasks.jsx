import React, { useState, useEffect } from 'react';
import TaskCard from '../../../components/TaskCard';

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            const userStr = localStorage.getItem('user');
            if (!userStr) {
                setLoading(false);
                return;
            }
            const user = JSON.parse(userStr);

            try {
                const response = await fetch(`http://localhost:8080/api/tasks/user/${user.userId}`);
                if (response.ok) {
                    const data = await response.json();
                    // Transform data if necessary to match TaskCard expectation
                    // TaskCard expects: { id, title, description, status, budget, date }
                    // Backend returns: { id, title, description, status, budget, deadline, ... }
                    const formattedTasks = data.map(task => ({
                        id: task.id,
                        title: task.title,
                        description: task.description,
                        status: task.status, // Assuming backend enum string like 'OPEN', 'IN_PROGRESS' matches or needs CSS adjustment
                        budget: `₹${task.budget}`,
                        date: new Date(task.deadline).toLocaleDateString()
                    }));
                    setTasks(formattedTasks);
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">My Tasks</h2>
                {/* <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-funnel me-2"></i>Filter
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="filterDropdown">
                         <li><a className="dropdown-item" href="#">All</a></li>
                        <li><a className="dropdown-item" href="#">Open</a></li>
                        <li><a className="dropdown-item" href="#">In Progress</a></li>
                        <li><a className="dropdown-item" href="#">Completed</a></li> 
                    </ul>
                </div> */}
            </div>

            <div className="row g-4">
                {loading ? (
                    <div className="col-12 text-center">Loading tasks...</div>
                ) : tasks.length > 0 ? (
                    tasks.map(task => (
                        <div className="col-md-6 col-lg-4 col-xl-4" key={task.id}>
                            <TaskCard task={task} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <i className="bi bi-clipboard-x display-1 text-muted mb-3 d-block"></i>
                        <h4 className="text-muted">No Tasks Added</h4>
                        <p className="text-muted">Post a task to get started!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTasks;
