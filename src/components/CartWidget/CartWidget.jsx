import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);

  return (
    <Link to="/cart" className="nav-cart">
      <BsCart2 className="icon" />
      {getTotalProducts() > 0 && (
        <span className="item-count">{getTotalProducts()}</span>
      )}
    </Link>
  );
}

export default CartWidget;
