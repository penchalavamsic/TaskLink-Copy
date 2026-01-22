import React from 'react';

const Reviews = () => {
    // Mock data
    // Mock data
    const reviews = [];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star text-muted"></i>);
            }
        }
        return stars;
    };

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">My Reviews</h2>

            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="list-group list-group-flush">
                                {reviews.length > 0 ? (
                                    reviews.map(review => (
                                        <div key={review.id} className="list-group-item p-4 border-bottom">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <div>
                                                    <h5 className="fw-bold mb-0">{review.workerName}</h5>
                                                    <small className="text-muted">{review.role}</small>
                                                </div>
                                                <small className="text-muted">{review.date}</small>
                                            </div>
                                            <div className="mb-2 mt-1">
                                                {renderStars(review.rating)}
                                            </div>
                                            <p className="mb-0 text-secondary">
                                                "{review.comment}"
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-5">
                                        <i className="bi bi-chat-left-text display-1 text-muted mb-3 d-block"></i>
                                        <h4 className="text-muted">No Reviews Yet</h4>
                                        <p className="text-muted">Reviews you post for workers will appear here.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
