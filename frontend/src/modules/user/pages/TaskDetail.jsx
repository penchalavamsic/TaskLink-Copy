import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../../components/Button';

const TaskDetail = () => {
    const { id } = useParams();

    // Mock generic data since we don't have a real backend connected yet
    const task = {
        id: id,
        title: "Fix Website CSS",
        description: "We are facing some spacing issues on the homepage when viewing on mobile devices. The header overlaps with the main content, and the footer is not sticking to the bottom. We need a CSS expert to fix these responsiveness issues. Please make sure to test on iPhone and Android screen sizes.",
        status: "In Progress",
        budget: "₹50",
        deadline: "Oct 30, 2023",
        postedBy: "TechCorp Inc.",
        postedDate: "Oct 24, 2023",
        skills: ["CSS3", "HTML5", "Responsive Design", "Bootstrap"],
        proposals: 3
    };

    return (
        <div className="container-fluid p-0">
            <div className="mb-4">
                <Link to="/user/my-tasks" className="text-decoration-none text-muted">
                    <i className="bi bi-arrow-left me-2"></i>Back to My Tasks
                </Link>
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h3 className="fw-bold mb-2">{task.title}</h3>
                                    <div className="d-flex gap-3 text-muted small">
                                        <span><i className="bi bi-clock me-1"></i> Posted {task.postedDate}</span>
                                        <span><i className="bi bi-tag me-1"></i> {task.status}</span>
                                    </div>
                                </div>
                                <h3 className="fw-bold text-primary">{task.budget}</h3>
                            </div>

                            <hr />

                            <h5 className="fw-bold mt-4">Description</h5>
                            <p className="text-secondary leading-relaxed">
                                {task.description}
                            </p>

                            <h5 className="fw-bold mt-4">Required Skills</h5>
                            <div className="d-flex flex-wrap gap-2 mt-2">
                                {task.skills.map((skill, index) => (
                                    <span key={index} className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <h6 className="fw-bold text-uppercase text-muted mb-3">About the Client</h6>
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>
                                    T
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">{task.postedBy}</h6>
                                    <small className="text-muted">Verified Client</small>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="fw-bold text-uppercase text-muted mb-3">Task Details</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-3 d-flex justify-content-between">
                                    <span className="text-muted">Deadline:</span>
                                    <span className="fw-semibold">{task.deadline}</span>
                                </li>
                                <li className="mb-3 d-flex justify-content-between">
                                    <span className="text-muted">Proposals:</span>
                                    <span className="fw-semibold">{task.proposals}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span className="text-muted">Task ID:</span>
                                    <span className="fw-semibold">#{task.id}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;
