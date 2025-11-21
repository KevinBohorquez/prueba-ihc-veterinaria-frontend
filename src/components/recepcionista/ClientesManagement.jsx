import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import Modal from '../common/Modal';
import './ClientesManagement.css';
import { mockClientes, getMascotasByCliente } from '../../utils/mockData';

const ClientesManagement = () => {
  const [clientes, setClientes] = useState(mockClientes);
  const [filteredClientes, setFilteredClientes] = useState(mockClientes);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  
  // Estados para modales
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add', 'edit', 'view'
  const [selectedCliente, setSelectedCliente] = useState(null);
  
  // Formulario
  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    telefono: '',
    email: '',
    direccion: '',
    estado: 'Activo'
  });

  // Aplicar filtros
  useEffect(() => {
    let filtered = [...clientes];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(cliente => {
        const nombreCompleto = `${cliente.nombre} ${cliente.apellido_paterno} ${cliente.apellido_materno}`.toLowerCase();
        const dni = cliente.dni.toLowerCase();
        return nombreCompleto.includes(term) || dni.includes(term);
      });
    }

    if (statusFilter !== 'todos') {
      const estadoFiltro = statusFilter === 'activos' ? 'Activo' : 'Inactivo';
      filtered = filtered.filter(cliente => cliente.estado === estadoFiltro);
    }

    setFilteredClientes(filtered);
  }, [clientes, searchTerm, statusFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('todos');
  };

  // Funciones de modal
  const handleAdd = () => {
    setModalMode('add');
    setFormData({
      dni: '',
      nombre: '',
      apellido_paterno: '',
      apellido_materno: '',
      telefono: '',
      email: '',
      direccion: '',
      estado: 'Activo'
    });
    setShowModal(true);
  };

  const handleEdit = (cliente) => {
    setModalMode('edit');
    setSelectedCliente(cliente);
    setFormData({
      dni: cliente.dni,
      nombre: cliente.nombre,
      apellido_paterno: cliente.apellido_paterno,
      apellido_materno: cliente.apellido_materno,
      telefono: cliente.telefono,
      email: cliente.email,
      direccion: cliente.direccion,
      estado: cliente.estado
    });
    setShowModal(true);
  };

  const handleView = (cliente) => {
    setModalMode('view');
    setSelectedCliente(cliente);
    setFormData({
      dni: cliente.dni,
      nombre: cliente.nombre,
      apellido_paterno: cliente.apellido_paterno,
      apellido_materno: cliente.apellido_materno,
      telefono: cliente.telefono,
      email: cliente.email,
      direccion: cliente.direccion,
      estado: cliente.estado
    });
    setShowModal(true);
  };

  const handleDelete = (cliente) => {
    if (window.confirm(`¿Está seguro de eliminar al cliente ${cliente.nombre} ${cliente.apellido_paterno}?`)) {
      // Simulación de eliminación
      alert(`Cliente "${cliente.nombre} ${cliente.apellido_paterno}" eliminado correctamente (simulado)`);
      // NO eliminamos realmente, solo mostramos el mensaje
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (modalMode === 'add') {
      const nuevoCliente = {
        id_cliente: Math.max(...clientes.map(c => c.id_cliente)) + 1,
        ...formData,
        fecha_registro: new Date().toISOString().split('T')[0],
        genero: 'M'
      };
      setClientes([...clientes, nuevoCliente]);
      alert('Cliente registrado correctamente');
    } else if (modalMode === 'edit') {
      const updated = clientes.map(c => 
        c.id_cliente === selectedCliente.id_cliente ? { ...c, ...formData } : c
      );
      setClientes(updated);
      alert('Cliente actualizado correctamente');
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
      render: (cliente, index) => filteredClientes.indexOf(cliente) + 1
    },
    { key: 'dni', header: 'DNI' },
    { 
      key: 'nombre_completo', 
      header: 'Nombre Completo',
      render: (cliente) => `${cliente.nombre} ${cliente.apellido_paterno} ${cliente.apellido_materno}`
    },
    { key: 'telefono', header: 'Teléfono' },
    { key: 'email', header: 'Email' },
    { key: 'direccion', header: 'Dirección' },
    { 
      key: 'mascotas',
      header: 'Mascotas',
      render: (cliente) => {
        const mascotas = getMascotasByCliente(cliente.id_cliente);
        return mascotas.length;
      }
    },
    { 
      key: 'estado', 
      header: 'Estado',
      render: (cliente) => (
        <span className={`estado-badge ${cliente.estado.toLowerCase()}`}>
          {cliente.estado}
        </span>
      )
    },
    {
      key: 'acciones',
      header: 'Acciones',
      render: (cliente) => (
        <div className="action-buttons">
          <button 
            className="action-btn view-btn" 
            onClick={() => handleView(cliente)}
            title="Ver detalles"
          >
            👁️
          </button>
          <button 
            className="action-btn edit-btn" 
            onClick={() => handleEdit(cliente)}
            title="Editar"
          >
            ✏️
          </button>
          <button 
            className="action-btn delete-btn" 
            onClick={() => handleDelete(cliente)}
            title="Eliminar"
          >
            🗑️
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="clientes-management">
      <div className="section-header">
        <h2>GESTIÓN DE CLIENTES 👥</h2>
        <button className="btn-add" onClick={handleAdd}>
          + Nuevo Cliente
        </button>
      </div>

      <div className="clientes-table-section">
        <div className="table-header">
          <h3>LISTA DE CLIENTES</h3>
          <div className="filters-container">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por DNI o nombre..."
                className="search-input"
              />
            </div>
            <div className="filter-container">
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
                className="filter-select"
              >
                <option value="todos">Todos los estados</option>
                <option value="activos">Activos</option>
                <option value="inactivos">Inactivos</option>
              </select>
            </div>
            {(searchTerm || statusFilter !== 'todos') && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {(searchTerm || statusFilter !== 'todos') && (
          <div className="results-info">
            <span>
              {filteredClientes.length} de {clientes.length} clientes
              {searchTerm && ` que coinciden con "${searchTerm}"`}
              {statusFilter !== 'todos' && ` (${statusFilter})`}
            </span>
          </div>
        )}

        <Table 
          columns={columns}
          data={filteredClientes}
          emptyMessage="No hay clientes registrados"
        />
      </div>

      {/* Modal para agregar/editar/ver cliente */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={
          modalMode === 'add' ? 'Registrar Nuevo Cliente' :
          modalMode === 'edit' ? 'Modificar Cliente' :
          'Detalles del Cliente'
        }
      >
        <form onSubmit={handleSubmit} className="cliente-form">
          {/* DATOS PERSONALES */}
          <div className="form-section">
            <h3 className="section-title">DATOS PERSONALES</h3>
            <div className="form-row">
              <div className="form-group">
                <label>DNI DEL CLIENTE (*)</label>
                <input
                  type="text"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  placeholder="DNI"
                  required
                  disabled={modalMode === 'view'}
                  maxLength="8"
                />
              </div>
              <div className="form-group">
                <label>NOMBRES (*)</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombres"
                  required
                  disabled={modalMode === 'view'}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>APELLIDO PATERNO(*)</label>
                <input
                  type="text"
                  name="apellido_paterno"
                  value={formData.apellido_paterno}
                  onChange={handleChange}
                  placeholder="Apellido Paterno"
                  required
                  disabled={modalMode === 'view'}
                />
              </div>
              <div className="form-group">
                <label>APELLIDO MATERNO(*)</label>
                <input
                  type="text"
                  name="apellido_materno"
                  value={formData.apellido_materno}
                  onChange={handleChange}
                  placeholder="Apellido Materno"
                  required
                  disabled={modalMode === 'view'}
                />
              </div>
            </div>
          </div>

          {/* DATOS DE CONTACTO */}
          <div className="form-section">
            <h3 className="section-title">DATOS DE CONTACTO</h3>
            <div className="form-row">
              <div className="form-group">
                <label>TELÉFONO (*)</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  required
                  disabled={modalMode === 'view'}
                  maxLength="9"
                />
              </div>
              <div className="form-group">
                <label>EMAIL (*)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  disabled={modalMode === 'view'}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <label>DIRECCIÓN (*)</label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Dirección"
                  required
                  disabled={modalMode === 'view'}
                />
              </div>
            </div>
          </div>

          {/* Mostrar mascotas si está en modo editar o ver */}
          {(modalMode === 'edit' || modalMode === 'view') && selectedCliente && (
            <div className="form-section">
              <h3 className="section-title">MASCOTAS REGISTRADAS</h3>
              <table className="mascotas-table">
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>ESPECIE</th>
                    <th>RAZA</th>
                  </tr>
                </thead>
                <tbody>
                  {getMascotasByCliente(selectedCliente.id_cliente).map(mascota => (
                    <tr key={mascota.id_mascota}>
                      <td>{mascota.nombre_mascota}</td>
                      <td>{mascota.especie}</td>
                      <td>{mascota.raza}</td>
                    </tr>
                  ))}
                  {getMascotasByCliente(selectedCliente.id_cliente).length === 0 && (
                    <tr>
                      <td colSpan="3" style={{textAlign: 'center'}}>No tiene mascotas registradas</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

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

export default ClientesManagement;
