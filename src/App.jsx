import './App.css';
import { useState,useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import CartProvider from './context/CartContext/CartProvider';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import { getFirestore, collection,getDocs,query,where, } from 'firebase/firestore';


const App = () => {
  const [products, setProducts] =useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db,"productos"),  where("precio", "<", 100));
    getDocs(q).then((QuerySnapshot) =>{
      if(QuerySnapshot.size === 0){
        
      }
      setProducts(
        QuerySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
      );
    });
    
  },[]);

  

return (
    
    <>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut/>} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;