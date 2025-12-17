import React, { useState } from 'react';
import TaskCard from '../../../components/TaskCard';

const BrowseTasks = () => {
    // Mock data
    const tasks = [
        { id: 1, title: 'Fix Website CSS', description: 'Fix spacing issues on homepage.', status: 'Open', budget: '₹50', date: 'Oct 24, 2023', category: 'Development' },
        { id: 2, title: 'Logo Design', description: 'Create a minimal logo for new brand.', status: 'Open', budget: '₹100', date: 'Oct 20, 2023', category: 'Design' },
        { id: 3, title: 'React Component Library', description: 'Build reusable components.', status: 'Open', budget: '₹200', date: 'Oct 25, 2023', category: 'Development' },
        { id: 4, title: 'Database Migration', description: 'Migrate from SQL to NoSQL.', status: 'Open', budget: '₹500', date: 'Oct 26, 2023', category: 'Development' },
        { id: 5, title: 'API Integration', description: 'Integrate payment gateway.', status: 'Open', budget: '₹150', date: 'Oct 15, 2023', category: 'Development' },
        { id: 6, title: 'SEO Optimization', description: 'Optimize landing page for search engines.', status: 'Open', budget: '₹80', date: 'Oct 23, 2023', category: 'Marketing' },
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
                    <select className="form-select w-auto" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option>All Categories</option>
                        <option>Development</option>
                        <option>Design</option>
                        <option>Marketing</option>
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
        </div>
    );
};

export default BrowseTasks;
