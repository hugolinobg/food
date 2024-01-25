import "./Navbar.css"
import logo from "../../assets/image/logo.png"
import bag from "../../assets/image/bag.png"
import Cart from "../cart/Cart.jsx"

function Navbar() {
  const openSidebar = () => {
    const event = new CustomEvent("openSidebar")
    window.dispatchEvent(event)
  }

  return (
    <div className="navbar">
      <img src={logo} alt="logotipo" className="logotipo" />

      <div className="menu">
        <a href="#">Histórico</a>

        <button className="btn btn-red" onClick={openSidebar}>
          <img src={bag} alt="sacalo" className="icon" />
          Sacola
        </button>
      </div>

      <Cart />
    </div>
  )
}

export default Navbar
