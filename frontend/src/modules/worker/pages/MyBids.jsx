import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const MyBids = () => {
    const [bids, setBids] = useState([
        { id: 1, taskTitle: 'Leaking Pipe Repair', client: 'Amit Sharma', amount: '₹800', date: 'Oct 20, 2023', status: 'Pending', taskId: 101 },
        { id: 2, taskTitle: 'Full House Wiring', client: 'Priya Patel', amount: '₹15000', date: 'Oct 18, 2023', status: 'Accepted', taskId: 102 },
        { id: 3, taskTitle: 'Sofa Cleaning', client: 'Vikram Singh', amount: '₹500', date: 'Oct 15, 2023', status: 'Rejected', taskId: 103 },
        { id: 4, taskTitle: 'Kitchen Cabinet Repair', client: 'Neha Gupta', amount: '₹1200', date: 'Oct 22, 2023', status: 'Pending', taskId: 104 },
    ]);

    const handleCancelBid = (id) => {
        if (window.confirm("Are you sure you want to cancel this bid?")) {
            setBids(bids.filter(bid => bid.id !== id));
        }
    };

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
                                                <Button variant="outline-danger" size="sm" onClick={() => handleCancelBid(bid.id)}>Cancel Bid</Button>
                                            )}
                                            {bid.status === 'Accepted' && (
                                                <Link to={`/worker/task-detail`}>
                                                    <Button variant="outline-primary" size="sm">View Job</Button>
                                                </Link>
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
