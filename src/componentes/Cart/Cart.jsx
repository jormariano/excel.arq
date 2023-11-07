import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from 'react-scroll'
import CartItem from "../CartItem/CartItem"


const Cart = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);



    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el Carrito. <Link to="talleres">Ver Productos</Link></h2>
            </>
        );
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: {total}</h3>
            <h3>Cantidad total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()}> Vaciar carrito</button>
            <Link to="checkout"> Finalizar compra </Link>
        </div>
    )
}

export default Cart