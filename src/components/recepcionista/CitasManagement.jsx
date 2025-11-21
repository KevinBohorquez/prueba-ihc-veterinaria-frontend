import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import './CitasManagement.css';
import { mockCitas } from '../../utils/mockData';

const CitasManagement = () => {
  const [citas, setCitas] = useState(mockCitas);
  const [filteredCitas, setFilteredCitas] = useState(mockCitas);
  const [searchTerm, setSearchTerm] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('todos');

  useEffect(() => {
    let filtered = [...citas];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(cita => {
        const mascota = cita.nombre_mascota.toLowerCase();
        const cliente = cita.nombre_cliente.toLowerCase();
        const veterinario = cita.nombre_veterinario.toLowerCase();
        return mascota.includes(term) || cliente.includes(term) || veterinario.includes(term);
      });
    }

    if (estadoFilter !== 'todos') {
      filtered = filtered.filter(cita => cita.estado.toLowerCase() === estadoFilter.toLowerCase());
    }

    setFilteredCitas(filtered);
  }, [citas, searchTerm, estadoFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setEstadoFilter('todos');
  };

  const columns = [
    { key: 'numero', header: 'N°', render: (_, index) => index + 1 },
    { 
      key: 'fecha', 
      header: 'Fecha',
      render: (cita) => new Date(cita.fecha).toLocaleDateString('es-PE')
    },
    { key: 'hora', header: 'Hora' },
    { key: 'nombre_mascota', header: 'Mascota' },
    { key: 'nombre_cliente', header: 'Cliente' },
    { key: 'nombre_veterinario', header: 'Veterinario' },
    { key: 'nombre_servicio', header: 'Servicio' },
    { key: 'motivo_consulta', header: 'Motivo' },
    { 
      key: 'estado', 
      header: 'Estado',
      render: (cita) => (
        <span className={`estado-badge ${cita.estado.toLowerCase()}`}>
          {cita.estado}
        </span>
      )
    }
  ];

  return (
    <div className="citas-management">
      <div className="section-header">
        <h2>GESTIÓN DE CITAS 📅</h2>
      </div>

      <div className="citas-table-section">
        <div className="table-header">
          <h3>LISTA DE CITAS</h3>
          <div className="filters-container">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por mascota, cliente o veterinario..."
                className="search-input"
              />
            </div>
            <select 
              value={estadoFilter} 
              onChange={(e) => setEstadoFilter(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todos los estados</option>
              <option value="programada">Programada</option>
              <option value="completada">Completada</option>
              <option value="cancelada">Cancelada</option>
            </select>
            {(searchTerm || estadoFilter !== 'todos') && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {(searchTerm || estadoFilter !== 'todos') && (
          <div className="results-info">
            <span>{filteredCitas.length} de {citas.length} citas</span>
          </div>
        )}

        <Table 
          columns={columns}
          data={filteredCitas}
          emptyMessage="No hay citas programadas"
        />
      </div>
    </div>
  );
};

export default CitasManagement;
