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
          <NavLink to="/categoria/Aguas" className={({isActive}) =>(isActive?"link active": "link")} >AGUAS</NavLink>
            </li>
          <li>
          <NavLink to="/categoria/Cervezas" className={({isActive}) =>(isActive?"link active": "link")} >CERVEZAS</NavLink>
            </li>
          <li>
          <NavLink to="/categoria/Vinos" className={({isActive}) =>(isActive?"link active": "link")} >VINOS</NavLink>
            </li>
            <li>
            <NavLink to="/categoria/Gaseosas" className={({isActive}) =>(isActive?"link active": "link")} >GASEOSAS</NavLink>
            </li>
        </ul>
      </div>
      
    <CartWidget/>

    </nav>
  )
}

export default Navbar;