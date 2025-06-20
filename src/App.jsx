import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './Components/Auth/LoginForm';
import RegisterForm from './Components/Auth/RegisterForm';
import ForgotPassword from './Components/Auth/ForgotPassword';
import ResetPassword from './Components/Auth/ResetPassword';
import UserDashboard from './Components/Dashboard/UserDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import PrivateRoute from './Components/UI/PrivateRoute';
import AdminRoute from './Components/UI/AdminRoute';
import NotFound from './Components/UI/NotFound';
import { AuthProvider } from './Components/contexts/AuthContext';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import KYCVerification from './Components/KYCVerification';
import { GoogleOAuthProvider } from '@react-oauth/google';
import OrderTable from './Components/OrderTable';

// Define a component that checks the location and conditionally renders Navbar
function NavbarCondition() {
  const location = useLocation();
  const isDashboardOrAdmin = location.pathname.includes('/dashboard') || location.pathname.includes('/admin');

  return !isDashboardOrAdmin ? <Navbar /> : null;
}


function FooterCondition() {
  const location = useLocation();
  const isDashboardOrAdmin = location.pathname.includes('/dashboard') || location.pathname.includes('/admin');
  return !isDashboardOrAdmin ? <Footer /> : null;
}

function App() {

  
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <div className="min-h-screen">
            <NavbarCondition />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/order-table" element={<OrderTable />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />

              {/* Private Routes */}
              <Route path="/dashboard" element={<PrivateRoute />}>
                <Route index element={<UserDashboard />} />
              </Route>
                <Route path="/kyc-start" element={<KYCVerification />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminRoute />}>
                <Route index element={<AdminDashboard />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>

            <FooterCondition />
          </div>
        </AuthProvider>
        </GoogleOAuthProvider>
    </Router>
  );
}

export default App;
