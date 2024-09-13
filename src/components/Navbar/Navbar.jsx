import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">

      <div className="Navbar-logo">
        <Link to="/">DRINKS</Link>
      </div>

      <div className="Navbar-links">
        <ul>
        
          <li>
          <NavLink to="/categoria/Aguas" className="link" activeclassName="active">AGUAS</NavLink>
            </li>
          <li>
          <NavLink to="/categoria/Cervezas" className="link" activeclassName="active">CERVEZAS</NavLink>
            </li>
          <li>
          <NavLink to="/categoria/Vinos" className="link" activeclassName="active">VINOS</NavLink>
            </li>
            <li>
            <NavLink to="/categoria/Gaseosas" className="link" activeclassName="active">GASEOSAS</NavLink>
            </li>
        </ul>
      </div>
      
    <CartWidget/>

    </nav>
  )
}

export default Navbar;