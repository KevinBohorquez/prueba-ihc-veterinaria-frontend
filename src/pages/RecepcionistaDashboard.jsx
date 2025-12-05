// src/pages/RecepcionistaDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AppBar from '../components/common/AppBar';
import Sidebar from '../components/common/Sidebar';
import Dashboard from '../components/recepcionista/Dashboard';
import ClientesManagement from '../components/recepcionista/ClientesManagement';
import MascotasManagement from '../components/recepcionista/MascotasManagement';
import CitasManagement from '../components/recepcionista/CitasManagement';
import VeterinariosView from '../components/recepcionista/VeterinariosView';
// Importaciones nuevas
import CalendarioCitas from '../components/recepcionista/CalendarioCitas';
import TableroCitas from '../components/recepcionista/TableroCitas';
import '../styles/Dashboard.css';

const RecepcionistaDashboard = () => {
  const { user } = useAuth();
  const [activeView, setActiveView] = useState('inicio');

  const getUserDisplayName = () => {
    // ... (lógica existente)
    return user?.username || 'RECEPCIONISTA';
  };

  const sidebarItems = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'clientes', label: 'Clientes', icon: '👥' },
    { id: 'mascotas', label: 'Mascotas', icon: '🐾' },
    { id: 'citas', label: 'Lista Citas', icon: '📅' }, // Renombrado
    { id: 'calendario', label: 'Calendario', icon: '📆' }, // NUEVO
    { id: 'tablero', label: 'Tablero (D&D)', icon: '📋' }, // NUEVO
    { id: 'veterinarios', label: 'Veterinarios', icon: '👨‍⚕️' }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'clientes': return <ClientesManagement />;
      case 'mascotas': return <MascotasManagement />;
      case 'citas': return <CitasManagement />;
      case 'veterinarios': return <VeterinariosView />;
      case 'calendario': return <CalendarioCitas />; // NUEVO
      case 'tablero': return <TableroCitas />; // NUEVO
      default: return <Dashboard />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar 
        items={sidebarItems} 
        activeItem={activeView}
        onItemClick={setActiveView}
      />
      <div className="main-content">
        <AppBar title="🟢 Cuenta de:" subtitle={getUserDisplayName()} />
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default RecepcionistaDashboard;