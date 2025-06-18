import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Loader from './Loader';

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
<<<<<<< HEAD
=======
  console.log(user);
>>>>>>> 6c54cdae47aa08f8cc458253617e22eab927ee23

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
