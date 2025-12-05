import React, { useState } from 'react';
import { mockCitas } from '../../utils/mockData';
import { useToast } from '../../context/ToastContext';
import './TableroCitas.css'; 

const TableroCitas = () => {
  const { addToast } = useToast();
  // Simulamos estados para el tablero del recepcionista
  const [columns, setColumns] = useState({
    programada: mockCitas.filter(c => c.estado === 'Programada'),
    confirmada: [], // Estado simulado para el ejemplo
    cancelada: mockCitas.filter(c => c.estado === 'Cancelada')
  });

  const onDragStart = (e, id, sourceCol) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('sourceCol', sourceCol);
  };

  const onDragOver = (e) => e.preventDefault();

  const onDrop = (e, destCol) => {
    const id = parseInt(e.dataTransfer.getData('id'));
    const sourceCol = e.dataTransfer.getData('sourceCol');

    if (sourceCol === destCol) return;

    const sourceItems = [...columns[sourceCol]];
    const destItems = [...columns[destCol]];
    const itemIndex = sourceItems.findIndex(i => i.id_cita === id);
    const [movedItem] = sourceItems.splice(itemIndex, 1);

    // Actualizar estado visual
    movedItem.estado = destCol.charAt(0).toUpperCase() + destCol.slice(1);
    destItems.push(movedItem);

    setColumns({ ...columns, [sourceCol]: sourceItems, [destCol]: destItems });
    addToast(`Cita movida a ${destCol.toUpperCase()}`, 'success');
  };

  return (
    <div className="kanban-board fade-in">
      <div className="kanban-header">
        <h2>Gestión Visual de Citas</h2>
        <p>Arrastra las tarjetas para actualizar el estado</p>
      </div>
      <div className="kanban-grid">
        {Object.entries(columns).map(([colId, items]) => (
          <div 
            key={colId} 
            className={`kanban-col col-${colId}`}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, colId)}
          >
            <h3>{colId.toUpperCase()} ({items.length})</h3>
            <div className="kanban-content">
              {items.map(cita => (
                <div 
                  key={cita.id_cita} 
                  className="kanban-card"
                  draggable
                  onDragStart={(e) => onDragStart(e, cita.id_cita, colId)}
                >
                  <div className="card-top">
                    <strong>{cita.nombre_mascota}</strong>
                    <small>{cita.hora}</small>
                  </div>
                  <div className="card-body">
                    <p>👤 {cita.nombre_cliente}</p>
                    <p>👨‍⚕️ {cita.nombre_veterinario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableroCitas;