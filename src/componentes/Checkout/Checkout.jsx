import './Checkout.css'
import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = ({ onClose }) => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const handleForm = (event) => {
        event.preventDefault()

        if (!nombre || !apellido || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return
        }

        if (email !== emailConfirmacion) {
            setError("Los campos de email no coinciden");
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nivel: producto.item.nivel,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            email
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "talleres", productoOrden.id)

                const productoDoc = await getDoc(productoRef)

                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error)
                        setError("Error al crear la orden, vuelva a intentarlo")
                    })
            })
            .catch((error) => {
                console.log("Error, no se puede actualizar el stock", error)
                setEmailConfirmacion("No se puede actualizar el stock, intente de nuevo")
            })
    }

    return (
        <div className='checkout'>
            <h2> Estas por acceder a:</h2>
            <form className='checkout-form' onSubmit={handleForm}>
                {
                    carrito.map(producto => (
                        <div className='checkout-productos' key={producto.item.id}>
                            <p>{producto.item.nivel} {producto.item.nombre} x {producto.cantidad} </p>
                            <p>Precio: {producto.item.precio} {producto.item.moneda}</p>
                            < hr />
                        </div>
                    ))
                }
                <h3><strong>Cantidad total: {cantidadTotal} talleres</strong></h3>
                <hr />

                <div className="checkout-formulario">

                    <label htmlFor="nombre"> Nombre: </label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="apellido"> Apellido: </label>
                    <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="emailConfirmacion">Email de confirmación: </label>
                    <input type="email" id="emailConfirmacion" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

                </div>

                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }
                <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                <button type="submit">Finalizar compra</button>
            </form>

            {
                ordenId && (
                    <strong>Gracias por su compra! Su número de orden es: {ordenId} </strong>
                )
            }

        </div>
    )
}


export default Checkout