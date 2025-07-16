import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AgencyProvider } from './contexts/AgencyContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import PropertiesPage from './pages/PropertiesPage';
import UnitsPage from './pages/UnitsPage';
import TenantsPage from './pages/TenantsPage';
import PaymentsPage from './pages/PaymentsPage';
import ReportsPage from './pages/ReportsPage';
import LandlordPortal from './pages/LandlordPortal';
import TenantPortal from './pages/TenantPortal';
import NotFoundPage from './pages/NotFoundPage';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import { useAuth } from './contexts/AuthContext';

// Layout component for authenticated pages
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// Main App component
const AppContent = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/landing" element={<LandingPage />} />
        
        {/* Public routes */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthPage />
          } 
        />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute requiredPermission="dashboard">
            <Layout>
              <DashboardPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/properties" element={
          <ProtectedRoute requiredPermission="properties">
            <Layout>
              <PropertiesPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/units" element={
          <ProtectedRoute requiredPermission="properties">
            <Layout>
              <UnitsPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/tenants" element={
          <ProtectedRoute requiredPermission="tenants">
            <Layout>
              <TenantsPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/payments" element={
          <ProtectedRoute requiredPermission="payments">
            <Layout>
              <PaymentsPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/reports" element={
          <ProtectedRoute requiredPermission="reports">
            <Layout>
              <ReportsPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/landlord-portal" element={
          <ProtectedRoute requiredPermission="landlord_portal">
            <Layout>
              <LandlordPortal />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/tenant-portal" element={
          <ProtectedRoute requiredPermission="tenant_portal">
            <Layout>
              <TenantPortal />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* Default redirect */}
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/landing" replace />
        } />
        
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AgencyProvider>
        <AppContent />
      </AgencyProvider>
    </AuthProvider>
  );
}

export default App;