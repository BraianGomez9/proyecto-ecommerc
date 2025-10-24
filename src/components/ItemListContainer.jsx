import { pedirDatos } from "../helpers/pedirDatos"
import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "../main.css"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria
    const [titulo, setTitulo] = useState("Productos");
 

    /* Guardar productos de la database seteando un estado */
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria))
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Productos")
                }
            })
    }, [categoria])



    return (
        <div className="main-container">
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer