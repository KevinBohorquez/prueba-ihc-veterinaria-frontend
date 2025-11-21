import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import './VeterinariosView.css';
import { mockVeterinarios } from '../../utils/mockData';

const VeterinariosView = () => {
  const [veterinarios, setVeterinarios] = useState(mockVeterinarios);
  const [filteredVeterinarios, setFilteredVeterinarios] = useState(mockVeterinarios);
  const [searchTerm, setSearchTerm] = useState('');
  const [especialidadFilter, setEspecialidadFilter] = useState('todos');

  useEffect(() => {
    let filtered = [...veterinarios];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(vet => {
        const nombre = vet.nombre_completo.toLowerCase();
        const especialidad = vet.especialidad.toLowerCase();
        return nombre.includes(term) || especialidad.includes(term);
      });
    }

    if (especialidadFilter !== 'todos') {
      filtered = filtered.filter(vet => vet.especialidad.toLowerCase() === especialidadFilter.toLowerCase());
    }

    setFilteredVeterinarios(filtered);
  }, [veterinarios, searchTerm, especialidadFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setEspecialidadFilter('todos');
  };

  const columns = [
    { key: 'numero', header: 'N°', render: (_, index) => index + 1 },
    { key: 'nombre_completo', header: 'Nombre Completo' },
    { key: 'especialidad', header: 'Especialidad' },
    { key: 'nro_colegiatura', header: 'N° Colegiatura' },
    { key: 'telefono', header: 'Teléfono' },
    { key: 'email', header: 'Email' },
    { key: 'horario_atencion', header: 'Horario' },
    { 
      key: 'estado', 
      header: 'Estado',
      render: (vet) => (
        <span className={`estado-badge ${vet.estado.toLowerCase()}`}>
          {vet.estado}
        </span>
      )
    }
  ];

  return (
    <div className="veterinarios-view">
      <div className="section-header">
        <h2>VETERINARIOS 👨‍⚕️</h2>
      </div>

      <div className="veterinarios-table-section">
        <div className="table-header">
          <h3>LISTA DE VETERINARIOS</h3>
          <div className="filters-container">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o especialidad..."
                className="search-input"
              />
            </div>
            <select 
              value={especialidadFilter} 
              onChange={(e) => setEspecialidadFilter(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todas las especialidades</option>
              <option value="medicina general">Medicina General</option>
              <option value="cirugía">Cirugía</option>
              <option value="dermatología">Dermatología</option>
            </select>
            {(searchTerm || especialidadFilter !== 'todos') && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {(searchTerm || especialidadFilter !== 'todos') && (
          <div className="results-info">
            <span>{filteredVeterinarios.length} de {veterinarios.length} veterinarios</span>
          </div>
        )}

        <Table 
          columns={columns}
          data={filteredVeterinarios}
          emptyMessage="No hay veterinarios registrados"
        />
      </div>
    </div>
  );
};

export default VeterinariosView;
