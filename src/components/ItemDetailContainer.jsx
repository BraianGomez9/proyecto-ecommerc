import { useEffect, useState } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "../main.css"

const ItemDetailContainer = ({ itemId }) => {

  const [item, setItem] = useState(null);

  const id = useParams().id;


  useEffect(() => {
    pedirItemPorId(Number(id))
      .then((res) => {
        setItem(res);
      })
  }, [id]);

  return (
    <div className="detail-container">
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer