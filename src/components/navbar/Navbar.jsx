import "./Navbar.css"
import logo from "../../assets/image/logo.png"
import bag from "../../assets/image/bag.png"

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logotipo" className="logotipo" />

      <div className="menu">
        <a href="#">Histórico</a>

        <button className="btn btn-red">
          <img src={bag} alt="sacalo" className="icon" />
          Sacola
        </button>
      </div>
    </div>
  )
}

export default Navbar
