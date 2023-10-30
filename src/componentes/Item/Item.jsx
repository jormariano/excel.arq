import './Item.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ id, nombre, fecha, precio, moneda, descripcion, descripcion1, descripcion2, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log("Productos agregados: " + cantidad)
    }

    return (
        <div className='blog-card'>
            <div className="talleres-texto">
                <h2>{nombre}</h2>
                <h3>{fecha}</h3>
                <p><strong>{descripcion}</strong></p>
                <p>{descripcion1}</p>
                <p>{descripcion2}</p>
                <h2>Quedan: {stock} cupos</h2>
                <h3>Precio: {precio} {moneda}</h3>
                <button>Inscripción</button>
            </div>
            {
                agregarCantidad > 0 ? (<button>Terminar compra</button>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
            <div className="talleres-img">
                <img src={img} alt={nombre} />
            </div>
        </div>
    )
}

export default Item