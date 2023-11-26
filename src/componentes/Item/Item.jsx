import './Item.css'
import { useContext, useState } from "react"
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../../Context/CarritoContext'
import Cart from '../Cart/Cart'

const Item = ({ id, nivel, nombre, fecha, precio, moneda, descripcion, descripcion1, descripcion2, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const { agregarProducto } = useContext(CarritoContext);

    const [openModal, setOpenModal] = useState(false);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)

        const item = { id, nivel, nombre, precio, moneda };
        agregarProducto(item, cantidad);
    }

    return (
        <div id={id} className='blog-card'>
            <div className="talleres-texto">
                <h2>{nivel}</h2>
                <h2>{nombre}</h2>
                <h3>{fecha}</h3>
                <p><strong>{descripcion}</strong></p>
                <p>{descripcion1}</p>
                <p>{descripcion2}</p>
                <h3>Quedan: {stock} cupos</h3>
                <h4>Precio: {precio} {moneda}</h4>
                <div>
                    {
                        agregarCantidad > 0 ? (<div className='cart-buy-finish' onClick={() => setOpenModal(true)}> Ver carrito
                              <Cart
                open={openModal}
                onClose={() => setOpenModal(false)} /> </div>
                        ) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                    }
                </div>
            </div>
            <div className="talleres-img">
                <img src={img} alt={nombre} />
            </div>
        </div>
    )
}

export default Item