import { useState, useEffect } from "react"
import { getTalleres } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const [talleres, setTalleres] = useState([])

  useEffect(() => {

    getTalleres()
      .then(respuesta => setTalleres(respuesta))

  }, [])

  return (
    <>
      <ItemList talleres={talleres} />
    </>
  )
}

export default ItemListContainer