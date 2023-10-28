import './Item.css'

const Item = ({ id, nombre, fecha, descripcion, descripcion1, descripcion2, stock, img }) => {
    return (
        <div className='blog-card'>
            <div className="talleres-texto">
                <h2>{nombre}</h2>
                <h3>{fecha}</h3>
                <p><strong>{descripcion}</strong></p>
                <p>{descripcion1}</p>
                <p>{descripcion2}</p>
                <h2>Quedan: {stock} cupos</h2>
                <button>Inscripción</button>
            </div>
            <div className="talleres-img">
                <img src={img} alt={nombre} />
            </div>
        </div>
    )
}

export default Item