import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext'; // Importar
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import RecepcionistaDashboard from './pages/RecepcionistaDashboard';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ToastProvider> {/* NUEVO: Proveedor de notificaciones */}
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<RoleSelection />} />
              <Route path="/login/:role" element={<Login />} />
              <Route 
                path="/recepcionista" 
                element={
                  <ProtectedRoute allowedRoles={['recepcionista', 'administrador', 'veterinario']}>
                    <RecepcionistaDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/recepcionista" replace />} />
            </Routes>
          </div>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;