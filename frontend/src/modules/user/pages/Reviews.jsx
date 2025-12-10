import React from 'react';

const Reviews = () => {
    // Mock data
    const reviews = [
        { id: 1, reviewer: 'Alice Smith', role: 'Project Manager', rating: 5, comment: 'John is an excellent developer. Delivered on time and high quality code.', date: '2 days ago' },
        { id: 2, reviewer: 'Bob Jones', role: 'Designer', rating: 4, comment: 'Great communication, but slight delay in delivery. Overall good experience.', date: '1 week ago' },
        { id: 3, reviewer: 'Charlie Brown', role: 'Startup Founder', rating: 5, comment: 'Fantastic work! Looking forward to working together again.', date: '2 weeks ago' },
    ];

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
                                {reviews.map(review => (
                                    <div key={review.id} className="list-group-item p-4 border-bottom">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h5 className="fw-bold mb-0">{review.reviewer}</h5>
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
