import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/NavBar';
import AuthPage from './components/AuthPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import ManageRoutes from './pages/admin/ManageRoutes';
import ManagePartners from './pages/admin/ManagePartners';

import UserRoutes from './pages/user/UserRoutes';
import UserGamification from './pages/user/UserGamification';
import UserNotifications from './pages/user/UserNotifications';
import UserReport from './pages/user/UserReport';
import UserSettings from './pages/user/UserSettings';

function App() {
  // role: 'admin', 'user' sau null (neautentificat)
  const [role, setRole] = useState(null);

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleLogout = () => {
    setRole(null);
  };

  return (
    <Router>
      <Navbar role={role} onLogout={handleLogout} />
      <Routes>
        {/* Daca nu e logat, orice path => AuthPage */}
        {!role && <Route path="*" element={<AuthPage onLogin={handleLogin} />} />}

        {/* Rute ADMIN */}
        {role === 'admin' && (
          <>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/routes" element={<ManageRoutes />} />
            <Route path="/admin/partners" element={<ManagePartners />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />
          </>
        )}

        {/* Rute USER */}
        {role === 'user' && (
          <>
            <Route path="/user/routes" element={<UserRoutes />} />
            <Route path="/user/gamification" element={<UserGamification />} />
            <Route path="/user/notifications" element={<UserNotifications />} />
            <Route path="/user/report" element={<UserReport />} />
            <Route path="/user/settings" element={<UserSettings />} />
            <Route path="*" element={<Navigate to="/user/routes" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
