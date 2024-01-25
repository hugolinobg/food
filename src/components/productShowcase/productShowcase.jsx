import "./ProductShowcase.css"
import foto from "../../assets/image/hamburguer.png"
import bagBlack from "../../assets/image/bag-black.png"

function ProductShowcase() {
  return (
    <div className="productBox text-center">
      <img src={foto} alt="Fotos" />

      <div>
        <h2 className="productTitle">Spicy Burger</h2>
        <p className="productDescription">
          Hamburguer de 250g, queijo, tomate, alface e cebola.
        </p>
        <span className="productPrice">R$ 18,90</span>
      </div>

      <div className="productBtn">
        <button className="btn btn-cart">
          <img src={bagBlack} alt="sacalo" className="icon" /> Adicionar
        </button>
      </div>
    </div>
  )
}

export default ProductShowcase
