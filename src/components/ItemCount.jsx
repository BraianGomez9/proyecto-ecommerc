
const ItemCount = ({cantidad, handleRest, handleSum, handleAdd}) => {
    
    return (
        <div>
            <div className='item-count'>
                <button onClick={handleRest}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSum}>+</button>
            </div>
            <div className="agregar-al-carrito" onClick={handleAdd}>Agregar al carrito</div>
        </div>
    )
}

export default ItemCount