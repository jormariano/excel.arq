import { useState, useEffect } from "react"
import { getTalleres, getPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const [talleres, setTalleres] = useState([])

  const { idCategoria } = useParams();

  useEffect(() => {

    const funcion = idCategoria ? getPorCategoria : getTalleres

    funcion(idCategoria)
      .then(res => setTalleres(res))

  }, [idCategoria])

  return (
    <>
      <ItemList talleres={talleres} />
    </>
  )
}

export default ItemListContainer