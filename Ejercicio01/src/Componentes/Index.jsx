// Index.jsx

import React, { useState } from "react";
import Formulario from "./Formulario";
import NoAmbientales from "./NoAmbientales";
import Ambientales from "./Ambientales";
import { data } from "../app/noambientales";
import { data2 } from "../app/ambientales";

export default function Index() {
  const [formData, setFormData] = useState({
    tipoProyecto: "",
    categoria: "",
    monto: "",
    date: "",
    Descripción: ""
  });

  const [proyectosNoAmbientales, setProyectosNoAmbientales] = useState(data);
  const [proyectosAmbientales, setProyectosAmbientales] = useState(data2);

  const calcularTotalProyectos = (proyectos) => {
    return proyectos.reduce((total, proyecto) => total + proyecto.monto, 0);
  };

  const totalNoAmbientales = calcularTotalProyectos(proyectosNoAmbientales);
  const totalAmbientales = calcularTotalProyectos(proyectosAmbientales);
  const totalGeneral = totalNoAmbientales + totalAmbientales;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { tipoProyecto, categoria, monto, date, Descripción } = formData;

    if (tipoProyecto !== "" && categoria !== "" && monto !== "" && date !== "" && Descripción !== "") {
      const proyecto = {
        categoria,
        monto: parseFloat(monto),
        fecha: date,
        Descripción
      };

      if (tipoProyecto === "Proyecto1") {
        setProyectosNoAmbientales([...proyectosNoAmbientales, proyecto]);
      } else if (tipoProyecto === "Proyecto2") {
        setProyectosAmbientales([...proyectosAmbientales, proyecto]);
      }

      // Limpia el formulario después de enviar
      setFormData({
        tipoProyecto: "",
        categoria: "",
        monto: "",
        date: "",
        Descripción: ""
      });
    } else {
      alert("Por favor complete todos los campos.");
    }
  };

  const handleDeleteNoAmbiental = (id) => {
    const updatedProyectos = proyectosNoAmbientales.filter(proyecto => proyecto.id !== id);
    setProyectosNoAmbientales(updatedProyectos);
  };
  
  const handleDeleteAmbiental = (id) => {
    const updatedProyectos = proyectosAmbientales.filter(proyecto => proyecto.id !== id);
    setProyectosAmbientales(updatedProyectos);
  };

  return (
    <main className="Fondo">
      <div className="Container">
        <Formulario formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        <div className="datos">
          <NoAmbientales proyectosNoAmbientales={proyectosNoAmbientales} onDeleteNoAmbiental={handleDeleteNoAmbiental} />
          <Ambientales proyectosAmbientales={proyectosAmbientales} onDeleteAmbiental={handleDeleteAmbiental} />
          <div className="Total">
            <h3>Total: ${totalGeneral}</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
