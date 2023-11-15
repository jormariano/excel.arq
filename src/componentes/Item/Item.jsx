import './Item.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'
import Cart from '../Cart/Cart'

const Item = ({ id, nivel, nombre, fecha, precio, moneda, descripcion, descripcion1, descripcion2, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const { agregarProducto } = useContext(CarritoContext);

    const [openModal, setOpenModal] = useState(false);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)

        const item = { id, nivel, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div id={id} className='blog-card'>
            <div className="talleres-texto">
                <h2 style={{ fontSize: '26px', marginBottom: '5px' }}>{nivel}</h2>
                <h2 style={{ fontSize: '26px' }}>{nombre}</h2>
                <h3 style={{ margin: '30px', fontSize: '24px', color: '#227447' }}>{fecha}</h3>
                <p><strong>{descripcion}</strong></p>
                <p>{descripcion1}</p>
                <p>{descripcion2}</p>
                <h2 style={{ margin: '20px' }}>Quedan: {stock} cupos</h2>
                <h3>Precio: {precio} {moneda}</h3>
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