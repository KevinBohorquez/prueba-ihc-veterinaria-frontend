import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';
import { mockClientes, mockMascotas, mockCitas, mockVeterinarios } from '../../utils/mockData';

const Dashboard = () => {
  const { user } = useAuth();

  // Calcular estadísticas directamente de los datos mock
  const stats = {
    mascotas: mockMascotas.filter(m => m.activo).length,
    clientes: mockClientes.filter(c => c.estado === 'Activo').length,
    citas: mockCitas.filter(c => c.estado === 'Programada').length,
    veterinarios: mockVeterinarios.filter(v => v.estado === 'Activo').length
  };

  const getUserDisplayName = () => {
    if (user?.name && user.name !== user?.username) {
      return user.name;
    }
    return user?.username || 'RECEPCIONISTA';
  };

  const dashboardData = [
    { 
      title: 'Mascotas registradas', 
      value: stats.mascotas.toString().padStart(2, '0'), 
      icon: 'https://i.ibb.co/bj9tRhYK/Mascota1-Comprimido.png',
      color: 'blue' 
    },
    { 
      title: 'Citas programadas', 
      value: stats.citas.toString().padStart(2, '0'), 
      icon: 'https://i.ibb.co/qYHnQGk9/cita1-Comprimido.png',
      color: 'green' 
    },
    { 
      title: 'Clientes activos', 
      value: stats.clientes.toString().padStart(2, '0'), 
      icon: 'https://i.ibb.co/mVjXndWF/Cliente1-Comprimido.png',
      color: 'purple' 
    },
    { 
      title: 'Veterinarios disponibles', 
      value: stats.veterinarios.toString().padStart(2, '0'), 
      icon: 'https://i.ibb.co/qFFFykJk/Solicitud2-Comprimido.png',
      color: 'orange' 
    }
  ];

  return (
    <div className="dashboard-recepcionista">
      <div className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h2 className="welcome-title">BIENVENIDO/A 🤓 </h2>
            <h3 className="user-name">{getUserDisplayName()}</h3>
            <p className="role-description">Recepcionista - Colitas Felices - Veterinaria 🧑🏻‍💻</p>
          </div>
          <div className="welcome-image">
            <img 
              src="https://i.ibb.co/S7tyCF7B/Recepcionista1-Comprimido.png" 
              alt="Mascota" 
              className="pet-icon"
            />
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {dashboardData.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">
              <img src={stat.icon} alt={stat.title} />
            </div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h3>Accesos Rápidos</h3>
        <div className="actions-grid">
          <button className="action-btn blue">
            <span>📋</span>
            <span>Ver Clientes</span>
          </button>
          <button className="action-btn green">
            <span>🐾</span>
            <span>Ver Mascotas</span>
          </button>
          <button className="action-btn purple">
            <span>📅</span>
            <span>Gestionar Citas</span>
          </button>
          <button className="action-btn orange">
            <span>👨‍⚕️</span>
            <span>Veterinarios</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
