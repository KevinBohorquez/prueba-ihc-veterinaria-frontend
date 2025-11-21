// utils/fetchWrapper.js - Interceptor global de fetch para modo demo

import { mockApi } from './mockApi';

// Guardar el fetch original
const originalFetch = window.fetch;

// Función para extraer el endpoint de la URL
function getEndpointFromUrl(url) {
  try {
    const urlStr = url.toString();
    
    // Extraer la parte después de /api/v1/
    const match = urlStr.match(/\/api\/v1\/(.*?)(?:\?|$)/);
    if (match) {
      return match[1];
    }
    
    // Si no tiene /api/v1/, intentar extraer el path
    const urlObj = new URL(urlStr, window.location.origin);
    return urlObj.pathname;
  } catch {
    return '';
  }
}

// Wrapper de fetch que intercepta y usa mockApi
export async function mockFetch(url, options = {}) {
  const endpoint = getEndpointFromUrl(url);
  const method = (options.method || 'GET').toUpperCase();
  
  console.log(`[MOCK FETCH] ${method} ${endpoint}`);
  
  try {
    let data = null;
    
    // Mapear endpoints a funciones de mockApi
    if (endpoint.includes('clientes')) {
      if (method === 'GET') {
        const clienteId = endpoint.match(/clientes\/(\d+)/)?.[1];
        data = clienteId ? await mockApi.getClienteById(clienteId) : await mockApi.getClientes();
      } else if (method === 'POST') {
        data = await mockApi.createCliente(JSON.parse(options.body || '{}'));
      } else if (method === 'PUT') {
        const clienteId = endpoint.match(/clientes\/(\d+)/)?.[1];
        data = await mockApi.updateCliente(clienteId, JSON.parse(options.body || '{}'));
      }
    }
    else if (endpoint.includes('mascotas')) {
      if (method === 'GET') {
        const mascotaId = endpoint.match(/mascotas\/(\d+)/)?.[1];
        data = mascotaId ? await mockApi.getMascotaById(mascotaId) : await mockApi.getMascotas();
      } else if (method === 'POST') {
        data = await mockApi.createMascota(JSON.parse(options.body || '{}'));
      } else if (method === 'PUT') {
        const mascotaId = endpoint.match(/mascotas\/(\d+)/)?.[1];
        data = await mockApi.updateMascota(mascotaId, JSON.parse(options.body || '{}'));
      }
    }
    else if (endpoint.includes('cliente-mascota/cliente')) {
      const clienteId = endpoint.match(/cliente\/(\d+)/)?.[1];
      data = await mockApi.getMascotasByCliente(clienteId);
      data = { mascotas: data };
    }
    else if (endpoint.includes('citas')) {
      if (method === 'GET') {
        const citaId = endpoint.match(/citas\/(\d+)/)?.[1];
        data = citaId ? await mockApi.getCitaById(citaId) : await mockApi.getCitas();
      } else if (method === 'POST') {
        data = await mockApi.createCita(JSON.parse(options.body || '{}'));
      } else if (method === 'PUT') {
        const citaId = endpoint.match(/citas\/(\d+)/)?.[1];
        data = await mockApi.updateCita(citaId, JSON.parse(options.body || '{}'));
      } else if (method === 'DELETE') {
        const citaId = endpoint.match(/citas\/(\d+)/)?.[1];
        data = await mockApi.deleteCita(citaId);
      }
    }
    else if (endpoint.includes('solicitudes')) {
      if (method === 'GET') {
        data = await mockApi.getSolicitudes();
      } else if (method === 'POST') {
        data = await mockApi.createSolicitud(JSON.parse(options.body || '{}'));
      } else if (method === 'PUT') {
        const solicitudId = endpoint.match(/solicitudes\/(\d+)/)?.[1];
        data = await mockApi.updateSolicitud(solicitudId, JSON.parse(options.body || '{}'));
      }
    }
    else if (endpoint.includes('servicios') || endpoint.includes('tipos-servicio')) {
      data = await mockApi.getServicios();
      if (endpoint.includes('tipos-servicio')) {
        data = {tipos_servicio: [{id_tipo_servicio: 1, descripcion: 'General'}]};
      }
    }
    else if (endpoint.includes('veterinarios')) {
      if (method === 'GET') {
        data = await mockApi.getVeterinarios();
      } else if (method === 'POST') {
        data = await mockApi.createVeterinario(JSON.parse(options.body || '{}'));
      } else if (method === 'PUT') {
        const vetId = endpoint.match(/veterinarios\/(\d+)/)?.[1];
        data = await mockApi.updateVeterinario(vetId, JSON.parse(options.body || '{}'));
      }
    }
    else if (endpoint.includes('recepcionistas')) {
      if (method === 'GET') {
        data = await mockApi.getRecepcionistas();
      } else if (method === 'POST') {
        data = await mockApi.createRecepcionista(JSON.parse(options.body || '{}'));
      } else if (method === 'PUT') {
        const recepId = endpoint.match(/recepcionistas\/(\d+)/)?.[1];
        data = await mockApi.updateRecepcionista(recepId, JSON.parse(options.body || '{}'));
      }
    }
    else if (endpoint.includes('usuarios')) {
      if (method === 'GET') {
        data = await mockApi.getUsuarios();
      } else if (method === 'POST') {
        data = await mockApi.createUsuario(JSON.parse(options.body || '{}'));
      } else if (method === 'PUT') {
        const userId = endpoint.match(/usuarios\/(\d+)/)?.[1];
        data = await mockApi.updateUsuario(userId, JSON.parse(options.body || '{}'));
      }
    }
    else if (endpoint.includes('historial')) {
      const mascotaId = endpoint.match(/mascota\/(\d+)/)?.[1];
      data = mascotaId ? await mockApi.getHistorialByMascota(mascotaId) : [];
    }
    else {
      // Endpoint desconocido - retornar datos vacíos
      console.warn(`[MOCK FETCH] Endpoint no mapeado: ${endpoint}`);
      data = [];
    }
    
    // Simular respuesta de fetch
    return {
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => data,
      text: async () => JSON.stringify(data),
      headers: new Headers({
        'content-type': 'application/json'
      })
    };
    
  } catch (error) {
    console.error(`[MOCK FETCH ERROR] ${endpoint}:`, error);
    return {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: async () => ({ error: error.message }),
      text: async () => JSON.stringify({ error: error.message })
    };
  }
}

// Reemplazar fetch globalmente
export function enableMockFetch() {
  window.fetch = mockFetch;
  console.log('[MOCK FETCH] Modo demo activado - Todas las llamadas fetch usan mockApi');
}

// Restaurar fetch original
export function disableMockFetch() {
  window.fetch = originalFetch;
  console.log('[MOCK FETCH] Modo demo desactivado - fetch restaurado');
}
