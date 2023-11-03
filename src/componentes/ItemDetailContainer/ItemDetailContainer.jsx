import { useState, useEffect } from "react"
import { getUnTaller } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [unTaller, setUnTaller] = useState(null)

    const { idItem } = useParams();

    useEffect(() => {
        getUnTaller(idItem)
            .then(res => setUnTaller(res))
    }, [idItem])

    return (
        <>
            <ItemDetail {...unTaller} />
        </>
    )
}

export default ItemDetailContainer