import { useState, createContext } from "react";

export const carritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

// Quede en la clase 12 a 1h 20'

export const CarritoProvider = () => {

    const [carrito, setCarrito] = useState([]);

    const [total, setTotal] = useState(0);

    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod.item.id === item.id)

        if (!productoExistente) {
            setCarrito( prev => [...prev, {item, cantidad}]);
            setCantidadTotal ( prev => prev + cantidad);
            setTotal (prev => prev + (item.precio * cantidad ));
        }
    }

}

