import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                <h5 className="fw-bold mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
                <div className="row g-3">
                    <div className="col-md-6">
                        <Link to="/user/post-task" className="btn btn-primary btn-lg w-100 h-100 d-flex align-items-center justify-content-center">
                            <i className="bi bi-plus-circle-fill me-2"></i>
                            Post New Task
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/user/my-tasks" className="btn btn-outline-secondary btn-lg w-100 h-100 d-flex align-items-center justify-content-center">
                            <i className="bi bi-list-check me-2"></i>
                            Manage My Tasks
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickActions;
