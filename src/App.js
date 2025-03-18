// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pagini
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardAdmin from './pages/DashboardAdmin'; // aici atentie
import DashboardUser from './pages/DashboardUser';

// Layout principal
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Paginile care NU folosesc Layout (ex: login, register, landing page) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Paginile care folosesc Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/dashboard-admin"
          element={
            <Layout>
              <DashboardAdmin />
            </Layout>
          }
        />
        <Route
          path="/dashboard-user"
          element={
            <Layout>
              <DashboardUser />
            </Layout>
          }
        />

        {/* Alte rute fallback, 404, etc. */}
        <Route path="*" element={<h2>Pagina nu a fost găsită</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
