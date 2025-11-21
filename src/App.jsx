// App.jsx - SOLO RECEPCIONISTA
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import RecepcionistaDashboard from './pages/RecepcionistaDashboard';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Ruta inicial - Selección de rol */}
            <Route path="/" element={<RoleSelection />} />
            
            {/* Login con parámetro de rol */}
            <Route path="/login/:role" element={<Login />} />
            
            {/* Ruta de recepcionista */}
            <Route 
              path="/recepcionista" 
              element={
                <ProtectedRoute allowedRoles={['recepcionista', 'administrador', 'veterinario']}>
                  <RecepcionistaDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Redireccionar cualquier ruta a recepcionista */}
            <Route path="*" element={<Navigate to="/recepcionista" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;