import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, detailPath = '/user/task-detail', onComplete, onDelete }) => {
    // Default values if task prop is missing properties
    const {
        id = 1,
        title = "Task Title",
        description = "Task description goes here...",
        status = "Open",
        budget = "$0",
        date = "Today",
        workerName
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
                    <div className="d-flex gap-2">
                        {onComplete && (
                            <button
                                className={`btn btn-sm rounded-pill px-3 ${status === "COMPLETED" ? "btn-success" : "btn-outline-secondary"}`}
                                onClick={() => status !== "COMPLETED" && onComplete(id)}
                                disabled={status === "COMPLETED"}
                                style={status !== "COMPLETED" ? { opacity: 0.6 } : {}}
                                title={status === "COMPLETED" ? "Task Completed" : "Mark as Completed"}
                            >
                                <i className="bi bi-check-circle-fill me-1"></i> Completed
                            </button>
                        )}
                        {onDelete && (
                            <button
                                className="btn btn-sm btn-outline-danger rounded-pill px-3"
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this task?')) {
                                        onDelete(id);
                                    }
                                }}
                                title="Delete Task"
                            >
                                <i className="bi bi-trash-fill me-1"></i> Delete
                            </button>
                        )}
                    </div>
                </div>
                {status === "IN_PROGRESS" && workerName && (
                    <div className="alert alert-info py-1 px-2 mt-2 mb-0 small">
                        Accepted by <strong>{workerName}</strong>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
