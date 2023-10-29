import './ItemDetail.css'

const ItemDetail = ({id, nombre, fecha, descripcion, precio, moneda, stock, img}) => {
  return (
    <div className='blog-card'>
            <div className="talleres-texto">
                <h2>ItemDetail</h2>
                <h2>{nombre}</h2>
                <h3>{fecha}</h3>
                <p><strong>{descripcion}</strong></p>
                <h2>Quedan: {stock} cupos</h2>
                <h3>Precio: {precio} {moneda}</h3>
                <button>Inscripción</button>
            </div>
            <div className="talleres-img">
                <img src={img} alt={nombre} />
            </div>
        </div>
  )
}

export default ItemDetail