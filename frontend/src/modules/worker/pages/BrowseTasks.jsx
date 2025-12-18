import React, { useState } from 'react';
import TaskCard from '../../../components/TaskCard';

const BrowseTasks = () => {
    // Mock data
    const tasks = [
        { id: 1, title: 'Fix Leaking Kitchen Tap', description: 'Repair the dripping faucet in the main kitchen sink.', status: 'Open', budget: '₹450', date: 'Oct 24, 2023', category: 'Plumbing' },
        { id: 2, title: 'Paint 2BHK Apartment', description: 'Whitewash and paint walls for the entire apartment.', status: 'Open', budget: '₹12000', date: 'Oct 20, 2023', category: 'Painting' },
        { id: 3, title: 'Install Ceiling Fan', description: 'Installation of a new high-speed fan in the master bedroom.', status: 'Open', budget: '₹300', date: 'Oct 25, 2023', category: 'Electrical' },
        { id: 4, title: 'Assemble Wardrobe', description: 'Assembling a 3-door wooden wardrobe from a flat pack.', status: 'Open', budget: '₹850', date: 'Oct 26, 2023', category: 'Carpentry' },
        { id: 5, title: 'Deep Clean 3 Bathrooms', description: 'Deep cleaning and sanitization of three attached bathrooms.', status: 'Open', budget: '₹1500', date: 'Oct 15, 2023', category: 'Cleaning' },
        { id: 6, title: 'Repair Window Frame', description: 'Fixing the broken hinge and lock on the balcony window.', status: 'Open', budget: '₹600', date: 'Oct 23, 2023', category: 'Repair' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All Categories' || task.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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
                        <TaskCard task={task} detailPath="/worker/task-detail" />
                    </div>
                ))}
            </div>
        </div >
    );
};

export default BrowseTasks;
