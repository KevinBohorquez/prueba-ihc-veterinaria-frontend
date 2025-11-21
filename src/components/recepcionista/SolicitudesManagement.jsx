import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import './SolicitudesManagement.css';
import { mockSolicitudes } from '../../utils/mockData';

const SolicitudesManagement = () => {
  const [solicitudes, setSolicitudes] = useState(mockSolicitudes);
  const [filteredSolicitudes, setFilteredSolicitudes] = useState(mockSolicitudes);
  const [searchTerm, setSearchTerm] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('todos');
  const [prioridadFilter, setPrioridadFilter] = useState('todos');

  useEffect(() => {
    let filtered = [...solicitudes];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(solicitud => {
        const mascota = solicitud.nombre_mascota.toLowerCase();
        const cliente = solicitud.nombre_cliente.toLowerCase();
        const motivo = solicitud.motivo_solicitud.toLowerCase();
        return mascota.includes(term) || cliente.includes(term) || motivo.includes(term);
      });
    }

    if (estadoFilter !== 'todos') {
      filtered = filtered.filter(solicitud => solicitud.estado.toLowerCase() === estadoFilter.toLowerCase());
    }

    if (prioridadFilter !== 'todos') {
      filtered = filtered.filter(solicitud => solicitud.prioridad.toLowerCase() === prioridadFilter.toLowerCase());
    }

    setFilteredSolicitudes(filtered);
  }, [solicitudes, searchTerm, estadoFilter, prioridadFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setEstadoFilter('todos');
    setPrioridadFilter('todos');
  };

  const columns = [
    { key: 'numero', header: 'N°', render: (_, index) => index + 1 },
    { 
      key: 'fecha', 
      header: 'Fecha',
      render: (solicitud) => new Date(solicitud.fecha_solicitud).toLocaleDateString('es-PE')
    },
    { key: 'hora_solicitud', header: 'Hora' },
    { key: 'nombre_mascota', header: 'Mascota' },
    { key: 'nombre_cliente', header: 'Cliente' },
    { key: 'telefono_cliente', header: 'Teléfono' },
    { key: 'motivo_solicitud', header: 'Motivo' },
    { 
      key: 'prioridad', 
      header: 'Prioridad',
      render: (solicitud) => (
        <span className={`prioridad-badge ${solicitud.prioridad.toLowerCase()}`}>
          {solicitud.prioridad}
        </span>
      )
    },
    { 
      key: 'estado', 
      header: 'Estado',
      render: (solicitud) => (
        <span className={`estado-badge ${solicitud.estado.toLowerCase()}`}>
          {solicitud.estado}
        </span>
      )
    }
  ];

  return (
    <div className="solicitudes-management">
      <div className="section-header">
        <h2>GESTIÓN DE SOLICITUDES 📝</h2>
      </div>

      <div className="solicitudes-table-section">
        <div className="table-header">
          <h3>LISTA DE SOLICITUDES</h3>
          <div className="filters-container">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por mascota, cliente o motivo..."
                className="search-input"
              />
            </div>
            <select 
              value={prioridadFilter} 
              onChange={(e) => setPrioridadFilter(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todas las prioridades</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
            <select 
              value={estadoFilter} 
              onChange={(e) => setEstadoFilter(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todos los estados</option>
              <option value="pendiente">Pendiente</option>
              <option value="atendida">Atendida</option>
            </select>
            {(searchTerm || estadoFilter !== 'todos' || prioridadFilter !== 'todos') && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {(searchTerm || estadoFilter !== 'todos' || prioridadFilter !== 'todos') && (
          <div className="results-info">
            <span>{filteredSolicitudes.length} de {solicitudes.length} solicitudes</span>
          </div>
        )}

        <Table 
          columns={columns}
          data={filteredSolicitudes}
          emptyMessage="No hay solicitudes registradas"
        />
      </div>
    </div>
  );
};

export default SolicitudesManagement;
