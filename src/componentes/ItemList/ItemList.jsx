import Item from "../Item/Item"

const ItemList = ({ talleres }) => {
    return (
        <div>
            {talleres.map(taller => <Item key={taller.id} {...taller} />)}
        </div>
    )
}

export default ItemList