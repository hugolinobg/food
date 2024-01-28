import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/image/logo.png"
import bag from "../../assets/image/bag.png"
import Cart from "../cart/Cart.jsx"

function Navbar(PropTypes) {
  const openSidebar = () => {
    const event = new CustomEvent("openSidebar")
    window.dispatchEvent(event)
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logotipo" className="logotipo" />
      </Link>

      {PropTypes.showMenu ? (
        <div className="menu">
          <Link to="/historic">Histórico</Link>

          <button className="btn btn-red" onClick={openSidebar}>
            <img src={bag} alt="sacalo" className="icon" />
            Sacola
          </button>
        </div>
      ) : null}

      <Cart />
    </div>
  )
}

export default Navbar
