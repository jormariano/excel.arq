import { useState, useEffect } from "react"
import { getUnTaller } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [unTaller, setUnTaller] = useState(null)

    useEffect(() => {
        getUnTaller(2)
            .then(res => setUnTaller(res))
    }, [])

    return (
        <>
            <ItemDetail {...unTaller} />
        </>
    )
}

export default ItemDetailContainer