import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-scroll'

const CartWidget = () => {

    const imgCarrito = "../img/carrito-compras.jpg"

    const { cantidadTotal } = useContext(CarritoContext);

    return (

        <div className="cart-widget">
            <Link to="cart">
                <img className="img-carrito" src={imgCarrito} alt="Carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget