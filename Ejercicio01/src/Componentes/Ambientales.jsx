import React from "react";

export default function Ambientales({ proyectosAmbientales, onDeleteAmbiental }) {
  return (
    <div className="ambientales">
      <div className="titulo">
        <h2>Ambientales</h2>
        <h4>${proyectosAmbientales.reduce((total, p) => total + p.monto, 0)}</h4>
      </div>
      {proyectosAmbientales.map((proyecto, index) => (
        <div key={index} className="Info">
          <div className="izquierdo">
            <p className="Categoria"><b>{proyecto.categoria}</b></p>
            <p className="Descripcion">Descripción: {proyecto.Descripción}</p>
          </div>
          <div className="derecho">
            <p className="Monto">Monto: ${proyecto.monto}</p>
            <p className="Fecha">Fecha: {proyecto.fecha}</p>
          </div> 
          <div className="borrar">
          <button onClick={() => onDeleteAmbiental(proyecto.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
