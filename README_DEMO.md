# Veterinaria - Frontend (Modo Demo Sin Backend)

Este es el frontend del sistema de gestión veterinaria configurado para funcionar **SIN BACKEND**.

## ⚠️ MODO DEMO - Sin Conexión a Backend

Este proyecto ha sido modificado para funcionar completamente con datos mock (datos de ejemplo inventados). 
**NO REQUIERE** conexión al backend ni base de datos.

## 🎯 Cómo Funciona

El sistema usa un **interceptor global de fetch** que automáticamente redirige TODAS las llamadas al backend hacia datos mock locales. Esto significa que:

- ✅ No necesitas modificar ningún componente
- ✅ Todas las llamadas fetch funcionan automáticamente
- ✅ Los datos son inventados pero realistas
- ✅ Puedes navegar por todo el sistema libremente

## 🚀 Cómo Ejecutar

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

El proyecto se abrirá automáticamente en `http://localhost:5173`

## 🔐 Login - Modo Demo

El login ha sido simplificado. Puedes entrar con **CUALQUIER usuario y contraseña**.

### Pasos para entrar:

1. **Selecciona un rol** en la pantalla inicial:
   - Administrador
   - Veterinario  
   - Recepcionista

2. **Ingresa CUALQUIER credencial** (ejemplo):
   - Usuario: `admin` (o cualquier texto)
   - Contraseña: `123` (o cualquier texto)

3. **¡Listo!** Entrarás directamente al dashboard del rol seleccionado.

## 📊 Datos de Demostración

El sistema incluye datos de ejemplo inventados para:

- ✅ **5 Clientes** con información completa
- ✅ **6 Mascotas** registradas
- ✅ **5 Citas** programadas
- ✅ **3 Solicitudes** de atención
- ✅ **7 Servicios** veterinarios
- ✅ **3 Veterinarios** activos
- ✅ **2 Recepcionistas** 
- ✅ **4 Usuarios** del sistema
- ✅ **Historial Clínico** de las mascotas

## 🎯 Funcionalidades Disponibles

### Para Recepcionista:
- Ver y gestionar clientes
- Ver y gestionar mascotas
- Ver y crear citas
- Ver solicitudes de atención
- Ver servicios disponibles
- Ver veterinarios disponibles

### Para Veterinario:
- Ver citas programadas
- Ver solicitudes de atención
- Ver listado de mascotas
- Ver historial clínico

### Para Administrador:
- Gestionar usuarios
- Gestionar veterinarios
- Gestionar recepcionistas
- Gestionar servicios
- Ver dashboard con estadísticas

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de React
│   ├── admin/          # Componentes del administrador
│   ├── recepcionista/  # Componentes de recepcionista
│   ├── veterinario/    # Componentes de veterinario
│   └── common/         # Componentes compartidos
├── context/            # Context API (AuthContext)
├── pages/              # Páginas principales
├── styles/             # Estilos CSS
└── utils/              # Utilidades
    ├── mockData.js     # Datos de ejemplo
    ├── mockApi.js      # API simulada
    └── fetchWrapper.js # Interceptor global de fetch ⭐
```

## 🔧 Modificaciones Realizadas

1. **AuthContext**: Modificado para aceptar cualquier credencial
2. **Interceptor de fetch**: Creado `fetchWrapper.js` que intercepta TODAS las llamadas fetch
3. **mockApi**: API simulada con todas las operaciones CRUD
4. **Datos Mock**: Creados datos de ejemplo para todas las entidades
5. **Login Simplificado**: Eliminada validación de credenciales

## 💡 Notas Importantes

- **Los datos NO se persisten**: Al recargar la página, todos los cambios se pierden
- **Navegación libre**: Puedes navegar entre todas las secciones sin restricciones
- **No hay validaciones complejas**: Enfocado en demostrar la interfaz
- **Simulación de red**: Hay pequeños delays para simular llamadas al servidor
- **Interceptor global**: Todas las llamadas fetch son interceptadas automáticamente

## 🛠️ Comandos Disponibles

```bash
npm run dev      # Ejecutar en modo desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
npm run lint     # Ejecutar linter
```

## 🌐 Tecnologías Utilizadas

- React 19.1.0
- React Router DOM 7.6.2
- Vite 6.3.5
- CSS Modules

## 🔌 Arquitectura del Modo Demo

```
┌─────────────────┐
│   Componentes   │
│    (fetch())    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  fetchWrapper   │  ⬅ Interceptor Global
│  (main.jsx)     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│    mockApi      │  ⬅ API Simulada
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│    mockData     │  ⬅ Datos de Ejemplo
└─────────────────┘
```

## 📝 Para Restaurar Backend

Si deseas volver a conectar con el backend real:

1. Ir a `src/main.jsx`
2. Comentar o eliminar la línea: `enableMockFetch();`
3. Volver a compilar el proyecto

---

**Desarrollado con ❤️ para demostración**
