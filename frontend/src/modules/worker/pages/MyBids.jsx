import React from 'react';
import Button from '../../../components/Button';

const MyBids = () => {
    const bids = [
        { id: 1, taskTitle: 'E-commerce Website', client: 'RetailGiant', amount: '$1500', date: 'Oct 20, 2023', status: 'Pending' },
        { id: 2, taskTitle: 'Mobile App Icon', client: 'AppStudio', amount: '$50', date: 'Oct 18, 2023', status: 'Accepted' },
        { id: 3, taskTitle: 'Python Script', client: 'DataCorp', amount: '$80', date: 'Oct 15, 2023', status: 'Rejected' },
    ];

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">My Bids</h2>

            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">Task Title</th>
                                    <th>Client</th>
                                    <th>Bid Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bids.map(bid => (
                                    <tr key={bid.id}>
                                        <td className="ps-4 fw-semibold">{bid.taskTitle}</td>
                                        <td>{bid.client}</td>
                                        <td className="fw-bold">{bid.amount}</td>
                                        <td>{bid.date}</td>
                                        <td>
                                            <span className={`badge ${bid.status === 'Accepted' ? 'bg-success' :
                                                    bid.status === 'Rejected' ? 'bg-danger' : 'bg-warning text-dark'
                                                }`}>
                                                {bid.status}
                                            </span>
                                        </td>
                                        <td>
                                            {bid.status === 'Pending' && (
                                                <Button variant="outline-danger" size="sm">Cancel Bid</Button>
                                            )}
                                            {bid.status === 'Accepted' && (
                                                <Button variant="outline-primary" size="sm">View Job</Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBids;
