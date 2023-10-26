import './DetrasDe.css'

const DetrasDe = () => {

  const detrasDe = "../img/detrasde-excel.jpg"

  return (
    <div id="detrasde" className="detrasDe">
      <h2>Función detrás de Excel.arq</h2>
      <h3>=(EXCEL;ARQUITECTURA;ENSEÑAR)</h3>
      <p>
        Soy Federico un apasionado del Excel, desde que aprendí el programa en un curso de primaria a los 11 años mi curiosidad por sus aplicaciones a los distintos ámbitos de la vida fue en aumento.
        Actualmente estoy finalizando la carrera de arquitectura, en la cual descubrí el enorme potencial que tiene saber aplicar Excel a la gestión de un proyecto.
        Me encanta enseñar y mucho más cuando se trata de la herramienta que me apasiona aplicada a mi profesión.
        Por todo esto es que fundé Excel.arq, un espacio donde podemos aprender e implementar todas las funciones de Excel directamente a la gestión de proyectos de arquitectura.
      </p>
      <img src={detrasDe} alt="Detras de Excel" />
    </div>
  )
}

export default DetrasDe