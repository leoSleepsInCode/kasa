import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav>
      <img src={logo} alt="logo kasa" />
      <ul>
        <li>
          <Link to="/" className={pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className={pathname === "/about" ? "active" : ""}>
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
