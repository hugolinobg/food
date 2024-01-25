import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Dock } from "react-dock"
import ProductCart from "../productCart/productCart.jsx"
import "./Cart.css"

function Cart() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("openSidebar", () => {
      setShow(true)
    })
  }, [])

  function checkout() {
    navigate("/checkout")
  }

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      zIndex={9999}
      onVisibleChange={(visible) => {
        setShow(visible)
      }}
    >
      <div className="text-center">
        <h1>Meu Pedidio</h1>
      </div>

      <div className="list-product">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>

      <div className="footerCart">
        <div className="footerCartTotal">
          <span>Total</span>
          <strong>R$ 250,00</strong>
        </div>

        <div>
          <button className="btn btn-checkout" onClick={checkout}>
            Finalizar Pedido
          </button>
        </div>
      </div>
    </Dock>
  )
}

export default Cart
