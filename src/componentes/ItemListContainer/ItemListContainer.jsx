import { useState, useEffect } from "react"
// import { getTalleres, getPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = () => {

  const [talleres, setTalleres] = useState([])

  const { idCategoria } = useParams();

  useEffect(() => {

    const misProductos = idCategoria ? query(collection(db, "talleres"), where("idCat", "==", idCategoria)) : collection(db, "talleres");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setTalleres(nuevosProductos);
      })
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <>
      <ItemList talleres={talleres} />
    </>
  )
}

export default ItemListContainer