import React, { useState, useEffect } from 'react';
import StatCard from '../../../components/StatCard';
import QuickActions from '../../../components/QuickActions';

const Dashboard = () => {
    const [statsData, setStatsData] = useState({
        totalTasks: 0,
        inProgress: 0,
        completed: 0,
        spent: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const userStr = sessionStorage.getItem('user');
                if (userStr) {
                    const user = JSON.parse(userStr);
                    if (user.userId) {
                        const response = await fetch(`http://localhost:8080/api/user/${user.userId}/dashboard`);
                        if (response.ok) {
                            const data = await response.json();
                            setStatsData({
                                totalTasks: data.totalTasks || 0,
                                inProgress: data.inProgress || 0,
                                completed: data.completed || 0,
                                spent: data.spent || 0
                            });
                        }
                    }
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            }
        };

        fetchStats();
    }, []);

    const stats = [
        { title: 'Total Tasks', value: statsData.totalTasks, icon: 'bi bi-hdd-stack', color: 'primary' },
        { title: 'In Progress', value: statsData.inProgress, icon: 'bi bi-hourglass-split', color: 'warning' },
        { title: 'Completed', value: statsData.completed, icon: 'bi bi-check-circle', color: 'success' },
        { title: 'Spent', value: `₹${statsData.spent}`, icon: 'bi bi-wallet2', color: 'info' },
    ];



    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Dashboard</h2>

            {/* Stats Row */}
            <div className="row g-4 mb-4">
                {stats.map((stat, index) => (
                    <div className="col-md-6 col-xl-3" key={index}>
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>

            <div className="row g-4">


                {/* Quick Actions */}
                <div className="col-12">
                    <QuickActions />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
