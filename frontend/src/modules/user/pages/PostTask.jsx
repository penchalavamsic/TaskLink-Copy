import React, { useState } from 'react';
import Button from '../../../components/Button';

const PostTask = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handlePostTask = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        // Hide message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Post a New Task</h2>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            {showSuccess && (
                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                    <i className="bi bi-check-circle-fill me-2"></i>
                                    <div>Task Posted Successfully!</div>
                                </div>
                            )}
                            <form onSubmit={handlePostTask}>
                                <div className="mb-3">
                                    <label htmlFor="taskTitle" className="form-label fw-semibold">Task Title</label>
                                    <input type="text" className="form-control" id="taskTitle" placeholder="e.g. Need a Plumber for leak repair" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="taskDescription" className="form-label fw-semibold">Description</label>
                                    <textarea className="form-control" id="taskDescription" rows="5" placeholder="Describe your task in detail..."></textarea>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="category" className="form-label fw-semibold">Category</label>
                                        <select className="form-select" id="category">
                                            <option defaultValue>Select Category</option>
                                            <option value="plumbing">Plumbing</option>
                                            <option value="electrical">Electrical</option>
                                            <option value="carpentry">Carpentry</option>
                                            <option value="painting">Painting</option>
                                            <option value="cleaning">Cleaning</option>
                                            <option value="repair">Home Repair</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="budget" className="form-label fw-semibold">Budget (₹)</label>
                                        <input type="number" className="form-control" id="budget" placeholder="500" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="deadline" className="form-label fw-semibold">Deadline</label>
                                    <input type="date" className="form-control" id="deadline" />
                                </div>

                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="light" className="px-4" type="button">Cancel</Button>
                                    <Button variant="primary" className="px-4" type="submit">Post Task</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostTask;
