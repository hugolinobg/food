import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext.jsx"
import "./productCart.css"

function ProductCart(PropTypes) {
  const { AddItemCart, RemoveItemCart } = useContext(CartContext)

  function addItem() {
    const item = {
      id: PropTypes.id,
      name: PropTypes.name,
      price: PropTypes.price,
      image: PropTypes.image,
      qtd: 1,
    }

    AddItemCart(item)
  }

  function removeItem() {
    RemoveItemCart(PropTypes.id)
  }

  return (
    <div className="productCartBox">
      <img src={PropTypes.image} alt="Foto" />

      <div className="productCartContainer">
        <h2 className="productCartTitle">{PropTypes.name}</h2>
        <span className="productCartPrice">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(PropTypes.price)}
        </span>

        <div className="productCartFooter">
          <div>
            <button onClick={removeItem} className="productCartQtdBtn">
              -
            </button>
            <span className="productCartQtd">{PropTypes.qtd}</span>
            <button onClick={addItem} className="productCartQtdBtn">
              +
            </button>
          </div>

          <span className="productCartPriceQtd">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(PropTypes.price * PropTypes.qtd)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
