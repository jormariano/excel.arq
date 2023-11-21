import { useState, useEffect } from "react"
// import { getUnTaller } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/config"

const ItemDetailContainer = () => {

    const [unTaller, setUnTaller] = useState(null)

    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "talleres", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data };
                setUnTaller(nuevoProducto);
            })
            .catch(error => console.log(error))
            
    }, [idItem])

    return (
        <>
            <ItemDetail {...unTaller} />
        </>
    )
}

export default ItemDetailContainer