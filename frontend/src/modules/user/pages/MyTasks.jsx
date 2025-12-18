import React from 'react';
import TaskCard from '../../../components/TaskCard';

const MyTasks = () => {
    // Mock data
    const tasks = [
        { id: 1, title: 'Fix Leaking Kitchen Tap', description: 'Repair the dripping faucet in the main kitchen sink.', status: 'In Progress', budget: '₹450', date: 'Oct 24, 2023' },
        { id: 2, title: 'Paint 2BHK Apartment', description: 'Whitewash and paint walls for the entire apartment.', status: 'Completed', budget: '₹12000', date: 'Oct 20, 2023' },
        { id: 3, title: 'Install Ceiling Fan', description: 'Installation of a new high-speed fan in the master bedroom.', status: 'Open', budget: '₹300', date: 'Oct 25, 2023' },
        { id: 4, title: 'Assemble Wardrobe', description: 'Assembling a 3-door wooden wardrobe from a flat pack.', status: 'Open', budget: '₹850', date: 'Oct 26, 2023' },
        { id: 5, title: 'Deep Clean 3 Bathrooms', description: 'Deep cleaning and sanitization of three attached bathrooms.', status: 'Completed', budget: '₹1500', date: 'Oct 15, 2023' },
        { id: 6, title: 'Repair Window Frame', description: 'Fixing the broken hinge and lock on the balcony window.', status: 'In Progress', budget: '₹600', date: 'Oct 23, 2023' },
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
