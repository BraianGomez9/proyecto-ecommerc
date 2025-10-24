import { createContext, useEffect, useState } from "react";

// Función para obtener el carrito de localStorage de forma segura
const obtenerCarritoInicial = () => {
    try {
        const storedCart = localStorage.getItem("carrito");
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error("Error al leer carrito de localStorage:", error);
        return []; // Si hay error, devuelve un array vacío
    }
};

// Estado inicial del carrito
const carritoInicial = obtenerCarritoInicial();

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const handleAdd = (item, cantidad) => {
        const addedItem = { ...item, cantidad };
        const newCart = [...carrito];
        const intoCart = newCart.find((product) => product.id === addedItem.id);

        if (intoCart) {
            intoCart.cantidad += cantidad;
        } else {
            newCart.push(addedItem);
        }
        setCarrito(newCart);
    };

    const quantityCart = () => {
        return carrito.reduce((acc, item) => acc + item.cantidad, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // Guardar carrito en localStorage cada vez que cambia
    useEffect(() => {
        try {
            localStorage.setItem("carrito", JSON.stringify(carrito));
        } catch (error) {
            console.error("Error al guardar carrito en localStorage:", error);
        }
    }, [carrito]);

    return (
        <CartContext.Provider
            value={{
                carrito,
                handleAdd,
                quantityCart,
                precioTotal,
                vaciarCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
