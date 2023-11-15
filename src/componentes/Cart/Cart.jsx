import './Cart.css'
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from 'react-scroll'
import CartItem from "../CartItem/CartItem"


const Cart = ({ open, onClose }) => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (!open) return null;

    return (
        <div className="overlay" onClick={onClose}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} ></div>
            <h4 className="closeButton" onClick={(e) => { e.stopPropagation(); onClose(); }}> X </h4>
            {cantidadTotal === 0 ? (
                <div className="emptyCartMessage">
                    <h3>No hay productos en el carrito.</h3>
                    <h2><Link to="talleres" spy={true} smooth={true} offset={-90} duration={500} onClick={onClose}>Ver Productos</Link></h2>
                </div>
            ) : (
                <div className='cart'>
                    {carrito.map((producto, index) => <CartItem key={index} {...producto} />)}
                    <h3>Total: {total}</h3>
                    <h3>Cantidad total: {cantidadTotal}</h3>
                    <div className='cart-button'>
                        <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                        <button onClick={() => { /* Agregar la lógica de finalizar compra */ }}> Finalizar compra </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Cart