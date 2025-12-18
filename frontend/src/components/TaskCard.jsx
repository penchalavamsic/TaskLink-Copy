import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, detailPath = '/user/task-detail' }) => {
    // Default values if task prop is missing properties
    const {
        id = 1,
        title = "Task Title",
        description = "Task description goes here...",
        status = "Open",
        budget = "$0",
        date = "Today"
    } = task || {};

    let statusBadge = "bg-secondary";
    if (status === "Open") statusBadge = "bg-success";
    if (status === "In Progress") statusBadge = "bg-warning text-dark";
    if (status === "Completed") statusBadge = "bg-primary";

    return (
        <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    {/* <span className={`badge ${statusBadge} rounded-pill`}>{status}</span> */}
                    <small className="text-muted">{date}</small>
                </div>
                <h5 className="card-title fw-bold mb-2">{title}</h5>
                <p className="card-text text-muted mb-3 text-truncate" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', whiteSpace: 'normal' }}>
                    {description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary">{budget}</span>
                    {/* <Link to={`${detailPath}/${id}`} className="btn btn-sm btn-outline-primary rounded-pill px-4">
                        View Details
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
