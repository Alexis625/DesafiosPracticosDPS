import React from "react";

export default function Formulario({ formData, setFormData, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <aside className="Formulario">
      <h4>Presupuesto de Proyecto</h4>
      <form onSubmit={handleSubmit}>
        <label>Tipo de Proyecto</label>
        <select id="Proyecto" name="tipoProyecto" value={formData.tipoProyecto} onChange={handleChange}>
          <option className="Elegir">Elija un opción</option>
          <option value="Proyecto1">No ambientales</option>
          <option value="Proyecto2">Ambientales</option>
        </select>

        <label>Categoría</label>
        <select id="Categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
          <option value="" disabled>Elige una categoría</option>
              <optgroup label="Proyectos No Ambientales">
                <option value="construccion-infraestructuras">Construcción de infraestructuras urbanas</option>
                <option value="desarrollo-software">Desarrollo de software empresarial</option>
                <option value="investigacion-tecnologia">Investigación y desarrollo en tecnología no relacionada con el medio ambiente</option>
                <option value="diseno-fabricacion-productos">Diseño y fabricación de productos de consumo</option>
                <option value="servicios-financieros">Servicios financieros</option>
                <option value="educacion-formacion">Educación y formación profesional</option>
              </optgroup>
              <optgroup label="Proyectos Ambientales">
                <option value="conservacion-biodiversidad">Conservación de la biodiversidad y restauración de ecosistemas</option>
                <option value="energias-renovables">Energías renovables</option>
                <option value="gestion-residuos-reciclaje">Gestión de residuos y reciclaje</option>
                <option value="agricultura-sostenible">Agricultura sostenible y prácticas de cultivo ecológico</option>
                <option value="investigacion-tecnologias-verdes">Investigación y desarrollo de tecnologías verdes</option>
                <option value="educacion-ambiental">Educación ambiental y sensibilización sobre el cambio climático</option>
              </optgroup>
            </select>

            <label>Monto</label>
        <input type="number" placeholder="$0.00" min="0" name="monto" value={formData.monto} onChange={handleChange}></input>

        <label>Fecha</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange}></input>

        <label>Descripción</label>
        <input type="text" placeholder="Descripción" name="Descripción" value={formData.Descripción} onChange={handleChange}></input>

        <button type="submit">Registrar</button>
      </form>
    </aside>
  );
}