import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './modules/user/UserLayout';
import UserDashboard from './modules/user/pages/Dashboard';
import MyTasks from './modules/user/pages/MyTasks';
import PostTask from './modules/user/pages/PostTask';
import Reviews from './modules/user/pages/Reviews';
import Profile from './modules/user/pages/Profile';
import TaskDetail from './modules/user/pages/TaskDetail';
import Login from './modules/authentication/Login';
import SignUp from './modules/authentication/SignUp';

// Admin Imports
import AdminLayout from './modules/admin/AdminLayout';
import AdminDashboard from './modules/admin/pages/Dashboard';
import ManageUsers from './modules/admin/pages/ManageUsers';
import ManageTasks from './modules/admin/pages/ManageTasks';
import WorkerVerification from './modules/admin/pages/WorkerVerification';
import AdminProfile from './modules/admin/pages/AdminProfile';

function App() {
    return (
        <Routes>
            {/* Redirect root to User Dashboard for now, or Login */}
            <Route path="/" element={<Navigate to="/user/dashboard" replace />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* User Module Routes */}
            <Route path="/user" element={<UserLayout />}>
                <Route index element={<Navigate to="/user/dashboard" replace />} />
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="my-tasks" element={<MyTasks />} />
                <Route path="post-task" element={<PostTask />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="profile" element={<Profile />} />
                <Route path="task-detail/:id" element={<TaskDetail />} />
            </Route>

            {/* Admin Module Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="manage-users" element={<ManageUsers />} />
                <Route path="manage-tasks" element={<ManageTasks />} />
                <Route path="worker-verification" element={<WorkerVerification />} />
                <Route path="profile" element={<AdminProfile />} />
            </Route>
        </Routes>
    );
}

export default App;
