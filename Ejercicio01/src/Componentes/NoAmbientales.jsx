import React from "react";

export default function NoAmbientales({ proyectosNoAmbientales, onDeleteNoAmbiental }) {
  return (
    <div className="Noambientales">
      <div className="titulo">
        <h2>No Ambientales</h2>
        <h4>${proyectosNoAmbientales.reduce((total, p) => total + p.monto, 0)}</h4>
      </div>
      {proyectosNoAmbientales.map((proyecto, index) => (
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
          <button onClick={() => onDeleteNoAmbiental(proyecto.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}