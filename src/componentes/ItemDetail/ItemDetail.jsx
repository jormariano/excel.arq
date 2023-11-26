import './ItemDetail.css'


const ItemDetail = ({ id, nivel, nombre, fecha, descripcion, descripcion1, descripcion2, precio, moneda, stock, img }) => {

  return (
    <div className='item-detail-card'>
      <div className="item-detail">
        <h2>ItemDetail</h2>
        <h2 style={{ fontSize: '26px', marginBottom: '5px' }}>{nivel}</h2>
        <h2 style={{ fontSize: '26px' }}>{nombre}</h2>
        <h3 style={{ margin: '30px', fontSize: '24px', color: '#227447' }}>{fecha}</h3>
        <p><strong>{descripcion}</strong></p>
        <p>{descripcion1}</p>
        <p>{descripcion2}</p>
        <h3>Precio: {precio} {moneda}</h3>
      </div>
      <div className="item-detail-img">
        <img src={img} alt={nombre} />
      </div>
    </div>
  )
}

export default ItemDetail