import './Talleres.css'
import { talleres } from '../../asyncmock'

const Talleres = () => {

    // Dividir contenedor de imagen de fondo en taller de los titulos y parrafos, mirarlo en ChatGPT


    return (
        <div id="talleres">
            <div className="taller-excel">
                <h2>Taller excel.arq</h2>
                <h3>¿Por qué un taller y no un curso?</h3>
                <p>La propuesta está pensada para que todos participen, traigan sus trabajos, experiencias e inquietudes, así poder aplicar las herramientas de manera directa, fácil y práctica. Además, compartiendo las distintas maneras en que cada uno aplicó lo aprendido, nos permitirá al final del Taller tener un conocimiento más amplio.</p>
            </div>
            <hr />
            <div className='blog-container'>
                {talleres.map((taller, index) => (
                    <div key={index} className='blog-card'>
                        <img src={taller.img} alt={taller.nombre} />
                        <h3>{taller.nombre}</h3>
                        <h3>{taller.fecha}</h3>
                        <p>{taller.descripcion}</p>
                        <h3>Quedan: {taller.stock} cupos</h3>
                        <button>Inscripción</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Talleres