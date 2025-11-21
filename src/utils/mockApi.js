// utils/mockApi.js - API Mock para simular el backend

import {
  mockClientes,
  mockMascotas,
  mockCitas,
  mockSolicitudes,
  mockServicios,
  mockVeterinarios,
  mockRecepcionistas,
  mockUsuarios,
  mockHistorialClinico,
  getMascotasByCliente,
  getCitasByMascota,
  getHistorialByMascota
} from './mockData';

// Simular delay de red
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API class
class MockAPI {
  constructor() {
    this.clientes = [...mockClientes];
    this.mascotas = [...mockMascotas];
    this.citas = [...mockCitas];
    this.solicitudes = [...mockSolicitudes];
    this.servicios = [...mockServicios];
    this.veterinarios = [...mockVeterinarios];
    this.recepcionistas = [...mockRecepcionistas];
    this.usuarios = [...mockUsuarios];
    this.historial = [...mockHistorialClinico];
  }

  // Clientes
  async getClientes() {
    await delay();
    // Convertir al formato esperado por el frontend
    return this.clientes.map(cliente => {
      const nombrePartes = cliente.nombre_completo.split(' ');
      return {
        id_cliente: cliente.id_cliente,
        dni: cliente.dni,
        nombre: nombrePartes[0],
        apellido_paterno: nombrePartes[1] || '',
        apellido_materno: nombrePartes.slice(2).join(' ') || '',
        telefono: cliente.telefono,
        email: cliente.email,
        direccion: cliente.direccion,
        estado: cliente.estado,
        fecha_registro: cliente.fecha_registro
      };
    });
  }

  async getClienteById(id) {
    await delay(200);
    return this.clientes.find(c => c.id_cliente === parseInt(id));
  }

  async createCliente(data) {
    await delay();
    const nuevoCliente = {
      id_cliente: Math.max(...this.clientes.map(c => c.id_cliente)) + 1,
      ...data,
      fecha_registro: new Date().toISOString().split('T')[0],
      estado: 'Activo'
    };
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  async updateCliente(id, data) {
    await delay();
    const index = this.clientes.findIndex(c => c.id_cliente === parseInt(id));
    if (index !== -1) {
      this.clientes[index] = { ...this.clientes[index], ...data };
      return this.clientes[index];
    }
    throw new Error('Cliente no encontrado');
  }

  async deleteCliente(id) {
    await delay();
    const index = this.clientes.findIndex(c => c.id_cliente === parseInt(id));
    if (index !== -1) {
      this.clientes[index].estado = 'Inactivo';
      return { success: true };
    }
    throw new Error('Cliente no encontrado');
  }

  // Mascotas
  async getMascotas() {
    await delay();
    return this.mascotas;
  }

  async getMascotaById(id) {
    await delay(200);
    return this.mascotas.find(m => m.id_mascota === parseInt(id));
  }

  async getMascotasByCliente(clienteId) {
    await delay(200);
    return this.mascotas.filter(m => m.id_cliente === parseInt(clienteId));
  }

  async createMascota(data) {
    await delay();
    const nuevaMascota = {
      id_mascota: Math.max(...this.mascotas.map(m => m.id_mascota)) + 1,
      ...data,
      estado: 'Activo'
    };
    this.mascotas.push(nuevaMascota);
    return nuevaMascota;
  }

  async updateMascota(id, data) {
    await delay();
    const index = this.mascotas.findIndex(m => m.id_mascota === parseInt(id));
    if (index !== -1) {
      this.mascotas[index] = { ...this.mascotas[index], ...data };
      return this.mascotas[index];
    }
    throw new Error('Mascota no encontrada');
  }

  // Citas
  async getCitas() {
    await delay();
    return this.citas;
  }

  async getCitaById(id) {
    await delay(200);
    return this.citas.find(c => c.id_cita === parseInt(id));
  }

  async createCita(data) {
    await delay();
    const nuevaCita = {
      id_cita: Math.max(...this.citas.map(c => c.id_cita)) + 1,
      ...data,
      estado: 'Programada'
    };
    this.citas.push(nuevaCita);
    return nuevaCita;
  }

  async updateCita(id, data) {
    await delay();
    const index = this.citas.findIndex(c => c.id_cita === parseInt(id));
    if (index !== -1) {
      this.citas[index] = { ...this.citas[index], ...data };
      return this.citas[index];
    }
    throw new Error('Cita no encontrada');
  }

  async deleteCita(id) {
    await delay();
    const index = this.citas.findIndex(c => c.id_cita === parseInt(id));
    if (index !== -1) {
      this.citas.splice(index, 1);
      return { success: true };
    }
    throw new Error('Cita no encontrada');
  }

  // Solicitudes
  async getSolicitudes() {
    await delay();
    return this.solicitudes;
  }

  async createSolicitud(data) {
    await delay();
    const nuevaSolicitud = {
      id_solicitud: Math.max(...this.solicitudes.map(s => s.id_solicitud)) + 1,
      ...data,
      fecha_solicitud: new Date().toISOString().split('T')[0],
      hora_solicitud: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
      estado: 'Pendiente'
    };
    this.solicitudes.push(nuevaSolicitud);
    return nuevaSolicitud;
  }

  async updateSolicitud(id, data) {
    await delay();
    const index = this.solicitudes.findIndex(s => s.id_solicitud === parseInt(id));
    if (index !== -1) {
      this.solicitudes[index] = { ...this.solicitudes[index], ...data };
      return this.solicitudes[index];
    }
    throw new Error('Solicitud no encontrada');
  }

  // Servicios
  async getServicios() {
    await delay();
    return this.servicios;
  }

  async createServicio(data) {
    await delay();
    const nuevoServicio = {
      id_servicio: Math.max(...this.servicios.map(s => s.id_servicio)) + 1,
      ...data,
      estado: 'Activo'
    };
    this.servicios.push(nuevoServicio);
    return nuevoServicio;
  }

  async updateServicio(id, data) {
    await delay();
    const index = this.servicios.findIndex(s => s.id_servicio === parseInt(id));
    if (index !== -1) {
      this.servicios[index] = { ...this.servicios[index], ...data };
      return this.servicios[index];
    }
    throw new Error('Servicio no encontrado');
  }

  // Veterinarios
  async getVeterinarios() {
    await delay();
    return this.veterinarios;
  }

  async createVeterinario(data) {
    await delay();
    const nuevoVet = {
      id_veterinario: Math.max(...this.veterinarios.map(v => v.id_veterinario)) + 1,
      ...data,
      estado: 'Activo'
    };
    this.veterinarios.push(nuevoVet);
    return nuevoVet;
  }

  async updateVeterinario(id, data) {
    await delay();
    const index = this.veterinarios.findIndex(v => v.id_veterinario === parseInt(id));
    if (index !== -1) {
      this.veterinarios[index] = { ...this.veterinarios[index], ...data };
      return this.veterinarios[index];
    }
    throw new Error('Veterinario no encontrado');
  }

  // Recepcionistas
  async getRecepcionistas() {
    await delay();
    return this.recepcionistas;
  }

  async createRecepcionista(data) {
    await delay();
    const nuevoRecep = {
      id_recepcionista: Math.max(...this.recepcionistas.map(r => r.id_recepcionista)) + 1,
      ...data,
      estado: 'Activo'
    };
    this.recepcionistas.push(nuevoRecep);
    return nuevoRecep;
  }

  async updateRecepcionista(id, data) {
    await delay();
    const index = this.recepcionistas.findIndex(r => r.id_recepcionista === parseInt(id));
    if (index !== -1) {
      this.recepcionistas[index] = { ...this.recepcionistas[index], ...data };
      return this.recepcionistas[index];
    }
    throw new Error('Recepcionista no encontrado');
  }

  // Usuarios
  async getUsuarios() {
    await delay();
    return this.usuarios;
  }

  async createUsuario(data) {
    await delay();
    const nuevoUsuario = {
      id_usuario: Math.max(...this.usuarios.map(u => u.id_usuario)) + 1,
      ...data,
      estado: 'Activo',
      fecha_creacion: new Date().toISOString().split('T')[0]
    };
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  async updateUsuario(id, data) {
    await delay();
    const index = this.usuarios.findIndex(u => u.id_usuario === parseInt(id));
    if (index !== -1) {
      this.usuarios[index] = { ...this.usuarios[index], ...data };
      return this.usuarios[index];
    }
    throw new Error('Usuario no encontrado');
  }

  // Historial Clínico
  async getHistorialByMascota(mascotaId) {
    await delay(200);
    return this.historial.filter(h => h.id_mascota === parseInt(mascotaId));
  }

  async createHistorial(data) {
    await delay();
    const nuevoHistorial = {
      id_historial: Math.max(...this.historial.map(h => h.id_historial)) + 1,
      ...data,
      fecha: new Date().toISOString().split('T')[0]
    };
    this.historial.push(nuevoHistorial);
    return nuevoHistorial;
  }

  // Reportes y estadísticas
  async getReportes() {
    await delay();
    return {
      total_clientes: this.clientes.length,
      total_mascotas: this.mascotas.length,
      citas_programadas: this.citas.filter(c => c.estado === 'Programada').length,
      solicitudes_pendientes: this.solicitudes.filter(s => s.estado === 'Pendiente').length,
      servicios_activos: this.servicios.filter(s => s.estado === 'Activo').length,
      veterinarios_activos: this.veterinarios.filter(v => v.estado === 'Activo').length
    };
  }
}

// Exportar instancia única
export const mockApi = new MockAPI();

// Exportar también funciones individuales para compatibilidad
export const getClientes = () => mockApi.getClientes();
export const getMascotas = () => mockApi.getMascotas();
export const getCitas = () => mockApi.getCitas();
export const getSolicitudes = () => mockApi.getSolicitudes();
export const getServicios = () => mockApi.getServicios();
export const getVeterinarios = () => mockApi.getVeterinarios();
export const getRecepcionistas = () => mockApi.getRecepcionistas();
export const getUsuarios = () => mockApi.getUsuarios();
