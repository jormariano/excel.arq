import './CartWidget.css'
import { useContext, useState } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import Cart from '../Cart/Cart'

const CartWidget = () => {

    const imgCarrito = "../img/cart.jpg"

    const { cantidadTotal } = useContext(CarritoContext);

    const [openModal, setOpenModal] = useState(false);

    return (

        <div className="cart-widget">
            <button className="cart-widget-button" onClick={() => setOpenModal(true)}>
                <img className="img-carrito" src={imgCarrito} alt="Carrito de compras" />
                {
                    cantidadTotal > 0 && <h3> {cantidadTotal}</h3>
                }
            </button>
            <Cart
                open={openModal}
                onClose={() => setOpenModal(false)} />
        </div>
    )
}

export default CartWidget