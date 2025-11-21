// utils/mockData.js - Datos estáticos para demo

export const mockClientes = [
  {
    id_cliente: 1,
    dni: "12345678",
    nombre: "Juan",
    apellido_paterno: "Pérez",
    apellido_materno: "García",
    telefono: "987654321",
    email: "juan.perez@email.com",
    direccion: "Av. Principal 123, Lima",
    fecha_registro: "2024-01-15",
    estado: "Activo",
    genero: "M"
  },
  {
    id_cliente: 2,
    dni: "87654321",
    nombre: "María",
    apellido_paterno: "López",
    apellido_materno: "Silva",
    telefono: "912345678",
    email: "maria.lopez@email.com",
    direccion: "Jr. Los Olivos 456, San Isidro",
    fecha_registro: "2024-02-20",
    estado: "Activo",
    genero: "F"
  },
  {
    id_cliente: 3,
    dni: "45678912",
    nombre: "Carlos",
    apellido_paterno: "Mendoza",
    apellido_materno: "Ruiz",
    telefono: "965432178",
    email: "carlos.mendoza@email.com",
    direccion: "Calle Las Flores 789, Miraflores",
    fecha_registro: "2024-03-10",
    estado: "Activo",
    genero: "M"
  },
  {
    id_cliente: 4,
    dni: "78912345",
    nombre: "Ana",
    apellido_paterno: "Torres",
    apellido_materno: "Vega",
    telefono: "923456789",
    email: "ana.torres@email.com",
    direccion: "Av. Arequipa 321, Lima",
    fecha_registro: "2024-04-05",
    estado: "Activo",
    genero: "F"
  },
  {
    id_cliente: 5,
    dni: "32165498",
    nombre: "Roberto",
    apellido_paterno: "Sánchez",
    apellido_materno: "Castro",
    telefono: "987123456",
    email: "roberto.sanchez@email.com",
    direccion: "Jr. Huancayo 654, Surco",
    fecha_registro: "2024-05-12",
    estado: "Activo",
    genero: "M"
  },
  {
    id_cliente: 6,
    dni: "11223344",
    nombre: "Lucia",
    apellido_paterno: "Flores",
    apellido_materno: "Ramos",
    telefono: "999888777",
    email: "lucia.flores@email.com",
    direccion: "Av. Larco 888, Miraflores",
    fecha_registro: "2024-06-01",
    estado: "Activo",
    genero: "F"
  },
  {
    id_cliente: 7,
    dni: "55667788",
    nombre: "Pedro",
    apellido_paterno: "Gutierrez",
    apellido_materno: "Mora",
    telefono: "988776655",
    email: "pedro.gutierrez@email.com",
    direccion: "Calle Lima 234, San Miguel",
    fecha_registro: "2024-07-15",
    estado: "Activo",
    genero: "M"
  },
  {
    id_cliente: 8,
    dni: "99887766",
    nombre: "Sofia",
    apellido_paterno: "Ramirez",
    apellido_materno: "Cruz",
    telefono: "977665544",
    email: "sofia.ramirez@email.com",
    direccion: "Jr. Puno 567, Lince",
    fecha_registro: "2024-08-20",
    estado: "Activo",
    genero: "F"
  }
];

export const mockMascotas = [
  {
    id_mascota: 1,
    id_cliente: 1,
    nombre_mascota: "Max",
    especie: "Perro",
    raza: "Golden Retriever",
    sexo: "Macho",
    edad_anios: 3,
    edad_meses: 6,
    peso_kg: 28.5,
    color_pelaje: "Dorado",
    fecha_nacimiento: "2020-05-15",
    activo: true
  },
  {
    id_mascota: 2,
    id_cliente: 2,
    nombre_mascota: "Luna",
    especie: "Gato",
    raza: "Siamés",
    sexo: "Hembra",
    edad_anios: 2,
    edad_meses: 3,
    peso_kg: 4.2,
    color_pelaje: "Crema con puntos oscuros",
    fecha_nacimiento: "2021-08-20",
    activo: true
  },
  {
    id_mascota: 3,
    id_cliente: 1,
    nombre_mascota: "Rocky",
    especie: "Perro",
    raza: "Bulldog",
    sexo: "Macho",
    edad_anios: 5,
    edad_meses: 0,
    peso_kg: 22.0,
    color_pelaje: "Blanco con manchas marrones",
    fecha_nacimiento: "2019-03-10",
    activo: true
  },
  {
    id_mascota: 4,
    id_cliente: 3,
    nombre_mascota: "Mimi",
    especie: "Gato",
    raza: "Persa",
    sexo: "Hembra",
    edad_anios: 4,
    edad_meses: 2,
    peso_kg: 5.8,
    color_pelaje: "Gris",
    fecha_nacimiento: "2020-09-05",
    activo: true
  },
  {
    id_mascota: 5,
    id_cliente: 4,
    nombre_mascota: "Thor",
    especie: "Perro",
    raza: "Husky Siberiano",
    sexo: "Macho",
    edad_anios: 2,
    edad_meses: 8,
    peso_kg: 25.3,
    color_pelaje: "Blanco y negro",
    fecha_nacimiento: "2021-03-15",
    activo: true
  },
  {
    id_mascota: 6,
    id_cliente: 5,
    nombre_mascota: "Pelusa",
    especie: "Gato",
    raza: "Mestizo",
    sexo: "Hembra",
    edad_anios: 1,
    edad_meses: 6,
    peso_kg: 3.5,
    color_pelaje: "Negro",
    fecha_nacimiento: "2022-05-20",
    activo: true
  },
  {
    id_mascota: 7,
    id_cliente: 6,
    nombre_mascota: "Toby",
    especie: "Perro",
    raza: "Beagle",
    sexo: "Macho",
    edad_anios: 4,
    edad_meses: 1,
    peso_kg: 12.5,
    color_pelaje: "Tricolor",
    fecha_nacimiento: "2020-10-12",
    activo: true
  },
  {
    id_mascota: 8,
    id_cliente: 7,
    nombre_mascota: "Chloe",
    especie: "Gato",
    raza: "Angora",
    sexo: "Hembra",
    edad_anios: 3,
    edad_meses: 0,
    peso_kg: 4.8,
    color_pelaje: "Blanco",
    fecha_nacimiento: "2021-11-08",
    activo: true
  },
  {
    id_mascota: 9,
    id_cliente: 8,
    nombre_mascota: "Bruno",
    especie: "Perro",
    raza: "Pastor Alemán",
    sexo: "Macho",
    edad_anios: 6,
    edad_meses: 3,
    peso_kg: 35.0,
    color_pelaje: "Negro y café",
    fecha_nacimiento: "2018-08-15",
    activo: true
  },
  {
    id_mascota: 10,
    id_cliente: 2,
    nombre_mascota: "Nala",
    especie: "Gato",
    raza: "Bengalí",
    sexo: "Hembra",
    edad_anios: 2,
    edad_meses: 5,
    peso_kg: 4.0,
    color_pelaje: "Manchado",
    fecha_nacimiento: "2022-06-10",
    activo: true
  }
];

export const mockCitas = [
  {
    id_cita: 1,
    id_mascota: 1,
    nombre_mascota: "Max",
    id_cliente: 1,
    nombre_cliente: "Juan Pérez García",
    id_veterinario: 1,
    nombre_veterinario: "Dr. Carlos Vega",
    id_servicio: 1,
    nombre_servicio: "Vacunación",
    fecha_hora_programada: "2024-11-25T09:00:00",
    fecha: "2024-11-25",
    hora: "09:00",
    motivo_consulta: "Vacunación anual",
    estado: "Programada"
  },
  {
    id_cita: 2,
    id_mascota: 2,
    nombre_mascota: "Luna",
    id_cliente: 2,
    nombre_cliente: "María López Silva",
    id_veterinario: 2,
    nombre_veterinario: "Dra. Ana Martínez",
    id_servicio: 2,
    nombre_servicio: "Consulta General",
    fecha_hora_programada: "2024-11-26T10:30:00",
    fecha: "2024-11-26",
    hora: "10:30",
    motivo_consulta: "Control de peso",
    estado: "Programada"
  },
  {
    id_cita: 3,
    id_mascota: 3,
    nombre_mascota: "Rocky",
    id_cliente: 1,
    nombre_cliente: "Juan Pérez García",
    id_veterinario: 1,
    nombre_veterinario: "Dr. Carlos Vega",
    id_servicio: 3,
    nombre_servicio: "Baño y Peluquería",
    fecha_hora_programada: "2024-11-27T14:00:00",
    fecha: "2024-11-27",
    hora: "14:00",
    motivo_consulta: "Baño y corte de uñas",
    estado: "Programada"
  },
  {
    id_cita: 4,
    id_mascota: 4,
    nombre_mascota: "Mimi",
    id_cliente: 3,
    nombre_cliente: "Carlos Mendoza Ruiz",
    id_veterinario: 2,
    nombre_veterinario: "Dra. Ana Martínez",
    id_servicio: 1,
    nombre_servicio: "Vacunación",
    fecha_hora_programada: "2024-11-28T11:00:00",
    fecha: "2024-11-28",
    hora: "11:00",
    motivo_consulta: "Vacunación antirrábica",
    estado: "Programada"
  },
  {
    id_cita: 5,
    id_mascota: 5,
    nombre_mascota: "Thor",
    id_cliente: 4,
    nombre_cliente: "Ana Torres Vega",
    id_veterinario: 1,
    nombre_veterinario: "Dr. Carlos Vega",
    id_servicio: 4,
    nombre_servicio: "Cirugía Menor",
    fecha_hora_programada: "2024-11-29T15:30:00",
    fecha: "2024-11-29",
    hora: "15:30",
    motivo_consulta: "Cirugía menor - Extracción dental",
    estado: "Programada"
  },
  {
    id_cita: 6,
    id_mascota: 7,
    nombre_mascota: "Toby",
    id_cliente: 6,
    nombre_cliente: "Lucia Flores Ramos",
    id_veterinario: 1,
    nombre_veterinario: "Dr. Carlos Vega",
    id_servicio: 5,
    nombre_servicio: "Desparasitación",
    fecha_hora_programada: "2024-12-01T09:30:00",
    fecha: "2024-12-01",
    hora: "09:30",
    motivo_consulta: "Desparasitación trimestral",
    estado: "Programada"
  }
];

export const mockSolicitudes = [
  {
    id_solicitud: 1,
    id_mascota: 6,
    nombre_mascota: "Pelusa",
    id_cliente: 5,
    nombre_cliente: "Roberto Sánchez Castro",
    telefono_cliente: "987123456",
    motivo_solicitud: "Consulta de emergencia - vómitos",
    descripcion: "La mascota ha estado vomitando desde ayer",
    fecha_solicitud: "2024-11-21",
    hora_solicitud: "08:30",
    prioridad: "Alta",
    estado: "Pendiente"
  },
  {
    id_solicitud: 2,
    id_mascota: 1,
    nombre_mascota: "Max",
    id_cliente: 1,
    nombre_cliente: "Juan Pérez García",
    telefono_cliente: "987654321",
    motivo_solicitud: "Desparasitación",
    descripcion: "Solicito desparasitación para mi mascota",
    fecha_solicitud: "2024-11-20",
    hora_solicitud: "14:00",
    prioridad: "Media",
    estado: "Pendiente"
  },
  {
    id_solicitud: 3,
    id_mascota: 3,
    nombre_mascota: "Rocky",
    id_cliente: 1,
    nombre_cliente: "Juan Pérez García",
    telefono_cliente: "987654321",
    motivo_solicitud: "Control post-operatorio",
    descripcion: "Control después de cirugía de hace 2 semanas",
    fecha_solicitud: "2024-11-19",
    hora_solicitud: "10:15",
    prioridad: "Media",
    estado: "Atendida"
  },
  {
    id_solicitud: 4,
    id_mascota: 9,
    nombre_mascota: "Bruno",
    id_cliente: 8,
    nombre_cliente: "Sofia Ramirez Cruz",
    telefono_cliente: "977665544",
    motivo_solicitud: "Cojera en pata trasera",
    descripcion: "Mi perro está cojeando desde esta mañana",
    fecha_solicitud: "2024-11-21",
    hora_solicitud: "11:20",
    prioridad: "Alta",
    estado: "Pendiente"
  },
  {
    id_solicitud: 5,
    id_mascota: 8,
    nombre_mascota: "Chloe",
    id_cliente: 7,
    nombre_cliente: "Pedro Gutierrez Mora",
    telefono_cliente: "988776655",
    motivo_solicitud: "Vacunación",
    descripcion: "Necesito agendar vacuna anual",
    fecha_solicitud: "2024-11-20",
    hora_solicitud: "16:45",
    prioridad: "Baja",
    estado: "Pendiente"
  }
];

export const mockServicios = [
  {
    id_servicio: 1,
    id_tipo_servicio: 1,
    nombre_servicio: "Vacunación",
    descripcion: "Aplicación de vacunas preventivas",
    precio: 80.00,
    duracion_estimada: 30,
    activo: true
  },
  {
    id_servicio: 2,
    id_tipo_servicio: 1,
    nombre_servicio: "Consulta General",
    descripcion: "Consulta veterinaria general",
    precio: 60.00,
    duracion_estimada: 30,
    activo: true
  },
  {
    id_servicio: 3,
    id_tipo_servicio: 2,
    nombre_servicio: "Baño y Peluquería",
    descripcion: "Servicio completo de baño y corte",
    precio: 50.00,
    duracion_estimada: 60,
    activo: true
  },
  {
    id_servicio: 4,
    id_tipo_servicio: 3,
    nombre_servicio: "Cirugía Menor",
    descripcion: "Procedimientos quirúrgicos menores",
    precio: 300.00,
    duracion_estimada: 90,
    activo: true
  },
  {
    id_servicio: 5,
    id_tipo_servicio: 1,
    nombre_servicio: "Desparasitación",
    descripcion: "Tratamiento antiparasitario",
    precio: 40.00,
    duracion_estimada: 20,
    activo: true
  },
  {
    id_servicio: 6,
    id_tipo_servicio: 4,
    nombre_servicio: "Radiografía",
    descripcion: "Estudio radiográfico",
    precio: 120.00,
    duracion_estimada: 45,
    activo: true
  },
  {
    id_servicio: 7,
    id_tipo_servicio: 4,
    nombre_servicio: "Análisis de Sangre",
    descripcion: "Exámenes de laboratorio",
    precio: 100.00,
    duracion_estimada: 30,
    activo: true
  },
  {
    id_servicio: 8,
    id_tipo_servicio: 1,
    nombre_servicio: "Consulta de Emergencia",
    descripcion: "Atención veterinaria de urgencia",
    precio: 150.00,
    duracion_estimada: 45,
    activo: true
  },
  {
    id_servicio: 9,
    id_tipo_servicio: 2,
    nombre_servicio: "Corte de Uñas",
    descripcion: "Corte y limado de uñas",
    precio: 25.00,
    duracion_estimada: 15,
    activo: true
  },
  {
    id_servicio: 10,
    id_tipo_servicio: 3,
    nombre_servicio: "Esterilización",
    descripcion: "Cirugía de esterilización",
    precio: 250.00,
    duracion_estimada: 120,
    activo: true
  }
];

export const mockVeterinarios = [
  {
    id_veterinario: 1,
    nombre_completo: "Dr. Carlos Vega Morales",
    dni: "11223344",
    telefono: "945678912",
    email: "carlos.vega@veterinaria.com",
    especialidad: "Medicina General",
    nro_colegiatura: "CMVP-12345",
    fecha_contratacion: "2020-01-15",
    estado: "Activo",
    horario_atencion: "Lunes a Viernes 9:00-17:00"
  },
  {
    id_veterinario: 2,
    nombre_completo: "Dra. Ana Martínez López",
    dni: "55667788",
    telefono: "923456789",
    email: "ana.martinez@veterinaria.com",
    especialidad: "Cirugía",
    nro_colegiatura: "CMVP-23456",
    fecha_contratacion: "2021-03-20",
    estado: "Activo",
    horario_atencion: "Lunes a Sábado 10:00-18:00"
  },
  {
    id_veterinario: 3,
    nombre_completo: "Dr. Roberto Díaz Castro",
    dni: "99887766",
    telefono: "987321654",
    email: "roberto.diaz@veterinaria.com",
    especialidad: "Dermatología",
    nro_colegiatura: "CMVP-34567",
    fecha_contratacion: "2022-06-10",
    estado: "Activo",
    horario_atencion: "Martes a Sábado 11:00-19:00"
  }
];

export const mockTiposServicio = [
  { id_tipo_servicio: 1, descripcion: "Consulta Médica" },
  { id_tipo_servicio: 2, descripcion: "Estética" },
  { id_tipo_servicio: 3, descripcion: "Cirugía" },
  { id_tipo_servicio: 4, descripcion: "Diagnóstico" }
];

// Funciones helper
export const getClienteById = (id) => mockClientes.find(c => c.id_cliente === parseInt(id));
export const getMascotaById = (id) => mockMascotas.find(m => m.id_mascota === parseInt(id));
export const getVeterinarioById = (id) => mockVeterinarios.find(v => v.id_veterinario === parseInt(id));
export const getServicioById = (id) => mockServicios.find(s => s.id_servicio === parseInt(id));
export const getMascotasByCliente = (idCliente) => mockMascotas.filter(m => m.id_cliente === parseInt(idCliente));
export const getCitasByMascota = (idMascota) => mockCitas.filter(c => c.id_mascota === parseInt(idMascota));
