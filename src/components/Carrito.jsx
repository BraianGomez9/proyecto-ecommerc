import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    return (
        <div className='container'>
            <h1 className='main-title'>Carrito</h1>
            {carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h2>{prod.titulo}</h2>
                    <p>Precio unit: ${prod.precio} $</p>
                    <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                    <p>cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))}
            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio Total $:{precioTotal()}</h2>
                        <button onClick={vaciarCarrito}>Vaciar</button>
                    </>
                    :
                    <h2>El carrito esta vacio</h2>
            }

        </div>
    )
}

export default Carrito