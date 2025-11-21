import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import './ServiciosView.css';
import { mockServicios, mockTiposServicio } from '../../utils/mockData';

const ServiciosView = () => {
  const [servicios, setServicios] = useState(mockServicios);
  const [filteredServicios, setFilteredServicios] = useState(mockServicios);
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoFilter, setTipoFilter] = useState('todos');

  useEffect(() => {
    let filtered = [...servicios];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(servicio => {
        const nombre = servicio.nombre_servicio.toLowerCase();
        const descripcion = servicio.descripcion.toLowerCase();
        return nombre.includes(term) || descripcion.includes(term);
      });
    }

    if (tipoFilter !== 'todos') {
      filtered = filtered.filter(servicio => servicio.id_tipo_servicio === parseInt(tipoFilter));
    }

    setFilteredServicios(filtered);
  }, [servicios, searchTerm, tipoFilter]);

  const getTipoServicio = (id_tipo) => {
    const tipo = mockTiposServicio.find(t => t.id_tipo_servicio === id_tipo);
    return tipo ? tipo.descripcion : 'General';
  };

  const clearFilters = () => {
    setSearchTerm('');
    setTipoFilter('todos');
  };

  const columns = [
    { key: 'numero', header: 'N°', render: (_, index) => index + 1 },
    { key: 'nombre_servicio', header: 'Servicio' },
    { 
      key: 'tipo', 
      header: 'Tipo',
      render: (servicio) => getTipoServicio(servicio.id_tipo_servicio)
    },
    { key: 'descripcion', header: 'Descripción' },
    { 
      key: 'precio', 
      header: 'Precio',
      render: (servicio) => `S/ ${servicio.precio.toFixed(2)}`
    },
    { 
      key: 'duracion', 
      header: 'Duración (min)',
      render: (servicio) => servicio.duracion_estimada
    }
  ];

  return (
    <div className="servicios-view">
      <div className="section-header">
        <h2>SERVICIOS VETERINARIOS 🗂️</h2>
      </div>

      <div className="servicios-table-section">
        <div className="table-header">
          <h3>LISTA DE SERVICIOS</h3>
          <div className="filters-container">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar servicio..."
                className="search-input"
              />
              <button className="search-btn">
                <img src="https://i.ibb.co/3mvthkJT/Icono-Buscar-Comprimida.png" alt="search" className="search-icon" />
              </button>
            </div>
            <select 
              value={tipoFilter} 
              onChange={(e) => setTipoFilter(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todos los tipos</option>
              {mockTiposServicio.map(tipo => (
                <option key={tipo.id_tipo_servicio} value={tipo.id_tipo_servicio}>
                  {tipo.descripcion}
                </option>
              ))}
            </select>
            {(searchTerm || tipoFilter !== 'todos') && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {(searchTerm || tipoFilter !== 'todos') && (
          <div className="results-info">
            <span>{filteredServicios.length} de {servicios.length} servicios</span>
          </div>
        )}

        <Table 
          columns={columns}
          data={filteredServicios}
          emptyMessage="No hay servicios disponibles"
        />
      </div>
    </div>
  );
};

export default ServiciosView;
