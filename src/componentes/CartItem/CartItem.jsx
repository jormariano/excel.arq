import './CartItem.css'
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"

const CartItem = ({ item, cantidad }) => {

    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div>
            <div className='cart-item'>
                <h3>{item.nivel} {item.nombre}</h3>
                <p>Cantidad: {cantidad}</p>
                <p>Precio: {item.precio} {item.moneda}</p>
                <button onClick={() => eliminarProducto(item.id)}>Eliminar producto</button>
            </div>
            < hr />
        </div>

    )
}

export default CartItem