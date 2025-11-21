import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import Modal from '../common/Modal';
import './MascotasManagement.css';
import { mockMascotas, mockClientes } from '../../utils/mockData';

const MascotasManagement = () => {
  const [mascotas, setMascotas] = useState(mockMascotas);
  const [filteredMascotas, setFilteredMascotas] = useState(mockMascotas);
  const [searchTerm, setSearchTerm] = useState('');
  const [especieFilter, setEspecieFilter] = useState('todos');
  
  // Estados para modales
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add', 'edit', 'view'
  const [selectedMascota, setSelectedMascota] = useState(null);
  
  // Formulario
  const [formData, setFormData] = useState({
    nombre_mascota: '',
    id_cliente: '',
    sexo: 'Macho',
    color_pelaje: '',
    edad_anios: 0,
    edad_meses: 0,
    especie: 'Perro',
    raza: '',
    esterilizado: 'No',
    peso_kg: ''
  });

  useEffect(() => {
    let filtered = [...mascotas];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(mascota => {
        const nombre = mascota.nombre_mascota.toLowerCase();
        const cliente = mockClientes.find(c => c.id_cliente === mascota.id_cliente);
        const nombreCliente = cliente ? `${cliente.nombre} ${cliente.apellido_paterno}`.toLowerCase() : '';
        return nombre.includes(term) || nombreCliente.includes(term);
      });
    }

    if (especieFilter !== 'todos') {
      filtered = filtered.filter(mascota => mascota.especie.toLowerCase() === especieFilter.toLowerCase());
    }

    setFilteredMascotas(filtered);
  }, [mascotas, searchTerm, especieFilter]);

  const getClienteNombre = (id_cliente) => {
    const cliente = mockClientes.find(c => c.id_cliente === id_cliente);
    return cliente ? `${cliente.nombre} ${cliente.apellido_paterno}` : 'Desconocido';
  };

  const clearFilters = () => {
    setSearchTerm('');
    setEspecieFilter('todos');
  };

  // Funciones de modal
  const handleAdd = () => {
    setModalMode('add');
    setFormData({
      nombre_mascota: '',
      id_cliente: '',
      sexo: 'Macho',
      color_pelaje: '',
      edad_anios: 0,
      edad_meses: 0,
      especie: 'Perro',
      raza: '',
      esterilizado: 'No',
      peso_kg: ''
    });
    setShowModal(true);
  };

  const handleEdit = (mascota) => {
    setModalMode('edit');
    setSelectedMascota(mascota);
    setFormData({
      nombre_mascota: mascota.nombre_mascota,
      id_cliente: mascota.id_cliente,
      sexo: mascota.sexo,
      color_pelaje: mascota.color_pelaje,
      edad_anios: mascota.edad_anios,
      edad_meses: mascota.edad_meses,
      especie: mascota.especie,
      raza: mascota.raza,
      esterilizado: mascota.esterilizado || 'No',
      peso_kg: mascota.peso_kg
    });
    setShowModal(true);
  };

  const handleView = (mascota) => {
    setModalMode('view');
    setSelectedMascota(mascota);
    setFormData({
      nombre_mascota: mascota.nombre_mascota,
      id_cliente: mascota.id_cliente,
      sexo: mascota.sexo,
      color_pelaje: mascota.color_pelaje,
      edad_anios: mascota.edad_anios,
      edad_meses: mascota.edad_meses,
      especie: mascota.especie,
      raza: mascota.raza,
      esterilizado: mascota.esterilizado || 'No',
      peso_kg: mascota.peso_kg
    });
    setShowModal(true);
  };

  const handleDelete = (mascota) => {
    if (window.confirm(`¿Está seguro de eliminar a la mascota ${mascota.nombre_mascota}?`)) {
      alert(`Mascota "${mascota.nombre_mascota}" eliminada correctamente (simulado)`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (modalMode === 'add') {
      const nuevaMascota = {
        id_mascota: Math.max(...mascotas.map(m => m.id_mascota)) + 1,
        ...formData,
        id_cliente: parseInt(formData.id_cliente),
        peso_kg: parseFloat(formData.peso_kg),
        fecha_nacimiento: new Date().toISOString().split('T')[0],
        activo: true
      };
      setMascotas([...mascotas, nuevaMascota]);
      alert('Mascota registrada correctamente');
    } else if (modalMode === 'edit') {
      const updated = mascotas.map(m => 
        m.id_mascota === selectedMascota.id_mascota ? { ...m, ...formData, peso_kg: parseFloat(formData.peso_kg) } : m
      );
      setMascotas(updated);
      alert('Mascota actualizada correctamente');
    }
    
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const columns = [
    { 
      key: 'numero', 
      header: 'N°', 
      render: (mascota, index) => filteredMascotas.indexOf(mascota) + 1
    },
    { key: 'nombre_mascota', header: 'Nombre' },
    { key: 'especie', header: 'Especie' },
    { key: 'raza', header: 'Raza' },
    { key: 'sexo', header: 'Sexo' },
    { 
      key: 'edad', 
      header: 'Edad',
      render: (mascota) => `${mascota.edad_anios}a ${mascota.edad_meses}m`
    },
    { 
      key: 'peso', 
      header: 'Peso (kg)',
      render: (mascota) => mascota.peso_kg
    },
    { 
      key: 'dueno', 
      header: 'Dueño',
      render: (mascota) => getClienteNombre(mascota.id_cliente)
    },
    {
      key: 'acciones',
      header: 'Acciones',
      render: (mascota) => (
        <div className="action-buttons">
          <button 
            className="action-btn view-btn" 
            onClick={() => handleView(mascota)}
            title="Ver detalles"
          >
            👁️
          </button>
          <button 
            className="action-btn edit-btn" 
            onClick={() => handleEdit(mascota)}
            title="Editar"
          >
            ✏️
          </button>
          <button 
            className="action-btn delete-btn" 
            onClick={() => handleDelete(mascota)}
            title="Eliminar"
          >
            🗑️
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="mascotas-management">
      <div className="section-header">
        <h2>GESTIÓN DE MASCOTAS 🐾</h2>
        <button className="btn-add" onClick={handleAdd}>
          + Nueva Mascota
        </button>
      </div>

      <div className="mascotas-table-section">
        <div className="table-header">
          <h3>LISTA DE MASCOTAS</h3>
          <div className="filters-container">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar mascota o dueño..."
                className="search-input"
              />
            </div>
            <select 
              value={especieFilter} 
              onChange={(e) => setEspecieFilter(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todas las especies</option>
              <option value="perro">Perros</option>
              <option value="gato">Gatos</option>
            </select>
            {(searchTerm || especieFilter !== 'todos') && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {(searchTerm || especieFilter !== 'todos') && (
          <div className="results-info">
            <span>{filteredMascotas.length} de {mascotas.length} mascotas</span>
          </div>
        )}

        <Table 
          columns={columns}
          data={filteredMascotas}
          emptyMessage="No hay mascotas registradas"
        />
      </div>

      {/* Modal para agregar/editar/ver mascota */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={
          modalMode === 'add' ? 'Registrar Nueva Mascota' :
          modalMode === 'edit' ? 'Modificar Mascota' :
          'Detalles de la Mascota'
        }
      >
        <form onSubmit={handleSubmit} className="mascota-form">
          <div className="form-section">
            <h3 className="section-title">DATOS GENERALES DE LA MASCOTA</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>NOMBRE (*)</label>
                <input
                  type="text"
                  name="nombre_mascota"
                  value={formData.nombre_mascota}
                  onChange={handleChange}
                  placeholder="Nombre de la mascota"
                  required
                  disabled={modalMode === 'view'}
                />
              </div>
              <div className="form-group">
                <label>DUEÑO (*)</label>
                <select
                  name="id_cliente"
                  value={formData.id_cliente}
                  onChange={handleChange}
                  required
                  disabled={modalMode === 'view'}
                >
                  <option value="">Nombre y DNI del dueño</option>
                  {mockClientes.map(cliente => (
                    <option key={cliente.id_cliente} value={cliente.id_cliente}>
                      {cliente.nombre} {cliente.apellido_paterno} - DNI: {cliente.dni}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>SEXO (*)</label>
                <select
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  required
                  disabled={modalMode === 'view'}
                >
                  <option value="Macho">Masculino</option>
                  <option value="Hembra">Femenino</option>
                </select>
              </div>
              <div className="form-group">
                <label>COLOR (*)</label>
                <input
                  type="text"
                  name="color_pelaje"
                  value={formData.color_pelaje}
                  onChange={handleChange}
                  placeholder="Color del pelaje"
                  required
                  disabled={modalMode === 'view'}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>EDAD</label>
                <div className="edad-inputs">
                  <input
                    type="number"
                    name="edad_anios"
                    value={formData.edad_anios}
                    onChange={handleChange}
                    placeholder="Años"
                    min="0"
                    disabled={modalMode === 'view'}
                    style={{width: '60px', marginRight: '10px'}}
                  />
                  <span>Años</span>
                  <input
                    type="number"
                    name="edad_meses"
                    value={formData.edad_meses}
                    onChange={handleChange}
                    placeholder="Meses"
                    min="0"
                    max="11"
                    disabled={modalMode === 'view'}
                    style={{width: '60px', margin: '0 10px'}}
                  />
                  <span>Meses</span>
                </div>
              </div>
              <div className="form-group">
                <label>FOTO (Opcional)</label>
                <div className="photo-placeholder">
                  <div style={{width: '100%', height: '100px', background: '#ecf0f1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px'}}>
                    190×229
                  </div>
                  {modalMode !== 'view' && (
                    <button type="button" style={{marginTop: '10px', padding: '5px 15px', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                      Subir foto
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>ESPECIE (*)</label>
                <select
                  name="especie"
                  value={formData.especie}
                  onChange={handleChange}
                  required
                  disabled={modalMode === 'view'}
                >
                  <option value="">Especie de la mascota</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                </select>
              </div>
              <div className="form-group">
                <label>PESO (kg)</label>
                <input
                  type="number"
                  name="peso_kg"
                  value={formData.peso_kg}
                  onChange={handleChange}
                  placeholder="Peso en kilogramos"
                  step="0.1"
                  disabled={modalMode === 'view'}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>RAZA (*)</label>
                <select
                  name="raza"
                  value={formData.raza}
                  onChange={handleChange}
                  required
                  disabled={modalMode === 'view'}
                >
                  <option value="">Raza del perrito</option>
                  <option value="Golden Retriever">Golden Retriever</option>
                  <option value="Bulldog">Bulldog</option>
                  <option value="Husky Siberiano">Husky Siberiano</option>
                  <option value="Beagle">Beagle</option>
                  <option value="Pastor Alemán">Pastor Alemán</option>
                  <option value="Siamés">Siamés</option>
                  <option value="Persa">Persa</option>
                  <option value="Angora">Angora</option>
                  <option value="Bengalí">Bengalí</option>
                  <option value="Mestizo">Mestizo</option>
                </select>
              </div>
              <div className="form-group">
                <label>ESTERILIZADO (*)</label>
                <select
                  name="esterilizado"
                  value={formData.esterilizado}
                  onChange={handleChange}
                  required
                  disabled={modalMode === 'view'}
                >
                  <option value="Si">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="form-actions">
            {modalMode !== 'view' && (
              <button type="submit" className="btn-submit">
                {modalMode === 'add' ? 'FINALIZAR REGISTRO' : 'GUARDAR'}
              </button>
            )}
            <button type="button" onClick={() => setShowModal(false)} className="btn-cancel">
              {modalMode === 'view' ? 'CERRAR' : 'CANCELAR'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MascotasManagement;
