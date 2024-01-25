import "./productCart.css"
import foto from "../../assets/image/hamburguer.png"

function ProductCart() {
  return (
    <div className="productCartBox">
      <img src={foto} alt="Foto" />

      <div className="productCartContainer">
        <h2 className="productCartTitle">Spicy Burger</h2>
        <span className="productCartPrice">R$ 15,00</span>

        <div className="productCartFooter">
          <div>
            <button className="productCartQtdBtn">-</button>
            <span className="productCartQtd">01</span>
            <button className="productCartQtdBtn">+</button>
          </div>

          <span className="productCartPriceQtd">R$ 30,00</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
