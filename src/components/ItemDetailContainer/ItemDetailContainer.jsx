import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore ();

    const newdoc =doc(db, "productos", id);

    getDoc(newdoc).then(res =>{
      const data = res.data();
      const newProduct = {id: res.id, ...data};
      setProduct (newProduct);
    })
    
  }, []);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <div className="spinner-container"><Spinner /></div>}
    </div>
  );
};

export default ItemDetailContainer;
