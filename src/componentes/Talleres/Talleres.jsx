import './Talleres.css'

const Talleres = () => {

    const tallerFondo = "../img/fondo-taller.jpg"

    return (
        <div id="talleres" className="taller-excel">
            <img src={tallerFondo} alt="Imagen Taller" className="taller-img" />
            <div className="taller-texto">
                <h2>Taller excel.arq</h2>
                <h3>¿Por qué un taller y no un curso?</h3>
                <p>La propuesta está pensada para que todos participen, traigan sus trabajos, experiencias e inquietudes, así poder aplicar las herramientas de manera directa, fácil y práctica. Además, compartiendo las distintas maneras en que cada uno aplicó lo aprendido, nos permitirá al final del Taller tener un conocimiento más amplio.</p>
            </div>
        </div>
    )
}

export default Talleres