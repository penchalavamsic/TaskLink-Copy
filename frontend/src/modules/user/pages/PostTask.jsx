import React, { useState } from 'react';
import Button from '../../../components/Button';

const PostTask = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handlePostTask = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());

        const userStr = sessionStorage.getItem('user');
        if (!userStr) {
            alert("You must be logged in to post a task.");
            return;
        }
        const user = JSON.parse(userStr);

        try {
            const response = await fetch('http://localhost:8080/api/tasks/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...taskData,
                    clientId: user.userId
                }),
            });

            if (response.ok) {
                setShowSuccess(true);
                form.reset();
                setTimeout(() => setShowSuccess(false), 3000);
            } else {
                const errorMsg = await response.text();
                alert('Failed to post task: ' + errorMsg);
            }
        } catch (error) {
            console.error('Error posting task:', error);
            alert('An error occurred while posting the task.');
        }
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="taskTitle"
                                        placeholder="e.g. Need a Plumber for leak repair"
                                        required
                                        name="title"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="taskDescription" className="form-label fw-semibold">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="taskDescription"
                                        rows="5"
                                        placeholder="Describe your task in detail..."
                                        name="description"
                                    ></textarea>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="category" className="form-label fw-semibold">Category</label>
                                        <select className="form-select" id="category" name="category" required>
                                            <option value="">Select Category</option>
                                            <option value="Plumbing">Plumbing</option>
                                            <option value="Electrical">Electrical</option>
                                            <option value="Carpentry">Carpentry</option>
                                            <option value="Painting">Painting</option>
                                            <option value="Cleaning">Cleaning</option>
                                            <option value="Home Repair">Home Repair</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="budget" className="form-label fw-semibold">Budget (₹)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="budget"
                                            placeholder="e.g. 500"
                                            required
                                            name="budget"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="deadline" className="form-label fw-semibold">Deadline</label>
                                    <input type="date" className="form-control" id="deadline" name="deadline" required />
                                </div>

                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="light" className="px-4" type="button" onClick={() => window.history.back()}>Cancel</Button>
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
