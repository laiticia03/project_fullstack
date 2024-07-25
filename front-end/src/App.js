import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import ProductList from './Components/ProductList';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/products" /> : <Login onLogin={handleLogin} />} />
        <Route path="/products" element={token ? <ProductList /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;