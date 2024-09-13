import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { collection,getDocs,getFirestore,query,where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
  setLoading(true)

  const db = getFirestore();

const myProducts = categoriaId ? query(collection(db,"productos"), where("categoria","==",categoriaId))
: collection(db,"productos");

getDocs(myProducts).then((res) =>{
  const newproducts = res.docs.map((doc) => {
    const data = doc.data();
    return {id: doc.id, ...data};
  });
setProducts(newproducts);
})
.catch((error)=> console.log("error al buscar items",error))
.finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {loading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
