import React from 'react';

const Reviews = () => {
    // Mock data
    const reviews = [
        { id: 1, workerName: 'Ramesh Gupta', role: 'Plumber', rating: 5, comment: 'Fixed the leak quickly and was very polite. Highly recommended.', date: '2 days ago' },
        { id: 2, workerName: 'Suresh Reddy', role: 'Electrician', rating: 4, comment: 'Good work on the wiring, but came a bit late. Overall good job.', date: '1 week ago' },
        { id: 3, workerName: 'Deepak Verma', role: 'Carpenter', rating: 5, comment: 'Excellent furniture assembly. Very professional and clean work.', date: '2 weeks ago' },
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
