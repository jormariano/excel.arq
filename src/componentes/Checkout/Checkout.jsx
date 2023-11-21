import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = ({onClose}) => {

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

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito()
            })
            .catch(error => {
                console.log("Error al generar la orden", error)
                setError("Error al cargar la orden, intente de nuevo")
            })

    }

    return (
        <div>
            <h2>Check out</h2>
            <form onSubmit={handleForm}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad} </p>
                            <p>{producto.item.precio}</p>
                            < hr />
                        </div>
                    ))
                }
                <div className="form-checkout">

                    <label htmlFor="nombre"> Nombre: </label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="apellido"> Apellido: </label>
                    <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="emailConfirmacion">Email confirmacion: </label>
                    <input type="email" id="emailConfirmacion" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

                </div>

                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }

                <button type="submit">Finalizar compra</button>
            </form>

            {
                ordenId && (
                    <strong>Gracias por su compra! Su numero de orden es: {ordenId} </strong>
                )
            }

        </div>
    )
}


export default Checkout