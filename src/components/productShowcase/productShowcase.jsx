import "./ProductShowcase.css"
import bagBlack from "../../assets/image/bag-black.png"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext.jsx"

function ProductShowcase(PropTypes) {
  const { AddItemCart } = useContext(CartContext)

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

  return (
    <div className="productBox text-center">
      <img className="productImg" src={PropTypes.image} alt="Fotos" />

      <div>
        <h2 className="productTitle">{PropTypes.name}</h2>
        <p className="productDescription">{PropTypes.description}</p>
        <span className="productPrice">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(PropTypes.price)}
        </span>
      </div>

      <div className="productBtn">
        <button onClick={addItem} className="btn btn-cart">
          <img src={bagBlack} alt="sacalo" className="icon" /> Adicionar
        </button>
      </div>
    </div>
  )
}

export default ProductShowcase
