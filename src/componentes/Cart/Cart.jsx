import './Cart.css'
import { useContext, useState } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from 'react-scroll'
import CartItem from "../CartItem/CartItem"
import Checkout from '../Checkout/Checkout'


const Cart = ({ open, onClose }) => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const [showCheckout, setShowCheckout] = useState(false);

    if (!open) return null;

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const mostrarCheckout = () => {
        setShowCheckout(true);
    };

    return (
        <div className="overlay" onClick={handleModalClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h4 className="closeButton" onClick={onClose}> X </h4>
                {cantidadTotal === 0 ? (
                    <div className="emptyCartMessage">
                        <h3>No hay productos en el carrito.</h3>
                        <h2>
                            <Link 
                                to="talleres"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={500}
                                onClick={onClose}
                            >
                                Ver Productos
                            </Link>
                        </h2>
                    </div>
                ) : showCheckout ? (
                    <Checkout onClose={onClose} />
                  ) : (
                    <div className='cart'>
                        {carrito.map((producto, index) => <CartItem key={index} {...producto} />)}
                        <h3>Total: {total}</h3>
                        <h3>Cantidad total: {cantidadTotal}</h3>
                        <div className='cart-button'>
                            <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                            <button onClick={mostrarCheckout}> Finalizar compra </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Cart