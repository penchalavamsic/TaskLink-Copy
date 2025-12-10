import React from 'react';
import TaskCard from '../../../components/TaskCard';

const MyTasks = () => {
    // Mock data
    const tasks = [
        { id: 1, title: 'Fix Website CSS', description: 'Fix spacing issues on homepage.', status: 'In Progress', budget: '$50', date: 'Oct 24, 2023' },
        { id: 2, title: 'Logo Design', description: 'Create a minimal logo for new brand.', status: 'Completed', budget: '$100', date: 'Oct 20, 2023' },
        { id: 3, title: 'React Component Library', description: 'Build reusable components.', status: 'Open', budget: '$200', date: 'Oct 25, 2023' },
        { id: 4, title: 'Database Migration', description: 'Migrate from SQL to NoSQL.', status: 'Open', budget: '$500', date: 'Oct 26, 2023' },
        { id: 5, title: 'API Integration', description: 'Integrate payment gateway.', status: 'Completed', budget: '$150', date: 'Oct 15, 2023' },
        { id: 6, title: 'SEO Optimization', description: 'Optimize landing page for search engines.', status: 'In Progress', budget: '$80', date: 'Oct 23, 2023' },
    ];

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
                {tasks.map(task => (
                    <div className="col-md-6 col-lg-4 col-xl-4" key={task.id}>
                        <TaskCard task={task} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTasks;
