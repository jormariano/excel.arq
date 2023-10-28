import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "../img/carrito-compras.jpg"

    return (
        <div className="cart-widget">
            <img className="img-carrito" src={imgCarrito} alt="Carrito de compras" />
            <strong>2</strong>
        </div>
    )
}

export default CartWidget