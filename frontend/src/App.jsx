import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './modules/user/UserLayout';
import Dashboard from './modules/user/pages/Dashboard';
import MyTasks from './modules/user/pages/MyTasks';
import PostTask from './modules/user/pages/PostTask';
import Reviews from './modules/user/pages/Reviews';
import Profile from './modules/user/pages/Profile';
import TaskDetail from './modules/user/pages/TaskDetail';
import Login from './modules/authentication/Login';
import SignUp from './modules/authentication/SignUp';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/user/dashboard" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/user" element={<UserLayout />}>
                <Route index element={<Navigate to="/user/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="my-tasks" element={<MyTasks />} />
                <Route path="post-task" element={<PostTask />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="profile" element={<Profile />} />
                <Route path="task-detail/:id" element={<TaskDetail />} />
            </Route>
        </Routes>
    );
}

export default App;
