import React, { useState } from 'react';
import { mockCitas } from '../../utils/mockData';
import './CalendarioCitas.css'; 

const CalendarioCitas = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  return (
    <div className="calendar-container fade-in">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="nav-btn">◀</button>
        <h2>{currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' }).toUpperCase()}</h2>
        <button onClick={handleNextMonth} className="nav-btn">▶</button>
      </div>

      <div className="calendar-grid">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
          <div key={d} className="day-header">{d}</div>
        ))}
        
        {Array.from({ length: getFirstDayOfMonth(currentDate) }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-day empty"></div>
        ))}

        {Array.from({ length: getDaysInMonth(currentDate) }).map((_, i) => {
          const day = i + 1;
          const citas = mockCitas.filter(c => {
            const d = new Date(c.fecha);
            return d.getDate() === day && d.getMonth() === currentDate.getMonth();
          });
          
          return (
            <div key={day} className="calendar-day">
              <span className="day-num">{day}</span>
              <div className="day-events">
                {citas.map(c => (
                  <div key={c.id_cita} className={`event-pill ${c.estado.toLowerCase()}`} title={c.nombre_mascota}>
                    {c.hora.slice(0,5)} {c.nombre_mascota}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarioCitas;